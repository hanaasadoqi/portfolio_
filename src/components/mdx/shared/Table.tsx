// // // // // import clsx from 'clsx'

// // // // // import React from 'react'

// // // // // export const Table = ({ children }: { children: React.ReactNode }) => {
// // // // //   return (
// // // // //     <span className="not-prose w-full max-w-full">
// // // // //       <table className="mx-auto w-full divide-y divide-gray-200 not-prose">
// // // // //         <tbody>
// // // // //           {React.Children.map(children, (child) => {
// // // // //             if (React.isValidElement(child)) {
// // // // //               if (child.type === 'tr' || child.type === React.Fragment) {
// // // // //                 return child
// // // // //               } else {
// // // // //                 return (
// // // // //                   <tr>
// // // // //                     <td colSpan={100}>{child}</td>
// // // // //                   </tr>
// // // // //                 )
// // // // //               }
// // // // //             }
// // // // //             return null
// // // // //           })}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </span>
// // // // //   )
// // // // // }
// // // // // export const Thead = ({ children }: { children: React.ReactNode }) => {
// // // // //   return (
// // // // //     <thead className="bg-gray-200 dark:bg-gray-900">
// // // // //       {React.Children.map(children, (child) => {
// // // // //         if (React.isValidElement(child) && child.type === 'tr') {
// // // // //           return child;
// // // // //         } else {
// // // // //           return null;
// // // // //         }
// // // // //       })}
// // // // //     </thead>
// // // // //   );
// // // // // };

// // // // // export const Tbody = ({ children }: { children: React.ReactNode }) => {
// // // // //   return (
// // // // //     <tbody className="w-full bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 not-prose text-base">
// // // // //       {React.Children.map(children, (child) => {
// // // // //         if (React.isValidElement(child) && child.type === 'tr') {
// // // // //           return child;
// // // // //         } else {
// // // // //           return null;
// // // // //         }
// // // // //       })}
// // // // //     </tbody>
// // // // //   );
// // // // // };

// // // // // export const Tr = ({ children, id }: { children: React.ReactNode; id?: string }) => {
// // // // //   return (
// // // // //     <tr data-id={id} className="w-full not-prose text-base">
// // // // //       {React.Children.map(children, (child) => {
// // // // //         if (
// // // // //           React.isValidElement(child) &&
// // // // //           (child.type === 'td' || child.type === 'th')
// // // // //         ) {
// // // // //           return child;
// // // // //         } else {
// // // // //           return null;
// // // // //         }
// // // // //       })}
// // // // //     </tr>
// // // // //   );
// // // // // };

// // // // // export const Th = ({
// // // // //   children,
// // // // //   isRowHeader = false,
// // // // //   rowSpan,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // //   isRowHeader?: boolean;
// // // // //   rowSpan?: number;
// // // // // }) => {
// // // // //   return (
// // // // //     <th
// // // // //       scope={isRowHeader ? 'row' : 'col'}
// // // // //       rowSpan={rowSpan}
// // // // //       className={clsx(
// // // // //         'px-6 py-3 text-xs font-medium uppercase tracking-wider',
// // // // //         isRowHeader
// // // // //           ? 'text-left border-r-2 border-r-gray-300 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800'
// // // // //           : 'text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900'
// // // // //       )}
// // // // //     >
// // // // //       {children}
// // // // //     </th>
// // // // //   );
// // // // // };

// // // // // export const Td = ({
// // // // //   children,
// // // // //   className,
// // // // //   full,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // //   className?: string;
// // // // //   full?: boolean;
// // // // // }) => {
// // // // //   return (
// // // // //     <td
// // // // //       className={clsx(
// // // // //         'text-base',
// // // // //         {
// // // // //           'px-6 py-4': !full,
// // // // //           'p-0': full,
// // // // //         },
// // // // //         className
// // // // //       )}
// // // // //     >
// // // // //       {children}
// // // // //     </td>
// // // // //   );
// // // // // };
// // // // import React, { ReactNode, isValidElement, cloneElement } from 'react'

// // // // // Utility function to dynamically correct invalid children
// // // // const correctChildElement = (child: ReactNode, allowedTag: string[], fallbackTag: string) => {
// // // //   if (!isValidElement(child)) return child

// // // //   const childType = child.type as string

