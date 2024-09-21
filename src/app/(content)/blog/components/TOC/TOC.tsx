'use client'

import React, { useState } from 'react';
import clsx from 'clsx';
import TOCContainer from './TOCContainer';
import TOCContent from './TOCContent';
import useTOC from '@/hooks/useTOC';
import useActiveTOC from '@/hooks/useActiveTOC';

interface TOCProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const TOC: React.FC<TOCProps> = ({ title, subtitle, className }) => {
  const { tocItems, activeId, setActiveId, expandedSections, toggleSection } = useTOC(title, subtitle);
  const [showTOC, setShowTOC] = useState<boolean>(false);

  useActiveTOC(setActiveId);


  return (
    <TOCContainer showTOC={showTOC} toggleTOC={() => setShowTOC(!showTOC)}>
      <TOCContent
        tocItems={tocItems}
        activeId={activeId}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />
    </TOCContainer>
  );
};

export default TOC;