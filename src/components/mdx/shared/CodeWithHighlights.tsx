'use client';

import React, {
  useState,
  useCallback,
  ReactNode,
  ReactElement,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import clsx from 'clsx';

export interface Explanation {
  title: string;
  content: string;
}

interface CodeWithHighlightsProps {
  children: ReactNode;
  explanations: { [key: number]: Explanation };
  className?: string;
  title?: string;
  subtitle?: string;
}

export const CodeWithHighlights = ({
  children,
  explanations,
  className,
  title,
  subtitle,
}: CodeWithHighlightsProps) => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);

  const explanationRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const highlightRefs = useRef<{ [key: number]: HTMLSpanElement | null }>({});
  const sidePanelRef = useRef<HTMLDivElement | null>(null);
  const codeRef = useRef<HTMLDivElement | null>(null);

  // Handle highlight clicks and scrolling
  const handleClick = useCallback(
    (highlightId: number | null) => {
      setIsSidePanelOpen(activeHighlight !== highlightId);
      setActiveHighlight(highlightId === activeHighlight ? null : highlightId);

      if (highlightId !== null && highlightRefs.current[highlightId] && codeRef.current) {
        const highlightEl = highlightRefs.current[highlightId];
        codeRef.current.scrollTo({
          top: highlightEl!.offsetTop - 30,
          behavior: 'smooth',
        });
      }
    },
    [activeHighlight]
  );

  // Scroll to active explanation in side panel when opened or activeHighlight changes
  useEffect(() => {
    if (sidePanelRef.current && activeHighlight !== null) {
      const explanationEl = explanationRefs.current[activeHighlight];
      if (explanationEl) {
        sidePanelRef.current.scrollTo({
          top: explanationEl.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [activeHighlight]);

  // Highlight handling for children
  const processChildrenWithHighlights = useCallback(
    (node: ReactNode): ReactNode => {
      if (typeof node === 'string') {
        const highlightPattern = /\[\[highlight-(\d+)\]\]/g;
        const parts: ReactNode[] = [];
        let match;
        let lastIndex = 0;

        while ((match = highlightPattern.exec(node)) !== null) {
          const highlightId = parseInt(match[1], 10);
          if (match.index > lastIndex) {
            parts.push(node.slice(lastIndex, match.index));
          }
          parts.push(
            <HighlightButton
              key={highlightId}
              id={highlightId}
              active={highlightId === activeHighlight}
              handleClick={() => handleClick(highlightId)}
              highlightRef={(el: HTMLSpanElement | null) => (highlightRefs.current[highlightId] = el)}
            />
          );
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < node.length) {
          parts.push(node.slice(lastIndex));
        }

        return parts;
      }

      if (React.isValidElement(node)) {
        return React.cloneElement(node as ReactElement, {
          children: React.Children.map(node.props.children, processChildrenWithHighlights),
        });
      }

      return node;
    },
    [activeHighlight, handleClick]
  );

  const processedChildren = useMemo(() => processChildrenWithHighlights(children), [
    children,
    processChildrenWithHighlights,
  ]);

  return (
    <div className={clsx('rounded-md max-h-[calc(100vh-8rem)] w-full bg-white dark:bg-black/80 p-4 shadow-lg', className)}>
      <Header title={title} subtitle={subtitle} />
      <div className="p-2 flex max-h-[calc(100vh-24rem)]">
        <CodeContainer ref={codeRef}>{processedChildren}</CodeContainer>
        {isSidePanelOpen && <SidePanel explanations={explanations} activeHighlight={activeHighlight} handleClick={handleClick} />}
      </div>
    </div>
  );
};

const Header = ({ title, subtitle }: { title?: string; subtitle?: string }) => (
  <div className="flex flex-col px-2">
    {title && <h3 className="text-3xl md:text-4xl pt-4">{title}</h3>}
    {subtitle && <p className="pt-2">{subtitle}</p>}
  </div>
);

const CodeContainer = React.forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => (
  <div ref={ref} className="overflow-y-auto overflow-x-scroll w-full overscroll-contain md:overflow-x-auto transition-transform duration-300">
    {children}
  </div>
));

const SidePanel = ({ explanations, activeHighlight, handleClick }: { explanations: { [key: number]: Explanation }; activeHighlight: number | null; handleClick: (id: number | null) => void }) => {
  const sidePanelRef = useRef<HTMLDivElement | null>(null);

  // Scroll to active explanation when activeHighlight changes
  useEffect(() => {
    if (sidePanelRef.current && activeHighlight !== null) {
      const explanationEl = sidePanelRef.current.querySelector(`[data-id="${activeHighlight}"]`);
      if (explanationEl) {
        sidePanelRef.current.scrollTo({
          top: (explanationEl as HTMLElement).offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [activeHighlight]);

  return (
    <div ref={sidePanelRef} className="grow min-w-1/3 px-4 max-h-[calc(100vh-24rem)] overscroll-contain overflow-y-auto scrollbar-thin relative">
      {Object.keys(explanations).map((key) => {
        const explanationKey = parseInt(key, 10);
        const explanation = explanations[explanationKey];
        return (
          <ExplanationItem
            key={explanationKey}
            explanation={explanation}
            active={explanationKey === activeHighlight}
            onClick={() => handleClick(explanationKey)}
            dataId={explanationKey}
          />
        );
      })}
    </div>
  );
};

const ExplanationItem = ({ explanation, active, onClick, dataId }: { explanation: Explanation; active: boolean; onClick: () => void; dataId: number }) => (
  <div className="mb-4" data-id={dataId}>
    <h4
      className={clsx('text-lg font-semibold cursor-pointer', {
        'text-blue-600 dark:text-blue-300': active,
        'text-gray-900 dark:text-gray-100': !active,
      })}
      onClick={onClick}
    >
      {explanation.title}
    </h4>
    <p className="text-sm md:text-base">{explanation.content}</p>
  </div>
);

const HighlightButton = ({
  id,
  active,
  handleClick,
  highlightRef,
}: {
  id: number;
  active: boolean;
  handleClick: () => void;
  highlightRef: (el: HTMLSpanElement | null) => void;
}) => (
  <span
    ref={highlightRef}
    className="mb-2 inline-flex items-center justify-center w-5 h-5 bg-white/10 hover:bg-white/30 rounded-md cursor-pointer"
  >
    <span className={clsx('hover:opacity-80 hover:scale-110 inset-0 flex items-center justify-center bg-blue-900 rounded-md', { 'opacity-100 scale-125 p-1': active, 'opacity-20': !active })}>
      <button
        className="p-1 w-4 h-4 text-base flex justify-center items-center font-extrabold rounded-md text-gray-100"
        onClick={handleClick}
        aria-label={`Highlight ${id}`}
      >
        {id}
      </button>
    </span>
  </span>
);