// // // //   if (allowedTag.includes(childType)) {
// // // //     return child
// // // //   } else {
// // // //     console.warn(
// // // //       `Invalid element <${childType}> found. Converting to <${fallbackTag}> to maintain correct HTML structure.`
// // // //     )
// // // //     return cloneElement(child, { as: fallbackTag })
// // // //   }
// // // // }

// // // // // Utility function to validate and correct children dynamically
// // // // const correctChildren = (children: ReactNode, allowedTags: string[], fallbackTag: string) => {
// // // //   return React.Children.map(children, (child) => correctChildElement(child, allowedTags, fallbackTag))
// // // // }

// // // // // Table Component Definitions
// // // // export const Table = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['thead', 'tbody'], 'tbody')
// // // //   return <table className="mx-auto w-full">{correctedChildren}</table>
// // // // }

// // // // export const Thead = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['tr'], 'tr')
// // // //   return <thead className="bg-gray-200 dark:bg-gray-900">{correctedChildren}</thead>
// // // // }

// // // // export const Tbody = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['tr'], 'tr')
// // // //   return (
// // // //     <tbody className="w-full bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 not-prose text-base">
// // // //       {correctedChildren}
// // // //     </tbody>
// // // //   )
// // // // }

// // // // export const Tr = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['td', 'th'], 'td')
// // // //   return <tr className="w-full not-prose text-base">{correctedChildren}</tr>
// // // // }

// // // // export const Th = ({
// // // //   children,
// // // //   isRowHeader = false,
// // // //   rowSpan,
// // // // }: {
// // // //   children: React.ReactNode
// // // //   isRowHeader?: boolean
// // // //   rowSpan?: number
// // // // }) => {
// // // //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text'], 'span')
// // // //   return (
// // // //     <th
// // // //       scope={isRowHeader ? 'row' : 'col'}
// // // //       rowSpan={rowSpan}
// // // //       className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900"
// // // //     >
// // // //       {correctedChildren}
// // // //     </th>
// // // //   )
// // // // }

// // // // export const Td = ({
// // // //   children,
// // // //   className,
// // // //   full,
// // // // }: {
// // // //   children: React.ReactNode
// // // //   className?: string
// // // //   full?: boolean
// // // // }) => {
// // // //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text', 'img'], 'span')
// // // //   return (
// // // //     <td className={`text-base ${full ? 'p-0' : 'px-6 py-4'} ${className || ''}`}>
// // // //       {correctedChildren}
// // // //     </td>
// // // // //   )
// // // // // }
// // // // import React, { ReactNode, isValidElement } from 'react'

// // // // // Utility function to dynamically correct invalid children by creating new elements
// // // // const correctChildElement = (child, allowedTags, fallbackTag) => {
// // // //   if (!isValidElement(child)) return child

// // // //   const childType = child.type as string

// // // //   if (allowedTags.includes(childType)) {
// // // //     return child
// // // //   } else {
// // // //     console.warn(
// // // //       `Invalid element <${childType}> found. Converting to <${fallbackTag}> to maintain correct HTML structure.`
// // // //     )
// // // //     // Clone the child while converting it to the appropriate fallback tag
// // // //     return React.createElement(fallbackTag, { ...child.props, key: child.key }, child.props.children)
// // // //   }
// // // // }

// // // // // Utility function to validate and correct children dynamically
// // // // const correctChildren = (children: ReactNode, allowedTags: string[], fallbackTag: string) => {
// // // //   return React.Children.map(children, (child) => correctChildElement(child, allowedTags, fallbackTag))
// // // // }

// // // // // Table Component Definitions
// // // // export const Table = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['thead', 'tbody'], 'tbody')
// // // //   return <table className="mx-auto w-full">{correctedChildren}</table>
// // // // }

// // // // export const Thead = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['tr'], 'tr')
// // // //   return <thead className="bg-gray-200 dark:bg-gray-900">{correctedChildren}</thead>
// // // // }

// // // // export const Tbody = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['tr'], 'tr')
// // // //   return (
// // // //     <tbody className="w-full bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 not-prose text-base">
// // // //       {correctedChildren}
// // // //     </tbody>
// // // //   )
// // // // }

// // // // export const Tr = ({ children }: { children: React.ReactNode }) => {
// // // //   const correctedChildren = correctChildren(children, ['td', 'th'], 'td')
// // // //   return <tr className="w-full not-prose text-base">{correctedChildren}</tr>
// // // // }

