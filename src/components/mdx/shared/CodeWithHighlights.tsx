// 'use client';

// import React, {
//   useCallback,
//   ReactNode,
//   ReactElement,
//   useMemo,
//   useRef,
//   useEffect,
//   useContext
// } from 'react';
// import clsx from 'clsx';


// import { HighlightContext, HighlightProvider } from '../contexts/HighlightContext';

// interface CodeWithHighlightsProps {
//   children: React.ReactNode;
//   className?: string;
//   title?: string;
//   subtitle?: string;
// }

// export const CodeWithHighlights = ({
//   children,
//   className,
//   title,
//   subtitle,
// }: CodeWithHighlightsProps) => {
//   return (
//     <HighlightProvider>
//       <div
//         className={clsx(
//           'rounded-md max-h-[calc(100vh-8rem)] w-full bg-white dark:bg-black/80 p-4 shadow-lg',
//           className
//         )}
//       >
//         <Header title={title} subtitle={subtitle} />
//         <div className="p-2 flex max-h-[calc(100vh-24rem)]">
//           {children}
//         </div>
//       </div>
//     </HighlightProvider>
//   );
// };

// const Header = ({ title, subtitle }: { title?: string; subtitle?: string }) => (
//   <div className="flex flex-col px-2">
//     {title && <h3 className="text-3xl md:text-4xl pt-4">{title}</h3>}
//     {subtitle && <p className="pt-2">{subtitle}</p>}
//   </div>
// );

// CodeWithHighlights.tsx

'use client';
// import { useHighlight } from '../contexts/HighlightContext';

import React, { ReactElement, ReactNode, useContext, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { HighlightProvider, useHighlight, SidePanelProvider, useSidePanel } from '../contexts/HighlightContext';
// import { CodeContainer } from './CodeContainer';
// import { SidePanel } from './SidePanel';
import { ExplanationItem, ItemHeader, ItemContent } from './ExplanationItem';

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
            'overscroll-contain overflow-hidden rounded-md max-h-[calc(100vh-8rem)] w-full bg-white dark:bg-black/80 p-4 shadow-lg',
            className
          )}
        >
          <Header title={title} subtitle={subtitle} />
          <div className="p-2 flex max-h-[calc(100vh-24rem)]">
            {children}
          </div>
        </div>
      </SidePanelProvider>
    </HighlightProvider>
  );
};

const Header = ({ title, subtitle }: { title?: string; subtitle?: string }) => (
  <div className="flex flex-col px-2">
    {title && <h3 className="text-3xl md:text-4xl pt-4">{title}</h3>}
    {subtitle && <p className="pt-2">{subtitle}</p>}
  </div>
);


// interface SidePanelProps {
//   children: React.ReactNode;
// }

// export const SidePanel = ({ children }: SidePanelProps) => {
//   const { activeHighlight, isSidePanelOpen } = useContext(HighlightContext)!;
//   const sideRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (sideRef.current && activeHighlight !== null) {
//       const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);
//       if (explanationEl) {
//         sideRef.current.scrollTo({
//           top: (explanationEl as HTMLElement).offsetTop,
//           behavior: 'smooth',
//         });
//       }
//     }
//   }, [activeHighlight, isSidePanelOpen]);

//   return (
//     <div
//       ref={sideRef}
//       className={clsx("flex-col transition-transform transform-all duration-300 ease-in-out px-4 max-h-[calc(100vh-24rem)] overflow-y-auto scrollbar-hide relative", {
//         "w-0 opacity-0": !isSidePanelOpen,
//         "min-w-1/3 flex grow opacity-100": isSidePanelOpen
//       })}
//     >
//       {children}
//     </div>
//   );
// };


// export const SidePanel = ({ children }: SidePanelProps) => {
//   const { state } = useContext(HighlightContext)!;
//   const { activeHighlight, isSidePanelOpen } = state;
//   const sideRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (sideRef.current && activeHighlight !== null) {
//       const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);
//       if (explanationEl) {
//         sideRef.current.scrollTo({
//           top: (explanationEl as HTMLElement).offsetTop,
//           behavior: 'smooth',
//         });
//       }
//     }
//   }, [activeHighlight, isSidePanelOpen]);

