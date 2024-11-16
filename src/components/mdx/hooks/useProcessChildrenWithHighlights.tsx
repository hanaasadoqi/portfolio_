// 'use client'

// import React, { ReactElement, ReactNode, useMemo } from 'react';
// import { CodeHighlightButton as HighlightButton } from '../shared/CodeHighlightButton';

// interface UseProcessChildrenWithHighlightsArgs {
//   node: ReactNode;
//   activeHighlight: number | null;
//   handleClick: (highlightId: number | null) => void;
//   highlightRefs: React.MutableRefObject<{ [key: number]: HTMLSpanElement | undefined | null }>;
// }

// const useProcessChildrenWithHighlights = ({
//   node,
//   activeHighlight,
//   handleClick,
//   highlightRefs,
// }: UseProcessChildrenWithHighlightsArgs): ReactNode => {
//   return useMemo(() => {
//     if (typeof node === 'string') {
//       const highlightPattern = /\[\[highlight-(\d+)\]\]/g;
//       const parts: ReactNode[] = [];
//       let match;
//       let lastIndex = 0;

//       while ((match = highlightPattern.exec(node)) !== null) {
//         const highlightId = parseInt(match[1], 10);
//         if (match.index > lastIndex) {
//           parts.push(node.slice(lastIndex, match.index));
//         }
//         parts.push(
//           <HighlightButton
//             key={highlightId}
//             id={highlightId}
//             active={highlightId === activeHighlight}
//             handleClick={() => handleClick(highlightId)}
//             highlightRef={(el: HTMLSpanElement | null) => (highlightRefs.current[highlightId] = el)}
//           />
//         );
//         lastIndex = match.index + match[0].length;
//       }

//       if (lastIndex < node.length) {
//         parts.push(node.slice(lastIndex));
//       }

//       return parts;
//     }

//     if (React.isValidElement(node)) {
//       return React.cloneElement(node as ReactElement, {
//         children: React.Children.map(node.props.children, (child) =>
//           useProcessChildrenWithHighlights({ node: child, activeHighlight, handleClick, highlightRefs })
//         ),
//       });
//     }

//     return node;
//   }, [node, activeHighlight, handleClick, highlightRefs]);
// };

// // export default useProcessChildrenWithHighlights;
// 'use client'

// import React, { ReactElement, ReactNode, useMemo } from 'react';
// import { HighlightButton } from '../shared/CodeWithHighlights';

// interface UseProcessChildrenWithHighlightsArgs {
//   node: ReactNode;
//   activeHighlight: number | null;
//   handleClick: (highlightId: number | null) => void;
//   highlightRefs: React.MutableRefObject<{ [key: number]: HTMLSpanElement | undefined | null }>;
// }

// const processChildrenWithHighlights = ({
//   node,
//   activeHighlight,
//   handleClick,
//   highlightRefs,
// }: UseProcessChildrenWithHighlightsArgs): ReactNode => {
//   return useMemo(() => {
//     if (typeof node === 'string') {
//       const highlightPattern = /\[\[highlight-(\d+)\]\]/g;
//       const parts: ReactNode[] = [];
//       let match;
//       let lastIndex = 0;

//       while ((match = highlightPattern.exec(node)) !== null) {
//         const highlightId = parseInt(match[1], 10);
//         if (match.index > lastIndex) {
//           parts.push(node.slice(lastIndex, match.index));
//         }
//         parts.push(
//           <HighlightButton
//             key={highlightId}
//             id={highlightId}
//           />
//         );
//         lastIndex = match.index + match[0].length;
//       }

//       if (lastIndex < node.length) {
//         parts.push(node.slice(lastIndex));
//       }

//       return parts;
//     }

//     if (React.isValidElement(node)) {
//       return React.cloneElement(node as ReactElement, {
//         children: React.Children.map(node.props.children, (child) =>
//           processChildrenWithHighlights({ node: child, activeHighlight, handleClick, highlightRefs })
//         ),
//       });
//     }

//     return node;
//   }, [node, activeHighlight, handleClick, highlightRefs]);
// };