// // // // export const Th = ({
// // // //   children,
// // // //   isRowHeader = false,
// // // //   rowSpan,
// // // // }: {
// // // //   children: React.ReactNode
// // // //   isRowHeader?: boolean
// // // //   rowSpan?: number
// // // // }) => {
// // // //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text'], 'span')
// // // //   return (
// // // //     <th
// // // //       scope={isRowHeader ? 'row' : 'col'}
// // // //       rowSpan={rowSpan}
// // // //       className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900"
// // // //     >
// // // //       {correctedChildren}
// // // //     </th>
// // // //   )
// // // // }

// // // // export const Td = ({
// // // //   children,
// // // //   className,
// // // //   full,
// // // // }: {
// // // //   children: React.ReactNode
// // // //   className?: string
// // // //   full?: boolean
// // // // }) => {
// // // //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text', 'img'], 'span')
// // // //   return (
// // // //     <td className={`text-base ${full ? 'p-0' : 'px-6 py-4'} ${className || ''}`}>
// // // //       {correctedChildren}
// // // //     </td>
// // // //   )
// // // // }
// // // import React, {
// // //   ReactNode,
// // //   isValidElement,
// // //   ReactElement,
// // //   JSXElementConstructor,
// // // } from 'react'

// // // // Type Definitions
// // // type AllowedTags = string[]
// // // type Child = ReactNode

// // // // Utility function to dynamically correct invalid children by creating new elements
// // // const correctChildElement = (
// // //   child: Child,
// // //   allowedTags: AllowedTags,
// // //   fallbackTag: string
// // // ): ReactNode => {
// // //   if (!isValidElement(child)) return child

// // //   const childType = child.type as string

// // //   if (allowedTags.includes(childType)) {
// // //     return child
// // //   } else {
// // //     console.warn(
// // //       `Invalid element <${childType}> found. Converting to <${fallbackTag}> to maintain correct HTML structure.`
// // //     )
// // //     // Clone the child while converting it to the appropriate fallback tag
// // //     const { props, key } = child as ReactElement<any, string | JSXElementConstructor<any>>
// // //     return React.createElement(fallbackTag, { ...props, key }, props.children)
// // //   }
// // // }

// // // // Utility function to validate and correct children dynamically
// // // const correctChildren = (
// // //   children: ReactNode,
// // //   allowedTags: AllowedTags,
// // //   fallbackTag: string
// // // ): ReactNode[] | ReactNode => {
// // //   return React.Children.map(children, (child) =>
// // //     correctChildElement(child, allowedTags, fallbackTag)
// // //   )
// // // }

// // // // Table Component Definitions
// // // export const Table = ({ children }: { children: React.ReactNode }) => {
// // //   const correctedChildren = correctChildren(children, ['thead', 'tbody'], 'tbody')
// // //   return <table className="mx-auto w-full">{correctedChildren}</table>
// // // }

// // // export const Thead = ({ children }: { children: React.ReactNode }) => {
// // //   const correctedChildren = correctChildren(children, ['tr'], 'tr')
// // //   return <thead className="bg-gray-200 dark:bg-gray-900">{correctedChildren}</thead>
// // // }

// // // export const Tbody = ({ children }: { children: React.ReactNode }) => {
// // //   const correctedChildren = correctChildren(children, ['tr'], 'tr')
// // //   return (
// // //     <tbody className="w-full bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 not-prose text-base">
// // //       {correctedChildren}
// // //     </tbody>
// // //   )
// // // }

// // // export const Tr = ({ children }: { children: React.ReactNode }) => {
// // //   const correctedChildren = correctChildren(children, ['td', 'th'], 'td')
// // //   return <tr className="w-full not-prose text-base">{correctedChildren}</tr>
// // // }

// // // export const Th = ({
// // //   children,
// // //   isRowHeader = false,
// // //   rowSpan,
// // // }: {
// // //   children: React.ReactNode
// // //   isRowHeader?: boolean
// // //   rowSpan?: number
// // // }) => {
// // //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text'], 'span')
// // //   return (
// // //     <th
// // //       scope={isRowHeader ? 'row' : 'col'}
// // //       rowSpan={rowSpan}
// // //       className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900"
// // //     >
// // //       {correctedChildren}
// // //     </th>
// // //   )
// // // }

