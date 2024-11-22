import LoadingComponent from '@/app/@modal/(.)skills/[id]/loading';
import clsx from 'clsx';
import { Suspense } from 'react';
import Heading from './shared/Heading';
import { LI, OL, UL } from './shared/List';
// import { Thead, Tbody, Tr, Th, Td } from './shared/Table';
import dynamic from 'next/dynamic';
import { MDXImage } from './shared/MDXImage';
import { MDXComponents } from 'mdx/types';
import React from 'react';
import UniversalFallback, { ParentProvider } from '@/context/UniversalFallbackContext';

const LoadingRow = () => (
  <tr>
    <td colSpan={100} className="text-center">Loading...</td>
  </tr>
);

const LoadingHeader = () => (
  <thead>
    <tr>
      <th colSpan={3}>Loading Header...</th>
    </tr>
  </thead>
);


const LoadingBody = () => (
  <tbody>
    <tr>
      <td colSpan={3}>Loading...</td>
    </tr>
  </tbody>
);

type AvailableComponents = 'ModalTile' | 'ModalTileGrid' | 'Tile' | 'TileGrid' | 'Button' | 'Mermaid' | 'CodeBlock' | 'DiagramModal' | 'CodeWithHighlights' | 'SidePanel' | 'CodeContainer' | 'Modal' | 'Tabs' | 'DropdownTabs' | 'CodeProblem' | 'Editor' | 'EditorContainer' | 'Table' | 'ExplanationItem' | 'Callout' | 'CodeFolding' | 'InfoBlock' | 'ItemHeader' | 'ItemContent' | 'Tab' | 'TabList' | 'Tbody' | 'Thead' | 'Th' | 'Tr' | 'Td';

const loadComponent = (name: AvailableComponents, parentType?: string) => {
  const componentMap: Record<AvailableComponents, () => Promise<{ default: React.ComponentType<any> }>> = {
    Button: () => import('@/components/mdx/shared/Button').then(mod => ({ default: mod.Button })),
    Mermaid: () => import('@/components/mdx/shared/Mermaid').then(mod => ({ default: mod.default })),
    CodeBlock: () => import('@/components/mdx/shared/CodeBlock').then(mod => ({ default: mod.CodeBlock })),
    DiagramModal: () => import('@/components/mdx/shared/DiagramModal').then(mod => ({ default: mod.default })),
    CodeWithHighlights: () => import('../mdx/shared/CodeWithHighlights').then(mod => ({ default: mod.CodeWithHighlights })),
    SidePanel: () => import('../mdx/shared/CodeWithHighlights').then(mod => ({ default: mod.SidePanel })),
    CodeContainer: () => import('../mdx/shared/CodeWithHighlights').then(mod => ({ default: mod.CodeContainer })),
    Modal: () => import('../mdx/shared/Modal').then(mod => ({ default: mod.default })),
    Tabs: () => import('../mdx/shared/Tabs').then(mod => ({ default: mod.Tabs })),
    DropdownTabs: () => import('../mdx/shared/DropdownTabs').then(mod => ({ default: mod.DropdownTabs })),
    CodeProblem: () => import('../mdx/shared/CodeProblem').then(mod => ({ default: mod.CodeProblem })),
    Editor: () => import('../mdx/shared/Editor').then(mod => ({ default: mod.default })),
    EditorContainer: () => import('../mdx/shared/EditorContainer').then(mod => ({ default: mod.EditorContainer })),
    Table: () => import('../mdx/shared/Table').then(mod => ({ default: mod.Table })),
    Tbody: () => import('../mdx/shared/Table').then(mod => ({ default: mod.Tbody })),
    Thead: () => import('../mdx/shared/Table').then(mod => ({ default: mod.Thead })),
    Th: () => import('../mdx/shared/Table').then(mod => ({ default: mod.Th })),
    Tr: () => import('../mdx/shared/Table').then(mod => ({ default: mod.Tr })),
    Td: () => import('../mdx/shared/Table').then(mod => ({ default: mod.Td })),
    ExplanationItem: () => import('../mdx/shared/ExplanationItem').then(mod => ({ default: mod.ExplanationItem })),
    Callout: () => import('../mdx/shared/Blocks').then(mod => ({ default: mod.Callout })),
    CodeFolding: () => import('../mdx/shared/CodeFolding').then(mod => ({ default: mod.CodeFolding })),
    InfoBlock: () => import('../mdx/shared/Blocks').then(mod => ({ default: mod.InfoBlock })),
    ItemContent: () => import('../mdx/shared/ExplanationItem').then(mod => ({ default: mod.ItemContent })),
    ItemHeader: () => import('../mdx/shared/ExplanationItem').then(mod => ({ default: mod.ItemHeader })),
    Tab: () => import('../mdx/shared/Tabs').then(mod => ({ default: mod.Tab })),
    TabList: () => import('../mdx/shared/TabList').then(mod => ({ default: mod.TabList })),
    TileGrid: () => import('../mdx/shared/TileGrid').then(mod => ({ default: mod.TileGrid })),
    Tile: () => import('../mdx/shared/Tile').then(mod => ({ default: mod.Tile })),
    ModalTile: () => import('../mdx/shared/ModalTileGrid').then(mod => ({ default: mod.ModalTile })),
    ModalTileGrid: () => import('../mdx/shared/ModalTileGrid').then(mod => ({ default: mod.ModalTileGrid })),
  };
  return dynamic(componentMap[name], { loading: () => <UniversalFallback parentType={parentType} /> });
};

