import React from 'react';
import type { TOCItem } from '@/hooks/useTOC';
import Link from 'next/link';
import clsx from 'clsx';


interface TOCItemProps {
  item: TOCItem;
  activeId: string | null;
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

const TOCItem: React.FC<TOCItemProps> = ({ item, activeId, expandedSections, toggleSection }) => {
  const isActive = activeId === item.id;
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedSections.has(item.id);

  return (
    <li key={item.id} className={`ml-${item.level * 2} text-gray-900 `}>
      {hasChildren ? (
        <>
          <div className="w-full inline-flex justify-between hover:bg-blue-100 dark:hover:bg-blue-900 px-2 h-full w-full focus:outline-none rounded">
            <Link href={`#${item.id}`} className={clsx(`flex-1 block overflow-wrap break-words py-2`, {
              'text-primary-700 dark:text-primary-300': !isActive,
              'text-primary-900 dark:text-primary-100': isActive
            })} scroll={true}>
              <span>{item.text}</span>
            </Link>
            <button
              onClick={() => toggleSection(item.id)}
              className="flex w-6 justify-center items-center text-blue-500"
              aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
            >
              {isExpanded ? '[-]' : '[+]'}
            </button>
          </div>
          {isExpanded && (
            <ul className="pl-4">
              {item.children!.map(child => (
                <TOCItem
                  key={child.id}
                  item={child}
                  activeId={activeId}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
          href={`#${item.id}`}
          className={clsx(
            "block hover:bg-blue-200 dark:hover:bg-blue-950 rounded overflow-wrap break-words",
            {
              'text-gray-900 dark:text-primary-100': isActive,
              'text-gray-700 dark:text-primary-300': !isActive
            }
          )}
          scroll={true}
        >
          {item.text}
        </Link>
      )}
    </li>
  );
};

export default TOCItem;
