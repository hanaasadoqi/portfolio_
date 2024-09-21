import type { MDXComponents } from "mdx/types";
import { CodeBlock, MDXImage, CodeFolding, CustomH1, CustomH2, CustomH3, CustomH4, CustomH5, CustomH6, InfoBlock, Callout, OL, LI, UL } from "./components/mdx/shared";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <MDXImage
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props)}
      />
    ),
    code: ({ children, className, ...props }) => {
      const language = className?.replace('language-', '') || 'text';
      return (
        <CodeBlock language={language} className={className} {...props}>
          {children}
        </CodeBlock>
      );
    },
    ul: ({ children, ...props }) => <UL {...props}>{children}</UL>,
    ol: ({ children, ...props }) => <OL {...props}>{children}</OL>,
    li: ({ children, ...props }) => <LI {...props}>{children}</LI>,
    hi: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    h4: CustomH4,
    h5: CustomH5,
    h6: CustomH6,
    CodeFolding,
    InfoBlock,
    Callout,

    ...components,
  };
}