//   return isSidePanelOpen && (
//     <div
//       ref={sideRef}
//       className={clsx(
//         'max-w-1/3 flex opacity-100 w-full flex-col transition-transform transform-all duration-300 ease-in-out px-4 max-h-[calc(100vh-24rem)] overflow-y-auto scrollbar-hide relative'
//       )}
//     >
//       {children}
//     </div>
//   );
// };
interface SidePanelProps {
  children: React.ReactNode;
}

export const SidePanel = ({ children }: SidePanelProps) => {
  const { activeHighlight } = useHighlight();
  const { toggleSidePanel, isSidePanelOpen } = useSidePanel();
  const sideRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (activeHighlight !== null && sideRef?.current) {
  //     const activeExplanation = sideRef.current.querySelector(
  //       `[data-id="${activeHighlight}"]`
  //     );
  //     if (activeExplanation) {
  //       sideRef!.current.scrollTo({ behavior: 'smooth', top: (activeExplanation as HTMLElement).offsetTop });
  //     }
  //   } else {
  //     handleClose()
  //   }
  // }, [activeHighlight]);

  // useEffect(() => {
  //   // Scroll to the correct highlight when the panel opens
  //   if (isSidePanelOpen && activeHighlight !== null && sideRef?.current) {
  //     const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);
  //     if (explanationEl) {
  //       sideRef.current.scrollTo({
  //         top: (explanationEl as HTMLElement).offsetTop,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }
  // }, [isSidePanelOpen]); // Only trigger this when the panel opens

  // useEffect(() => {
  //   // Scroll to the correct highlight whenever activeHighlight changes, even if panel is already open
  //   if (activeHighlight !== null && sideRef?.current) {
  //     const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);
  //     if (explanationEl) {
  //       sideRef.current.scrollTo({
  //         top: (explanationEl as HTMLElement).offsetTop,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }
  // }, [activeHighlight]); // Trigger whenever activeHighlight changes

  // useEffect(() => {
  //   if (isSidePanelOpen && activeHighlight !== null && sideRef?.current) {
  //     const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);

  //     if (explanationEl) {
  //       // setTimeout(() => {
  //       explanationEl.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start', // Aligns the element to the start (top) of the container
  //       });
  //       // }, 100); // Adjust delay if needed
  //     }
  //   }
  // }, [activeHighlight]);

  // useEffect(() => {
  //   if (isSidePanelOpen && activeHighlight !== null && sideRef?.current) {
  //     // Add a slight delay to ensure rendering is complete
  //     setTimeout(() => {
  //       const explanationEl = sideRef?.current?.querySelector(`[data-id="${activeHighlight}"]`);

  //       if (explanationEl) {
  //         explanationEl.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //         });
  //       }
  //     }, 200); // Increased delay to ensure rendering is complete
  //   }
  // }, [activeHighlight, isSidePanelOpen]);

  // // useEffect(() => {
  // //   if (isSidePanelOpen && activeHighlight !== null && sideRef?.current) {
  // //     // Log information for debugging
  // //     console.log('Side panel open. Active highlight:', activeHighlight);

  // //     // Try to find the element with the active highlight
  // //     const explanationEl = sideRef.current!.querySelector(`[data-id="${activeHighlight}"]`);

  // //     // if (explanationEl) {
  // //     //   console.log('Found explanation element:', explanationEl);

  // //     //   // Delay scroll to ensure rendering is complete
  // //     //   setTimeout(() => {
  // //     //     sideRef?.current!.scrollTo({
  // //     //       top: (explanationEl as HTMLElement).offsetTop,
  // //     //       behavior: 'smooth',
  // //     //     });
  // //     //     console.log('Scrolled to explanation element:', (explanationEl as HTMLElement).offsetTop);
  // //     //   }, 300); // Delay to ensure rendering is complete
  // //     // } else {
  // //     //   console.log('Explanation element not found for active highlight:', activeHighlight);
  // //     // }
  // //   }
  // // }, [activeHighlight, isSidePanelOpen]);

  // const handleClose = () => {
  //   dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: null });
  //   // dispatch({ type: 'TOGGLE_SIDE_PANEL', payload: false })
  // };
  // useEffect(() => {
  //   if (isSidePanelOpen && activeHighlight !== null && sideRef.current) {
  //     // Find the element within the side panel using activeHighlight
  //     const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);

  //     if (explanationEl) {
  //       setTimeout(() => {
  //         // Scroll to the element that matches the activeHighlight
  //         explanationEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //       }, 100); // Adjust delay if needed to ensure rendering is complete
  //     }
  //   }
  // }, [activeHighlight, isSidePanelOpen]); // Depend on both activeHighlight and panel open state

  // const handleClose = () => {
  //   // Close the side panel and reset active highlight
  //   toggleSidePanel(false);
  // };


  useEffect(() => {
    if (activeHighlight !== null && sideRef.current) {
      toggleSidePanel(true)
      console.log(activeHighlight)
      const explanationEl = sideRef.current.querySelector(`[data-id="${activeHighlight}"]`);

      if (explanationEl) {
        setTimeout(() => {
          explanationEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
          // sideRef?.current?.scrollTo({ behavior: 'smooth', top: (explanationEl as HTMLElement)!.offsetTop });
        }, 100);
      }
    }
  }, [activeHighlight, isSidePanelOpen]);

  const handleClose = () => {
    toggleSidePanel(false);
  };


  return isSidePanelOpen && (
    <div
      ref={sideRef}
      className={clsx(
        'flex flex-col transition-all duration-300 ease-in-out px-4 max-h-[calc(100vh-24rem)] overflow-y-auto overscroll-contain scrollbar-hide',
        {
          'w-0 opacity-0': !isSidePanelOpen,
          'min-w-1/3 grow opacity-100': isSidePanelOpen,
        }
      )}
    >
      <button
        onClick={handleClose}
        className="mb-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Close
      </button>
      {children}
    </div>
  );
};

// interface CodeContainerProps {
//   children: string; // Code content as string
//   language?: string;
// }

// export const CodeContainer = ({ children, language }: CodeContainerProps) => {
//   const { activeHighlight, dispatch, codeRef } = useHighlight();

//   // Function to get the regex pattern based on language
//   const getHighlightPattern = (language: string) => {
//     switch (language) {
//       case 'javascript':
//         return /\/\/\s*highlight-(\d+)/;
//       case 'python':
//         return /#\s*highlight-(\d+)/;
//       case 'css':
//       case 'scss':
//         return /\/\*\s*highlight-(\d+)\s*\*\//;
//       default:
//         return /\[\[highlight-(\d+)\]\]/;
//     }
//   };

//   // Process the code to identify and wrap highlights
//   const processedCode = useMemo(() => {
//     const lines = children.split('\n');
//     const highlightPattern = getHighlightPattern(language || '');
//     let currentHighlightId: number | null = null;

//     return lines.map((line, index) => {
//       const match = line.match(highlightPattern);
//       if (match) {
//         const highlightId = parseInt(match[1], 10);
//         const cleanedLine = line.replace(highlightPattern, '').trim();

//         return (
//           <div key={index} className="relative flex items-center">
//             {/* Highlight Button */}
//             <HighlightButton id={highlightId} />

//             {/* Code Line */}
//             <span
//               id={`highlight-${highlightId}`}
//               className={clsx('ml-2', {
//                 'bg-yellow-100 dark:bg-yellow-900': activeHighlight === highlightId,
//               })}
//             >
//               {cleanedLine}
//             </span>
//           </div>
//         );
//       } else {
//         return (
//           <div key={index}>
//             {line}
//           </div>
//         );
//       }
//     });
//   }, [children, language, activeHighlight]);

//   return (
//     <div
//       ref={codeRef}
//       className="overflow-y-auto overflow-x-scroll w-full overscroll-contain md:overflow-x-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
//     >
//       <pre className="whitespace-pre-wrap text-sm md:text-base">
//         {processedCode}
//       </pre>
//     </div>
//   );
// };
interface CodeContainerProps {
  children: React.ReactNode;
  language?: string;
}

export const CodeContainer = ({ children, language }: CodeContainerProps) => {
  // const { handleHighlightClick, codeRef, state: { activeHighlight } } = useContext(HighlightContext)!;
  const { activeHighlight, dispatch } = useHighlight();
  const codeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeHighlight) {
      const codeElement = codeRef?.current?.querySelector(`[data-id="${activeHighlight}"]`);
      if (codeElement && codeRef.current) {
        codeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }
  }, [activeHighlight])

  const processChildrenWithHighlights = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      return processStringWithHighlights(node);
    }

    // Recursively process React elements
    if (React.isValidElement(node)) {
      return React.cloneElement(node as ReactElement, {
        children: React.Children.map(node.props.children, processChildrenWithHighlights),
      });
    }

    return node;
  };

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

  const processStringWithHighlights = (text: string): ReactNode[] => {
    const highlightPattern = getHighlightPattern(language as string);
    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let match;

    // Loop through the string and find all highlight markers
    while ((match = highlightPattern.exec(text)) !== null) {
      const highlightId = parseInt(match[1], 10);

      // Add the part of the string before the highlight marker
      if (match.index > lastIndex) {
        parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
      }

      parts.push(
        <HighlightButton
          key={highlightId}
          id={highlightId}
        />
      );

      lastIndex = match.index + match[0].length; // Update lastIndex after the current match
    }

    // Add any remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex)}</span>);
    }

    return parts;
  };

  const processedChildren = useMemo(() => {
    return processChildrenWithHighlights(children);
  }, [children, activeHighlight]);

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

