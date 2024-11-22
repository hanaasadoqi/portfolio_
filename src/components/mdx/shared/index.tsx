import Heading from './Heading'

export const CustomH1: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading id={props.id} depth={1} className="text-5xl" {...props} />
export const CustomH2: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading id={props.id} depth={2} className="text-3xl md:text-4xl" {...props} />
export const CustomH3: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading id={props.id} depth={3} className="text-2xl md:text-3xl" {...props} />
export const CustomH4: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading id={props.id} depth={4} className="text-xl md:text-2xl text-primary-900 dark:text-primary-100" {...props} />
export const CustomH5: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading id={props.id} depth={5} className="text-lg md:text-xl text-primary-900 dark:text-primary-100" {...props} />
export const CustomH6: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => <Heading id={props.id} depth={6} className="text-lg text-primary-900 dark:text-primary-100" {...props} />

// export { default as Mermaid } from './Mermaid'
// export { default as CodeEditor } from './CodeEditor'
// export { default as Modal } from './Modal'
// export { default as Editor } from './Editor'

export * from './MDXImage'
export * from './CodeBlock'
export * from './List'
export * from './Blocks'
export * from './Tabs'
export * from './Table'
export * from './Container'
export * from './Button'
export * from './ExplanationItem'
export * from './CodeFolding'
export * from './DropdownTabs'
export * from './DiagramModal'
export * from './CodeWithHighlights'
export * from './TabList'
export * from './TileGrid'
export * from './Tile'
export * from './ModalTileGrid'

export { default as Mermaid } from './Mermaid/CombinedMermaid'