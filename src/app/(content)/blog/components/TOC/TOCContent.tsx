import React from 'react';
import TOCItemComponent from './TOCItem';
import { TOCItem } from '@/hooks/useTOC';

interface TOCContentProps {
  tocItems: TOCItem[];
  activeId: string | null;
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

const TOCContent: React.FC<TOCContentProps> = ({ tocItems, activeId, expandedSections, toggleSection }) => {
  return (
    <ul>
      {tocItems.map(item => (
        <TOCItemComponent
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
