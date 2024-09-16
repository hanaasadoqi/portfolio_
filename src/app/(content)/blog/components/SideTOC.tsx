'use client'

import React, { useEffect, useState, useMemo } from 'react';
import { debounce } from 'lodash';
import Link from 'next/link';
import clsx from 'clsx';

interface TOCItem {
  id: string;
  text: string;
  level: number;
  children?: TOCItem[];
}

const SideTOC: React.FC<{ title: string; subtitle?: string; className?: string; }> = ({ title, subtitle, className }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const generateTOC = () => {
    const headings: TOCItem[] = [];
    const stack: TOCItem[] = [];
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach(header => {
      const level = parseInt(header.tagName.replace('H', ''), 10);
      const id = header.id;
      const text = header.textContent || '';

      const item: TOCItem = { id, text, level };

      while (stack.length && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (!stack.length) {
        headings.push(item);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
      }

      stack.push(item);
    });

    setTocItems(headings);
  };

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        const visibleEntries: IntersectionObserverEntry[] = [];
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                visibleEntries.push(entry);
              }
            });
            if (visibleEntries.length) {
              const id = visibleEntries[0].target.id;
              if (activeId !== id) setActiveId(id)
            }
          },
          { rootMargin: '0px', threshold: [0.2, 0.4, 0.6, 0.8] }
        );

        document.querySelectorAll('h2, h3, h4, h5, h6').forEach(header => {
          observer.observe(header);
        });

        return () => {
          observer.disconnect();
        };
      }, 200),
    []
  );

  useEffect(() => {
    generateTOC();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const newExpandedSections = new Set(prev);
      if (newExpandedSections.has(id)) {
        newExpandedSections.delete(id);
      } else {
        newExpandedSections.add(id);
      }
      return newExpandedSections;
    });
  };

  const renderTOCItems = (items: TOCItem[]) => (
    <ul>
      {items.map(item => (
        item.text !== title && item.text !== subtitle && (
          <li key={item.id} className={`ml-${item.level * 4} text-gray-900`}>
            {item.children ? (
              <div>
                <div className="inline-flex justify-between hover:bg-blue-100 h-full w-full focus:outline-none ">

                  <Link href={`#${item.id}`} className={`flex-1 block outline:none break-normal py-2 ${activeId === item.id ? 'text-gray-900' : 'text-gray-500'}`}>
                    <span>{item.text}</span>
                  </Link>
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="flexw-6 justify-center items-center text-blue-500"
                  >
                    {expandedSections.has(item.id) ? '[-]' : '[+]'}
                  </button>
                </div>
                {expandedSections.has(item.id) && (
                  <div className="pl-4">
                    {renderTOCItems(item.children)}
                  </div>
                )}
              </div>
            ) : (
              <Link href={`#${item.id}`} className={clsx(`block break-normal py-2`, {
                'text-gray-900': activeId === item.id,
                'text-gray-500': activeId !== item.id
              })
              }>
                {item.text}
              </Link>
            )}
          </li>
        )
      ))}
    </ul >
  );

  return (
    <aside className={clsx("sticky top-0 right-0 w-64 h-screen bg-gray-100 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col", className)}>
      <div className="sticky top-0 z-10 flex items-center justify-center dark:bg-gray-800">
        <h2 className="text-xl font-bold mb-0 py-4">Table of Contents</h2>
      </div>
      <div className="flex-1 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 p-4">
        {renderTOCItems(tocItems)}
      </div>
    </aside>
  );
};

export default SideTOC;
