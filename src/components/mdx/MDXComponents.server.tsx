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
  CodeWithHighlights
} from "./shared/index";
import { AiFillAccountBook } from "react-icons/ai";


const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  p: ({ children, className, ...props }: any) => <p className="text-gray-900 dark:text-gray-100" {...props}>{children}</p>,
  img: (props: any) => <MDXImage {...props} />,
  li: ({ children, ...props }: any) => <LI {...props}>{children}</LI>,
  ol: ({ children, ...props }: any) => <OL {...props}>{children}</OL>,
  ul: ({ children, ...props }: any) => <UL {...props}>{children}</UL>,
  code: ({ children, className, ...props }: any) => {
    const language = className?.replace('language-', '') || 'text';
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
  CodeWithHighlights
};

export default mdxComponents;
