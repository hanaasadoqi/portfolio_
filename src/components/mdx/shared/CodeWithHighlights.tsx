'use client';

import { Children, cloneElement, isValidElement, ReactElement, ReactNode, Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { HighlightProvider, useHighlight, SidePanelProvider, useSidePanel } from '../contexts/HighlightContext';
import { LoadingOverlay } from '@/components';

interface CodeWithHighlightsProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const CodeWithHighlights = ({
  children,
  className,
  title,
  subtitle,
}: CodeWithHighlightsProps) => {
  return (
    <HighlightProvider>
      <SidePanelProvider>
        <div
          className={clsx(
            'rounded-md max-h-[calc(100vh-8rem)] w-full bg-white dark:bg-black/80 p-4 shadow-lg',
            className
          )}
        >
          <Header title={title} subtitle={subtitle} />
          <div className="p-2 flex max-h-[calc(100vh-24rem)] overscroll-contain overflow-hidden">
            {children}
          </div>
        </div>
      </SidePanelProvider>
    </HighlightProvider>
  );
};

const Header = ({ title, subtitle }: { title?: string; subtitle?: string }) => (
  <div className="flex flex-col px-2">
    {title && <h3 className="text-xl md:text-2xl">{title}</h3>}
    {subtitle && <p className="pt-2">{subtitle}</p>}
  </div>
);

interface SidePanelProps {
  children: React.ReactNode;
}

export const SidePanel = ({ children }: SidePanelProps) => {
  const { activeHighlight, dispatch } = useHighlight();
  const { toggleSidePanel, isSidePanelOpen } = useSidePanel();
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeHighlight !== null && sideRef.current) {
      toggleSidePanel(true)
      const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);

      if (explanationEl) {
        setTimeout(() => {
          explanationEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
        }, 100);
      }
    }
  }, [isSidePanelOpen, toggleSidePanel, activeHighlight]);

  const handleClose = () => {
    dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: null });
    toggleSidePanel(false);
  };


  return isSidePanelOpen && (
    <div
      ref={sideRef}
      className={clsx(
        'relative flex flex-col transition-all duration-300 ease-in-out px-4 max-h-[calc(100vh-24rem)]',
        {
          'w-0 opacity-0': !isSidePanelOpen,
          'min-w-1/3 grow opacity-100': isSidePanelOpen,
        }
      )}
    >
      <button
        onClick={handleClose}
        className="absolute z-10 top-0 right-0 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Close
      </button>
      <div className="h-full w-full overflow-y-auto overscroll-contain scrollbar-hide">
        <Suspense fallback={<LoadingOverlay />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
};

interface CodeContainerProps {
  children: React.ReactNode;
  language?: string;
}

export const CodeContainer = ({ children, language }: CodeContainerProps) => {
  const { activeHighlight } = useHighlight();
  const codeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeHighlight) {
      const codeElement = codeRef?.current?.querySelector(`[data-id="${activeHighlight}"]`);
      if (codeElement && codeRef.current) {
        codeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }
  }, [activeHighlight])

  const getHighlightPattern = (language: string) => {
    switch (language) {
      case 'javascript':
        return /\/\/\s*highlight-(\d+)/g;
      case 'scss':
        return /\/\*\s*highlight-(\d+)\s*\*\//g;
      case 'python':
        return /#\s*highlight-(\d+)/g;
      default:
        return /\[\[highlight-(\d+)\]\]/g;
    }
  };

  const processStringWithHighlights = useCallback((text: string): ReactNode[] => {
    const highlightPattern = getHighlightPattern(language as string);
    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = highlightPattern.exec(text)) !== null) {
      const highlightId = parseInt(match[1], 10);

      if (match.index > lastIndex) {
        parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
      }

      parts.push(
        <HighlightButton
          key={highlightId}
          id={highlightId}
        />
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex)}</span>);
    }

    return parts;
  }, [language])

  const processChildrenWithHighlights = useCallback((node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      return processStringWithHighlights(node);
    }

    if (isValidElement(node)) {
      return cloneElement(node as ReactElement, {
        children: Children.map(node.props.children, processChildrenWithHighlights),
      });
    }

    return node;
  }, [processStringWithHighlights])


  const processedChildren = useMemo(() => {
    return processChildrenWithHighlights(children);
  }, [children, processChildrenWithHighlights]);

  return (
    <div
      ref={codeRef}
      className={clsx("overflow-y-auto overflow-x-scroll w-full overscroll-contain md:overflow-x-auto transition-transform duration-300", {
        "shrink": activeHighlight,
        "w-full": !activeHighlight
      })}
    >
      {processedChildren}
    </div>
  );
};

interface HighlightButtonProps {
  id: number;
}

export const HighlightButton = ({ id }: HighlightButtonProps) => {
  const { activeHighlight, dispatch } = useHighlight();
  const { toggleSidePanel } = useSidePanel();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isActive = activeHighlight === id;

  const handleClick = () => {
    if (isActive) {
      dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: null });
      toggleSidePanel(false)
    } else {
      dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: id });
      toggleSidePanel(true)
    };
  }

  return (
    <button
      ref={buttonRef}
      data-id={id}
      className={clsx(
        'w-5 h-5 inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600',
        {
          'bg-blue-500 text-white': isActive,
          'bg-transparent text-blue-500 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-700': !isActive,
        }
      )}
      onClick={handleClick}
      aria-label={`Highlight ${id}`}
    >
      {id}
    </button>
  );
};