// export default useProcessChildrenWithHighlights;
// 'use client';

// import React, { ReactElement, ReactNode } from 'react';
// import { CodeHighlightButton as HighlightButton } from '../shared/CodeHighlightButton';

// interface UseProcessChildrenWithHighlightsArgs {
//   node: ReactNode;
//   activeHighlight: number | null;
//   handleClick: (highlightId: number | null) => void;
//   highlightRefs: React.MutableRefObject<{ [key: number]: HTMLSpanElement | undefined | null }>;
// }

// const useProcessChildrenWithHighlights = ({
//   node,
//   activeHighlight,
//   handleClick,
//   highlightRefs,
// }: UseProcessChildrenWithHighlightsArgs): ReactNode => {
//   if (typeof node === 'string') {
//     const highlightPattern = /\[\[highlight-(\d+)\]\]/g;
//     const parts: ReactNode[] = [];
//     let match;
//     let lastIndex = 0;

//     while ((match = highlightPattern.exec(node)) !== null) {
//       const highlightId = parseInt(match[1], 10);
//       if (match.index > lastIndex) {
//         parts.push(node.slice(lastIndex, match.index));
//       }
//       parts.push(
//         <HighlightButton
//           key={highlightId}
//           id={highlightId}
//           active={highlightId === activeHighlight}
//           handleClick={() => handleClick(highlightId)}
//           highlightRef={(el: HTMLSpanElement | null) => {
//             highlightRefs.current[highlightId] = el;
//           }}
//         />
//       );
//       lastIndex = match.index + match[0].length;
//     }

//     if (lastIndex < node.length) {
//       parts.push(node.slice(lastIndex));
//     }

//     return parts;
//   }

//   if (React.isValidElement(node)) {
//     return React.cloneElement(node as ReactElement, {
//       children: React.Children.map(node.props.children, (child) =>
//         useProcessChildrenWithHighlights({ node: child, activeHighlight, handleClick, highlightRefs })
//       ),
//     });
//   }

//   return node;
// };

// export default useProcessChildrenWithHighlights;
// 'use client';

// import React, { ReactElement, ReactNode } from 'react';
// import { CodeHighlightButton } from '../shared/CodeHighlightButton';

// interface UseProcessChildrenWithHighlightsArgs {
//   node: ReactNode;
//   activeHighlight: number | null;
//   handleClick: (highlightId: number | null) => void;
//   highlightRefs: React.MutableRefObject<{ [key: number]: HTMLSpanElement | undefined | null }>;
// }

// const useProcessChildrenWithHighlights = ({
//   node,
//   activeHighlight,
//   handleClick,
//   highlightRefs,
// }: UseProcessChildrenWithHighlightsArgs): ReactNode => {
//   if (typeof node === 'string') {
//     const highlightPattern = /\[\[highlight-(\d+)\]\]/g;
//     const parts: ReactNode[] = [];
//     let match;
//     let lastIndex = 0;

//     while ((match = highlightPattern.exec(node)) !== null) {
//       const highlightId = parseInt(match[1], 10);
//       if (match.index > lastIndex) {
//         parts.push(node.slice(lastIndex, match.index));
//       }
//       parts.push(
//         <CodeHighlightButton
//           key={highlightId}
//           id={highlightId}
//           active={highlightId === activeHighlight}
//           handleClick={() => handleClick(highlightId)}
//           highlightRef={(el: HTMLSpanElement | null) => {
//             highlightRefs.current[highlightId] = el;
//           }}
//         />
//       );
//       lastIndex = match.index + match[0].length;
//     }

//     if (lastIndex < node.length) {
//       parts.push(node.slice(lastIndex));
//     }

//     return parts;
//   }

//   if (React.isValidElement(node)) {
//     return React.cloneElement(node as ReactElement, {
//       children: React.Children.map(node.props.children, (child) =>
//         useProcessChildrenWithHighlights({ node: child, activeHighlight, handleClick, highlightRefs })
//       ),
//     });
//   }

//   return node;
// };

// export default useProcessChildrenWithHighlights;
