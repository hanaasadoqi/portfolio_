import Heading from './Heading';

export const CustomH1: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={1} className="text-5xl" {...props} />;
export const CustomH2: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={2} className="text-3xl md:text-4xl" {...props} />;
export const CustomH3: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={3} className="text-2xl md:text-3xl" {...props} />;
export const CustomH4: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={4} className="text-xl md:text-2xl text-primary-900 dark:text-primary-100" {...props} />;
export const CustomH5: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={5} className="text-lg md:text-xl text-primary-900 dark:text-primary-100" {...props} />;
export const CustomH6: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading level={6} className="text-lg text-primary-900 dark:text-primary-100" {...props} />;

export * from './List'
export * from './Blocks'
export * from './Folding'
export * from './MDXImage'
export * from './CodeBlock'
export * from './Tabs'
export * from './TabList'
export * from './DropdownTabs'
export * from './Table'
export * from './Container'
export * from './Button'
export * from './CodeWithHighlights'
export * from './ExplanationItem'
export { default as Mermaid } from './Mermaid'
export { default as CodeEditor } from './CodeEditor'
export { default as Modal } from './Modal'
export { default as Editor } from './Editor'