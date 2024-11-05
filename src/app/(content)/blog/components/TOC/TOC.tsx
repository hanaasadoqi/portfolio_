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
  type?: string;
}

const TOC: React.FC<TOCProps> = ({ title, subtitle, className, type }) => {
  const { tocItems, activeId, setActiveId, expandedSections, toggleSection } = useTOC(title, subtitle);
  const [showTOC, setShowTOC] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useActiveTOC(setActiveId);

  const toggleTOC = () => {
    setShowTOC(!showTOC)
  }

  return (
    <TOCContainer showTOC={showTOC} toggleTOC={toggleTOC} type={type}>
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