// // // export const Td = ({
// // //   children,
// // //   className,
// // //   full,
// // // }: {
// // //   children: React.ReactNode
// // //   className?: string
// // //   full?: boolean
// // // }) => {
// // //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text', 'img'], 'span')
// // //   return (
// // //     <td className={`text-base ${full ? 'p-0' : 'px-6 py-4'} ${className || ''}`}>
// // //       {correctedChildren}
// // //     </td>
// // //   )
// // // }
// // import React, {
// //   ReactNode,
// //   isValidElement,
// //   ReactElement,
// //   JSXElementConstructor,
// // } from 'react';

// // // Type Definitions
// // type AllowedTags = string[];
// // type Child = ReactNode;

// // // Utility function to dynamically correct invalid children by creating new elements
// // const correctChildElement = (
// //   child: Child,
// //   allowedTags: AllowedTags,
// //   fallbackTag: string
// // ): ReactNode => {
// //   if (!isValidElement(child)) return child;

// //   const childType = typeof child.type === 'string' ? child.type : null;

// //   if (childType && allowedTags.includes(childType)) {
// //     return child;
// //   } else if (childType) {
// //     console.warn(
// //       `Invalid element <${childType}> found. Converting to <${fallbackTag}> to maintain correct HTML structure.`
// //     );
// //     // Clone the child while converting it to the appropriate fallback tag
// //     const { props, key } = child as ReactElement<any, string | JSXElementConstructor<any>>;
// //     return React.createElement(fallbackTag, { ...props, key }, props.children);
// //   }

// //   return child;
// // };

// // // Utility function to validate and correct children dynamically
// // const correctChildren = (
// //   children: ReactNode,
// //   allowedTags: AllowedTags,
// //   fallbackTag: string
// // ): ReactNode[] | ReactNode => {
// //   return React.Children.map(children, (child) =>
// //     correctChildElement(child, allowedTags, fallbackTag)
// //   );
// // };

// // // Table Component Definitions with Correct Nesting
// // export const Table = ({ children }: { children: React.ReactNode }) => {
// //   const correctedChildren = correctChildren(children, ['thead', 'tbody'], 'tbody');
// //   return <table className="mx-auto w-full">{correctedChildren}</table>;
// // };

// // export const Thead = ({ children }: { children: React.ReactNode }) => {
// //   const correctedChildren = correctChildren(children, ['tr'], 'tr');
// //   return <thead className="bg-gray-200 dark:bg-gray-900">{correctedChildren}</thead>;
// // };

// // export const Tbody = ({ children }: { children: React.ReactNode }) => {
// //   const correctedChildren = correctChildren(children, ['tr'], 'tr');
// //   return (
// //     <tbody className="w-full bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 not-prose text-base">
// //       {correctedChildren}
// //     </tbody>
// //   );
// // };

// // export const Tr = ({ children }: { children: React.ReactNode }) => {
// //   const correctedChildren = correctChildren(children, ['td', 'th'], 'td');
// //   return <tr className="w-full not-prose text-base">{correctedChildren}</tr>;
// // };

// // export const Th = ({
// //   children,
// //   isRowHeader = false,
// //   rowSpan,
// // }: {
// //   children: React.ReactNode;
// //   isRowHeader?: boolean;
// //   rowSpan?: number;
// // }) => {
// //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text'], 'span');
// //   return (
// //     <th
// //       scope={isRowHeader ? 'row' : 'col'}
// //       rowSpan={rowSpan}
// //       className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900"
// //     >
// //       {correctedChildren}
// //     </th>
// //   );
// // };

// // export const Td = ({
// //   children,
// //   className,
// //   full,
// // }: {
// //   children: React.ReactNode;
// //   className?: string;
// //   full?: boolean;
// // }) => {
// //   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text', 'img'], 'span');
// //   return (
// //     <td className={`text-base ${full ? 'p-0' : 'px-6 py-4'} ${className || ''}`}>
// //       {correctedChildren}
// //     </td>
// //   );
// // };
// import React, { ReactNode, isValidElement, ReactElement, JSXElementConstructor } from 'react';

// // Type Definitions
// type AllowedTags = string[];
// type Child = ReactNode;

// // Utility function to dynamically correct invalid children by creating new elements
// const correctChildElement = (
//   child: Child,
//   allowedTags: AllowedTags,
//   fallbackTag: string
// ): ReactNode => {
//   if (!isValidElement(child)) return child;

//   const childType = typeof child.type === 'string' ? child.type : null;