const Mermaid = loadComponent('Mermaid');
const DiagramModal = loadComponent('DiagramModal');
const Modal = loadComponent('Modal');
const Tabs = loadComponent('Tabs');
const DropdownTabs = loadComponent('DropdownTabs');
const CodeProblem = loadComponent('CodeProblem', 'pre');
const EditorContainer = loadComponent('EditorContainer');
const Editor = loadComponent('Editor');
const Table = loadComponent('Table', 'table');
const ExplanationItem = loadComponent('ExplanationItem');
const CodeWithHighlights = loadComponent('CodeWithHighlights', 'pre');
const SidePanel = loadComponent('SidePanel');
const CodeContainer = loadComponent('CodeContainer', 'pre');
const Callout = loadComponent('Callout');
const CodeFolding = loadComponent('CodeFolding');
const InfoBlock = loadComponent('InfoBlock');
const ItemContent = loadComponent('ItemContent');
const ItemHeader = loadComponent('ItemHeader');
const Tab = loadComponent('Tab')
const TabList = loadComponent('TabList')
const Tbody = loadComponent('Tbody', 'tbody');
const Thead = loadComponent('Thead', 'thead');
const Th = loadComponent('Th', 'th');
const Td = loadComponent('Td', 'td');
const Tr = loadComponent('Tr', 'tr');
const Button = loadComponent('Button');
const TileGrid = loadComponent('TileGrid');
const Tile = loadComponent('Tile');
const ModalTileGrid = loadComponent('ModalTileGrid');
const ModalTile = loadComponent('ModalTile');

type MdxComponentsType = {
  [key: string]: React.ComponentType<any>;
};

