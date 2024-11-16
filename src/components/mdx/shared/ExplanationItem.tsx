"use client"

import { useEffect, useRef, memo } from 'react';
import { useHighlight, useSidePanel } from '../contexts/HighlightContext';
import clsx from 'clsx';

interface ExplanationItemProps {
  dataId: number;
  children: React.ReactNode;
}

const ExplanationItemComponent = ({ dataId, children }: ExplanationItemProps) => {
  const { activeHighlight } = useHighlight();
  const headerRef = useRef<HTMLDivElement | null>(null);

  const isActive = activeHighlight === dataId;

  useEffect(() => {
    console.log('Active highlight:', activeHighlight, 'Explanation item ID:', dataId);
    if (isActive && headerRef.current) {
      console.log('Element is active and found:', headerRef.current);
    }
  }, [activeHighlight, dataId, isActive]);

  return (
    <span className="block w-full mb-6" data-id={dataId} ref={headerRef}>
      {children}
    </span>
  );
};

export const ExplanationItem = memo(ExplanationItemComponent, (prevProps, nextProps) => {
  return prevProps.dataId === nextProps.dataId;
});

interface ItemHeaderProps {
  dataId: number;
  children: React.ReactNode;
}

interface ItemContentProps {
  children: React.ReactNode;
}

export const ItemHeader = ({ dataId, children }: ItemHeaderProps) => {
  const explanationRef = useRef<HTMLHeadingElement>(null);
  const { activeHighlight, dispatch } = useHighlight();
  const { toggleSidePanel } = useSidePanel();

  const isActive = activeHighlight === dataId;

  const handleClick = () => {
    if (isActive) {
      dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: null });
      toggleSidePanel(false)
    } else {
      dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: dataId })
      toggleSidePanel(true)
    }
  };

  return (
    <h4
      ref={explanationRef}
      className={clsx('text-lg font-semibold cursor-pointer', {
        'text-blue-600 dark:text-blue-300': isActive,
        'text-gray-900 dark:text-gray-100': !isActive,
      })}
      onClick={handleClick}
    >
      {children}
    </h4>
  );
};

export const ItemContent = ({ children }: ItemContentProps) => (
  <span className="text-sm md:text-base mt-2">
    {children}
  </span>
)
