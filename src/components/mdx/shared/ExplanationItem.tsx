"use client"

// import React, { useContext, useRef } from 'react';
// import { HighlightContext } from '../contexts/HighlightContext';
// import clsx from 'clsx';

// interface ExplanationItemProps {
//   dataId: number;
//   children: React.ReactNode;
// }

// const ExplanationItem = ({ dataId, children }: ExplanationItemProps) => {
//   const { state } = useContext(HighlightContext)!;
//   const isActive = state.activeHighlight === dataId;

//   return (
//     <div className="mb-4" data-id={dataId}>
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.type === ItemHeader) {
//           return React.cloneElement(child as React.ReactElement<ItemHeaderProps>, {
//             dataId,
//             isActive,
//           });
//         }
//         return child;
//       })}
//     </div>
//   );
// };

// interface ItemHeaderProps {
//   dataId: number;
//   children: React.ReactNode;
//   isActive: boolean;
// }

// const ItemHeader = ({ dataId, children, isActive }: ItemHeaderProps) => {
//   const ref = useRef<HTMLHeadingElement | null>(null);
//   const { handleHighlightClick } = useContext(HighlightContext)!;

//   return (
//     <h4
//       ref={ref}
//       className={clsx('text-lg font-semibold cursor-pointer', {
//         'text-blue-600 dark:text-blue-300': isActive,
//         'text-gray-900 dark:text-gray-100': !isActive,
//       })}
//       onClick={() => handleHighlightClick(dataId, ref)}
//     >
//       {children}
//     </h4>
//   );
// };



// // interface ExplanationItemProps {
// //   dataId: number;
// //   children: React.ReactNode;
// // }

// // const ExplanationItem = ({ dataId, children }: ExplanationItemProps) => {
// //   return (
// //     <div className="mb-4" data-id={dataId}>
// //       {children}
// //     </div>
// //   );
// // };

// // interface ItemHeaderProps {
// //   dataId: number;
// //   children: React.ReactNode;
// // }

// // const ItemHeader = ({ dataId, children }: ItemHeaderProps) => {
// //   const { activeHighlight, handleHighlightClick } = useContext(HighlightContext)!;
// //   const ref = useRef<HTMLHeadingElement | null>(null);

// //   return (
// //     <h4
// //       ref={ref}
// //       className={clsx('text-lg font-semibold cursor-pointer', {
// //         'text-blue-600 dark:text-blue-300': dataId === activeHighlight,
// //         'text-gray-900 dark:text-gray-100': dataId !== activeHighlight,
// //       })}
// //       onClick={() => handleHighlightClick(dataId, ref)}
// //     >
// //       {children}
// //     </h4>
// //   );
// // };



// const ItemContent = ({ children }: { children?: React.ReactNode; }) => (
//   <p
//     className={clsx("text-sm md:text-base")}
//   >
//     {children}
//   </p>
// );

// export { ExplanationItem, ItemHeader, ItemContent }
import React, { useEffect, useRef } from 'react';
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
    <div className="mb-6" data-id={dataId} ref={headerRef}>
      {children}
    </div>
  );
};

// Memoize ExplanationItem to prevent unnecessary re-renders for non-active items
export const ExplanationItem = React.memo(ExplanationItemComponent, (prevProps, nextProps) => {
  return prevProps.dataId === nextProps.dataId;
});

// ExplanationItem.tsx
// "use client"

// import React, { useEffect, useRef } from 'react';
// import clsx from 'clsx';
// import { useHighlight } from '../contexts/HighlightContext';

// interface ExplanationItemProps {
//   dataId: number;
//   children: React.ReactNode;
// }

interface ItemHeaderProps {
  dataId: number;
  children: React.ReactNode;
}

interface ItemContentProps {
  children: React.ReactNode;
}

// const ExplanationItemComponent = React.memo(({ dataId, children }: ExplanationItemProps) => {
//   const { activeHighlight, dispatch, codeRef } = useHighlight();
//   const headerRef = useRef<HTMLDivElement | null>(null);

//   // useEffect(() => {
//   //   const isActive = activeHighlight === dataId;
//   //   if (isActive && activeHighlight !== null) {

//   //   }

//   // }, [activeHighlight])
//   useEffect(() => {
//     const isActive = activeHighlight === dataId;
//     // Debugging step to ensure `data-id` and activeHighlight are correct
//     console.log('Active highlight:', activeHighlight, 'Explanation item ID:', dataId);

//     if (isActive && headerRef.current) {
//       console.log('Element is active and found:', headerRef.current);
//     }
//   }, [activeHighlight, dataId]);

//   return (
//     <div className="mb-6" data-id={dataId} ref={headerRef}>
//       {children}
//     </div>
//   );
// });

// // Memoize ExplanationItem to prevent unnecessary re-renders for non-active itemså
export const ItemHeader = ({ dataId, children }: ItemHeaderProps) => {
  const explanationRef = useRef<HTMLHeadingElement>(null);
  const { activeHighlight, dispatch } = useHighlight();
  const { toggleSidePanel, isSidePanelOpen } = useSidePanel();

  const isActive = activeHighlight === dataId;



  // useEffect(() => {
  //   if (isActive && explanationRef.current) {
  //     if (codeRef?.current) {

  //       // Scroll to code highlight
  //       const codeElement = codeRef.current.querySelector(`[data-id="${dataId}"]`);
  //       // if (codeElement && codeRef?.current) {
  //       codeRef.current.scrollTo({
  //         top: (codeElement as HTMLElement)!.offsetTop,
  //         behavior: 'smooth',
  //       });
  //     } else if (sideRef?.current) {
  //       sideRef.current.scrollTo({
  //         top: explanationRef!.current?.offsetTop,
  //         behavior: 'smooth'
  //       })
  //     }
  //   }
  // }, [activeHighlight, explanationRef])

  const handleClick = () => {

    // if (activeHighlight) {
    //   if (isSidePanelOpen && isActive) {
    //     // toggleSidePanel(false)
    //   } else if (!isSidePanelOpen && dataId === activeHighlight) {
    //   }
    //   toggleSidePanel(true)
    // }
    // // if (isActive) {
    // //   // Close side panel
    // // } else {
    // //   // Activate and scroll to highlight
    // // }
    // // }

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
  <p className="text-sm md:text-base mt-2">{children}</p>
)