const frequentlyUsedComponents: MdxComponentsType = {
  h1: ({ children, className, ...props }: any) => (
    <Heading depth={1} className="text-5xl" {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, className, ...props }: any) => (
    <Heading depth={2} className="text-3xl md:text-4xl" {...props}>
      {children}
    </Heading>
  ),
  h3: ({ children, className, ...props }: any) => (
    <Heading depth={3} className="text-2xl md:text-3xl" {...props}>
      {children}
    </Heading>
  ),
  h4: ({ children, className, ...props }: any) => (
    <Heading depth={4} className="text-xl md:text-2xl text-primary-900 dark:text-primary-100" {...props}>
      {children}
    </Heading>
  ),
  h5: ({ children, className, ...props }: any) => (
    <Heading depth={5} className="text-lg md:text-xl text-primary-900 dark:text-primary-100" {...props}>
      {children}
    </Heading>
  ),
  h6: ({ children, className, ...props }: any) => (
    <Heading depth={6} className="text-lg text-primary-900 dark:text-primary-100" {...props}>
      {children}
    </Heading>
  ),
  p: ({ children, className, ...props }: any) => {
    const hasNestedP = React.Children.toArray(children).some(
      (child) => child?.toString().includes('p')
    );

    const sharedClassName = clsx(
      'not-prose text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-primary-800 dark:hover:text-primary-300',
      { 'whitespace-nowrap': children?.props?.className?.includes('math-inline') }
    )
    return (
      <ParentProvider type="p">
        <p>
          <span
            className={clsx('inline-block', sharedClassName)}
            {...props}
          >
            <Suspense fallback={<UniversalFallback />}>
              {children}
            </Suspense>
          </span>
        </p>
      </ParentProvider>
    )
  },
  code: ({ children, className, ...props }: any) => {
    const DynamicCodeBlock = loadComponent('CodeBlock', 'code');
    return (
      <DynamicCodeBlock className={className} {...props}>
        {children}
      </DynamicCodeBlock>
    )
  },
  ul: ({ children, ...props }: any) => (
    <Suspense fallback={<UniversalFallback parentType="ul" />}>
      <ul {...props}>{children}</ul>
    </Suspense>
  ),
  ol: ({ children, ...props }: any) => (
    <Suspense fallback={<UniversalFallback parentType="ol" />}>
      <ol {...props}>{children}</ol>
    </Suspense>
  ),
  li: ({ children, className, ...props }: any) => (
    <Suspense fallback={<UniversalFallback parentType="li" />}>
      <li
        {...props}
        className={clsx(
          'ml-2 mb-2 text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-primary-700 dark:hover:text-primary-400',
          className
        )}
      >{children}</li>
    </Suspense>
  ),
  // li: ({ className, children, ...props }: any) => {
  //   return (
  //     <LI
  //       {...props}
  // className={clsx(
  //   'ml-2 mb-2 text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-primary-700 dark:hover:text-primary-400',
  //   className
  // )}
  //     >
  //       <div>
  //         {children}
  //       </div>
  //     </LI>
  //   )
  // },
  // ol: ({ children, ...props }: any) => <OL {...props}>{children}</OL>,
  // ul: ({ children, ...props }: any) => <UL {...props}>{children}</UL>,
  // code: ({ children, className, ...props }: any) => {
  //   const DynamicCodeBlock = loadComponent('CodeBlock');
  //   return (
  //     <ParentProvider type="pre">
  //       <Suspense fallback={<UniversalFallback />}>
  //         <DynamicCodeBlock className={className} {...props}>
  //           <Suspense fallback={<UniversalFallback />}>
  //             {children}
  //           </Suspense>
  //         </DynamicCodeBlock>
  //       </Suspense >
  //     </ParentProvider>
  //   )
  // },
  // table: ({ children, ...props }: any) => (
  //   <Table {...props}>
  //     {children || (
  //       <UniversalFallback parentType="table">
  //         <tbody>
  //           <tr>
  //             <td>Loading...</td>
  //           </tr>
  //         </tbody>
  //       </UniversalFallback>
  //     )}
  //   </Table>
  // ),
  // table: ({ children, ...props }: any) => (
  //   <Table {...props}>
  //     {children || (
  //       <UniversalFallback parentType="table">
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>Loading...</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </UniversalFallback>
  //     )}
  //   </Table>
  // ) as ReactMDXComponent,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  // tbody: ({ children, ...props }: any) => (
  //   // <ParentProvider type="tbody">
  //   // <Suspense fallback={<UniversalFallback parentType='tbody' />}>
  //   <Tbody {...props}>
  //     {/* <Suspense fallback={<UniversalFallback parentType='tbody' />}> */}
  //     {children}
  //     {/* </Suspense> */}
  //   </Tbody>
  //   // </Suspense>
  //   // </ParentProvider>
  // ),
  // thead: ({ children, ...props }: any) => (
  //   // <ParentProvider type="thead">
  //   // <Suspense fallback={<UniversalFallback parentType='thead' />}>
  //   <Thead {...props}>
  //     {/* <Suspense fallback={<UniversalFallback parentType='thead' />}> */}
  //     {children}
  //     {/* </Suspense> */}
  //   </Thead>
  //   // </Suspense>
  //   // </ParentProvider>
  // ),
  // th: ({ children, ...props }: any) => (
  //   // <ParentProvider type="th">
  //   // <Suspense fallback={<UniversalFallback parentType='th' />}>
  //   <Th {...props}>
  //     {/* <Suspense fallback={<UniversalFallback parentType='th' />}> */}
  //     {children}
  //     {/* </Suspense> */}
  //   </Th>
  //   // </Suspense>
  //   // </ParentProvider>
  // ),
  // tr: ({ children, ...props }: any) => (
  //   // <ParentProvider type="tr">
  //   // <Suspense fallback={<UniversalFallback parentType='tr' />}>
  //   <Tr {...props}>
  //     {/* <Suspense fallback={<UniversalFallback parentType='tr' />}> */}
  //     {children}
  //     {/* </Suspense> */}
  //   </Tr>
  //   // </Suspense>
  //   // </ParentProvider>
  // ),
  // td: ({ children, ...props }: any) => (
  //   <Td {...props}>
  //     {/* <Suspense fallback={<LoadingRow />}> */}
  //     {children}
  //     {/* </Suspense> */}
  //   </Td>
  // ),
  img: ({ ...props }: any) => (
    <Suspense fallback={<LoadingComponent />}>
      <MDXImage {...props} />
    </Suspense>
  ),
  button: ({ children, ...props }: any) => (
    <Button {...props}>
      {children}
    </Button>
  )
};

const rarelyUsedComponents: Partial<MdxComponentsType> = {
  Mermaid,
  DiagramModal,
  Modal,
  Tabs,
  CodeProblem,
  Editor,
  EditorContainer,
  DropdownTabs,
  Table,
  ExplanationItem,
  CodeWithHighlights,
  SidePanel,
  CodeContainer,
  Callout,
  CodeFolding,
  InfoBlock,
  ItemContent,
  ItemHeader,
  Tab,
  TabList,
  Tbody,
  Thead,
  Td,
  Tr,
  Th,
  Button,
  TileGrid,
  Tile,
  ModalTileGrid,
  ModalTile
};

const validRarelyUsedComponents = Object.fromEntries(
  Object.entries(rarelyUsedComponents).filter(([_, value]) => value !== undefined)
) as MdxComponentsType;

const mdxComponents: MDXComponents = {
  ...frequentlyUsedComponents,
  ...validRarelyUsedComponents,
};

export default mdxComponents;