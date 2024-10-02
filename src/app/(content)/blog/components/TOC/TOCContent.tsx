import React from 'react';
import TOCItem from './TOCItem';
import { TOCItem as TOCItemType } from '@/hooks/useTOC';

interface TOCContentProps {
  tocItems: TOCItemType[];
  activeId: string | null;
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

const TOCContent: React.FC<TOCContentProps> = ({ tocItems, activeId, expandedSections, toggleSection }) => {
  return (
    <ul className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 pb-24">
      {tocItems.map(item => (
        <TOCItem
          key={item.id}
          item={item}
          activeId={activeId}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
        />
      ))}
    </ul>
  );
};

export default TOCContent;