// export const HighlightButton = ({ id }: HighlightButtonProps) => {
//   const { activeHighlight, dispatch } = useHighlight();
//   const { toggleSidePanel, isSidePanelOpen } = useSidePanel();
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const isActive = activeHighlight === id;

//   const handleClick = () => {
//     if (isActive) {
//       dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: null });
//       toggleSidePanel(false)
//     } else {
//       dispatch({ type: 'SET_ACTIVE_HIGHLIGHT', payload: id });
//       toggleSidePanel(true)
//     };
//   }

  //   // useEffect(() => {
  //   //   if (activeHighlight !== null && codeRef.current) {
  //   //     const highlightElement = codeRef.current.querySelector(
  //   //       `[data-id="${activeHighlight}"]`
  //   //     );
  //   //     if (highlightElement) {
  //   //       codeRef.current.scrollTo({
  //   //         top: (highlightElement as HTMLElement).offsetTop,
  //   //         behavior: 'smooth',
  //   //       });
  //   //     }
  //   //   }
  //   // }, [activeHighlight]);

//   return (
//     <span
//       ref={buttonRef}
//       data-id={id}
//       className="mb-2 inline-flex items-center justify-center w-5 h-5 bg-white/10 hover:bg-white/30 rounded-md cursor-pointer"
//     >
//       <span
//         className={clsx(
//           'hover:opacity-80 hover:scale-110 inset-0 flex items-center justify-center bg-blue-900 rounded-md',
//           {
//             'opacity-100 scale-115 p-1 bg-blue-900': isActive,
//             'opacity-20': !isActive,
//           }
//         )}
//       >
//         <button
//           className="p-1 w-4 h-4 text-base flex justify-center items-center font-extrabold rounded-md text-gray-100"
//           onClick={handleClick}
//           aria-label={`Highlight ${id}`}
//           data-id={id}
//         >
//           {id}
//         </button>
//       </span>
//     </span>
//   );
// };