//   if (childType && allowedTags.includes(childType)) {
//     return child;
//   } else if (childType) {
//     console.warn(
//       `Invalid element <${childType}> found. Converting to <${fallbackTag}> to maintain correct HTML structure.`
//     );
//     // Clone the child while converting it to the appropriate fallback tag
//     const { props, key } = child as ReactElement<any, string | JSXElementConstructor<any>>;
//     return React.createElement(fallbackTag, { ...props, key }, props.children);
//   }

//   return child;
// };

// // Utility function to validate and correct children dynamically
// const correctChildren = (
//   children: ReactNode,
//   allowedTags: AllowedTags,
//   fallbackTag: string
// ): ReactNode[] | ReactNode => {
//   return React.Children.map(children, (child) =>
//     correctChildElement(child, allowedTags, fallbackTag)
//   );
// };

// // Table Component Definitions with Correct Nesting
// export const Table = ({ children }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['thead', 'tbody', 'tfoot'], 'tbody');
//   return (
//     <table className="mx-auto w-full relative">
//       {children}
//       {/* {correctedChildren || <tbody></tbody>} */}
//     </table>
//   );
// };

// export const Thead = ({ children }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['tr'], 'tr');
//   return (
//     <thead className="bg-gray-200 dark:bg-gray-900 relative">
//       {/* {correctedChildren || <tr></tr>} */}
//       {children}
//     </thead>
//   );
// };

// export const Tbody = ({ children }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['tr'], 'tr');
//   return (
//     <tbody className="w-full bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 not-prose text-base relative">
//       {/* {correctedChildren} */}
//       {children}
//     </tbody>
//   );
// };

// export const Tfoot = ({ children }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['tr'], 'tr');
//   return (
//     <tfoot className="bg-gray-200 dark:bg-gray-800">
//       {children}
//       {/* {correctedChildren} */}
//     </tfoot>
//   );
// };

// export const Tr = ({ children }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['th', 'td'], 'td');
//   return (
//     <tr className="w-full not-prose text-base">
//       {children}
//       {/* {correctedChildren || <td></td>} */}
//     </tr>
//   );
// };

// export const Th = ({
//   children,
//   isRowHeader = false,
//   rowSpan,
// }: {
//   children: React.ReactNode;
//   isRowHeader?: boolean;
//   rowSpan?: number;
// }) => {
//   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text'], 'span');
//   return (
//     <th
//       scope={isRowHeader ? 'row' : 'col'}
//       rowSpan={rowSpan}
//       className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900"
//     >
//       {correctedChildren}
//     </th>
//   );
// };

// export const Td = ({
//   children,
//   className,
//   full,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   full?: boolean;
// }) => {
//   const correctedChildren = correctChildren(children, ['span', 'a', 'strong', 'em', 'b', 'i', '#text', 'img'], 'span');
//   return (
//     <td className={`text-base ${full ? 'p-0' : 'px-6 py-4'} ${className || ''}`}>
//       {correctedChildren}
//     </td>
//   );
// };

// // export const LoadingComponent = () => {
// //   return (
// //     <div className="relative inset-0 z-50 flex items-center justify-center">
// //       Loading...
// //     </div>
// //   );
// // };

// // // Loadable Component handling with Suspense properly
// // export const LoadableComponent = ({ children }: { children: React.ReactNode }) => {
// //   return (
// //     <React.Suspense fallback={<LoadingComponent />}>
// //       {children}
// //     </React.Suspense>
// //   );
// // };

import React, {
  isValidElement,
  ReactElement,
  ReactNode,
  JSXElementConstructor,
} from 'react';

// Type Definitions
type AllowedTags = string[];
type Child = ReactNode;

// Utility function to dynamically correct invalid children
const correctChildElement = (
  child: Child,
  allowedTags: AllowedTags,
  fallbackTag: string
): ReactNode => {
  if (!isValidElement(child)) return child; // Skip non-elements

  const childType = typeof child.type === 'string' ? child.type : null;

  if (childType && allowedTags.includes(childType)) {
    return child; // Valid child
  } else if (childType) {
    console.warn(
      `Invalid element <${childType}> found. Converting to <${fallbackTag}> to maintain correct HTML structure.`
    );
    const { props, key } = child as ReactElement<any, string | JSXElementConstructor<any>>;
    return React.createElement(fallbackTag, { ...props, key }, props.children);
  }

  return child;
};

