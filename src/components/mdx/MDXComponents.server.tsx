import React from 'react';
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
  CodeBlock,
  MDXImage,
  UL,
  OL,
  LI,
  InfoBlock,
  CodeFolding,
  Callout,
  Tabs,
  Tab,
  DropdownTabs,
  TabList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Button,
  CodeWithHighlights,
  ExplanationItem,
  ItemHeader,
  ItemContent,
  CodeContainer,
  SidePanel,
  CodeEditor,
  Modal,
  Editor,
  Mermaid
} from "./shared/index";
import { AiFillAccountBook } from "react-icons/ai";
import clsx from 'clsx'

// import dynamic from 'next/dynamic';
// const Mermaid = dynamic(() => import('./shared/Mermaid').then(mod => mod.default), {
//   ssr: false,
// });

const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  p: ({ children, className, ...props }: any) => <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-primary-800 dark:hover:text-primary-300" {...props}>{children}</p>,
  img: (props: any) => <MDXImage {...props} />,
  li: ({ className, children, ...props }: any) => <LI {...props} className={clsx("ml-2 mb-2 text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-primary-700 dark:hover:text-primary-400", className)}>{children}</LI>,
  ol: ({ children, ...props }: any) => <OL {...props}>{children}</OL>,
  ul: ({ children, ...props }: any) => <UL {...props}>{children}</UL>,
  code: ({ children, className, ...props }: any) => {
    const language = className?.replace('language-', '') || 'text';
    if (className?.includes('language-mermaid')) {
      className = "mermaid"
      return <CodeBlock className={className} language={language} {...props}>{children}</CodeBlock>
    }

    return (
      <CodeBlock language={language} className={className} {...props}>
        {children}
      </CodeBlock>
    );
  },
  Callout,
  InfoBlock,
  CodeFolding: ({ children, ...props }: any) => (
    <CodeFolding {...props}>{children}</CodeFolding>
  ),
  Tabs,
  Tab,
  TabList,
  DropdownTabs,
  AiFillAccountBook,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Container,
  CodeWithHighlights,
  CodeContainer,
  ExplanationItem,
  ItemHeader,
  ItemContent,
  SidePanel,
  Mermaid: ({ chart, ...props }: any) => (
    <Mermaid chart={chart || ``}{...props} />
  ),
  CodeEditor,
  Modal,
  Editor,
};
export default mdxComponents;