interface HighlightButtonProps {
  id: number;
}



export const HighlightButton = ({ id }: HighlightButtonProps) => {
    const { activeHighlight, dispatch } = useHighlight();
    const { toggleSidePanel, isSidePanelOpen } = useSidePanel();
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
              
              // const handleClick = () => {
              //   if (isSidePanelOpen && activeHighlight === id || !activeHighlight) {
              //     toggleSidePanel(false)
              //   } else {
              //     toggleSidePanel(true)
              //   }
              // }
              
              
              // useEffect(() => {
              
              //   if (isActive && buttonRef.current) {
              //     if (codeRef?.current) {
              //       codeRef.current.scrollTo({
              //         top: buttonRef!.current?.offsetTop, // Adjust offset as needed
              //         behavior: 'smooth',
              //       });
              //     } else if (sideRef?.current) {
              //       const explanationEl = sideRef.current.querySelector(`[data-id="${id}"]`)
              //       sideRef.current.scrollTo({
              //         top: (explanationEl as HTMLElement)!.offsetTop,
              //         behavior: 'smooth'
              //       })
              //     }
              //   }
              // }, [activeHighlight, buttonRef])
              
              // useEffect(() => {
              //   if (isActive && codeRef.current) {
              //     codeRef.current.scrollTo()
              //   }
              // })