// Utility function to validate and correct children
const correctChildren = (
  children: ReactNode,
  allowedTags: AllowedTags,
  fallbackTag: string
): ReactNode[] | ReactNode => {
  return React.Children.map(children, (child) =>
    correctChildElement(child, allowedTags, fallbackTag)
  );
};

// export default correctChildren;



// import React from 'react';

// export const Table = ({ children, ...props }: { children: React.ReactNode }) => (
//   <table {...props}>
//     {React.Children.map(children, (child) =>
//       child.type === 'thead' || child.type === 'tbody' || child.type === 'tfoot'
//         ? child
//         : React.createElement('tbody', {}, child)
//     )}
//   </table>
// );

// export const Thead = ({ children, ...props }: { children: React.ReactNode }) => (
//   <thead {...props}>
//     {React.Children.map(children, (child) =>
//       child.type === 'tr' ? child : React.createElement('tr', {}, child)
//     )}
//   </thead>
// );

// export const Tbody = ({ children, ...props }: { children: React.ReactNode }) => (
//   <tbody {...props}>
//     {React.Children.map(children, (child) =>
//       child.type === 'tr' ? child : React.createElement('tr', {}, child)
//     )}
//   </tbody>
// );

// export const Tr = ({ children, ...props }: { children: React.ReactNode }) => (
//   <tr {...props}>
//     {React.Children.map(children, (child) =>
//       child.type === 'td' || child.type === 'th' ? child : React.createElement('td', {}, child)
//     )}
//   </tr>
// );

// export const Th = ({ children, ...props }: { children: React.ReactNode }) => (
//   <th {...props}>{children}</th>
// );

// export const Td = ({ children, ...props }: { children: React.ReactNode }) => (
//   <td {...props}>{children}</td>
// );

// export const Table = ({ children, ...props }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['thead', 'tbody', 'tfoot'], 'tbody');
//   return (
//     <table {...props}>
//       {correctedChildren || <tbody />}
//     </table>
//   );
// };

// export const Thead = ({ children, ...props }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['tr'], 'tr');
//   return (
//     <thead {...props}>
//       {correctedChildren || <tr />}
//     </thead>
//   );
// };

// export const Tbody = ({ children, ...props }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['tr'], 'tr');
//   return (
//     <tbody {...props}>
//       {correctedChildren || <tr />}
//     </tbody>
//   );
// };

// export const Tr = ({ children, ...props }: { children: React.ReactNode }) => {
//   const correctedChildren = correctChildren(children, ['td', 'th'], 'td');
//   return (
//     <tr {...props}>
//       {correctedChildren || <td />}
//     </tr>
//   );
// };

// export const Th = ({ children, ...props }: { children: React.ReactNode }) => (
//   <th {...props}>{children || 'Loading...'}</th>
// );

// export const Td = ({ children, ...props }: { children: React.ReactNode }) => (
//   <td {...props}>{children || 'Loading...'}</td>
// );

// import React from 'react';

export const Table = ({ children, ...props }: { children: React.ReactNode }) => (
  <table {...props}>
    {/* {React.Children.map(children, (child) => {
      if (
        React.isValidElement(child) &&
        (child.type === 'thead' || child.type === 'tbody' || child.type === 'tfoot')
      ) {
        return child;
      }
      // Wrap invalid children in <tbody>
      return child; */}
    {/* })} */}
    {children}
  </table>
);

export const Thead = ({ children, ...props }: { children: React.ReactNode }) => (
  <thead {...props}>
    {/* {React.Children.map(children, (child) =>
      React.isValidElement(child) && child.type === 'tr' ? child : <tr>{child}</tr>
    // )} */}
    {children}
  </thead>
);

export const Tbody = ({ children, ...props }: { children: React.ReactNode }) => (
  <tbody {...props}>
    {children}
    {/* {React.Children.map(children, (child) =>
      React.isValidElement(child) && child.type === 'tr' ? child : <tr>{child}</tr>
    )} */}
  </tbody>
);

export const Tr = ({ children, ...props }: { children: React.ReactNode }) => (
  <tr {...props}>
    {/* {React.Children.map(children, (child) =>
      React.isValidElement(child) && (child.type === 'td' || child.type === 'th') ? (
        child
      ) : (
        <td>{child}</td>
      )
    )} */}
    {children}
  </tr>
);

export const Th = ({ children, ...props }: { children: React.ReactNode }) => <th {...props}>{children}</th>;

export const Td = ({ children, ...props }: { children: React.ReactNode }) => <td {...props}>{children}</td>;
