import { useState, useEffect, useCallback } from 'react';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
  children?: TOCItem[];
}

const useTOC = (title: string, subtitle?: string) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const generateTOC = useCallback(() => {
    const headings: TOCItem[] = [];
    const stack: TOCItem[] = [];
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach(header => {
      const level = parseInt(header.tagName.replace('H', ''), 10);
      const id = header.id;
      const text = header.textContent || '';

      if (!id) return;

      const item: TOCItem = { id, text, level };

      while (stack.length && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (!stack.length) {
        if (text !== title && text !== subtitle) {
          headings.push(item);
        }
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        if (text !== title && text !== subtitle) {
          parent.children.push(item);
        }
      }

      stack.push(item);
    });

    setTocItems(headings);
  }, [title, subtitle]);  // dependencies for useCallback

  useEffect(() => {
    generateTOC();
  }, [title, subtitle, generateTOC]);

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

  return { tocItems, activeId, setActiveId, expandedSections, toggleSection };
};

export default useTOC;
