import fs from "node:fs";
import path from "node:path";
import { useMDXComponents } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import Header from "../components/Header";
import { CustomH1, CustomH2, CustomH3, CustomH4, CustomH5, CustomH6, CodeBlock, Image as BlogImage, UL, OL, LI, InfoBlock, CodeFolding, Callout } from "../../mdx-components";
import { Params } from '../../types';
import BlogContainer from "../components/BlogContainer";
export const runtime = "nodejs";
export const dynamic = "force-static";

export default async function DocsPage({ params }: Params) {
  const filePath = path.join(process.cwd(), `/src/content/articles/${params?.slug}.mdx`)
  console.log(filePath)
  const source = fs.readFileSync(filePath, "utf8");

  const components = useMDXComponents({
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    h4: CustomH4,
    h5: CustomH5,
    h6: CustomH6,
    img: (props) => {
      return <BlogImage {...props} />
    },
    li: ({ children, ...props }) => {
      return <LI {...props}>{children}</LI>
    },
    ol: ({ children, ...props }) => {
      return <OL {...props}>{children}</OL>
    },
    ul: ({ children, ...props }) => {
      return <UL {...props}>{children}</UL>
    },
    hr: () => {
      return <hr className="not-prose"></hr>
    },
    code: ({ children, className, ...props }) => {
      const language = className?.replace('language-', '') || 'text';
      return <CodeBlock language={language} className={className} {...props}>{children}</CodeBlock>
    },
    Callout,
    InfoBlock,
    CodeFolding: ({ children, ...props }) => {
      return <CodeFolding{...props}>{children}</CodeFolding>
    },
  });

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypePrism, rehypeSlug, rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
    components,
  });

  const pageTitle = frontmatter.title as string;
  const pageDescription = frontmatter.description as string;
  const pageImage = frontmatter.image as string
  const pageSubtitle = frontmatter.subtitle as string
  const publishedDate = frontmatter.publishedDate as string
  const pageTags = frontmatter.tags as string[]

  return (
    <>
      <Header
        title={pageTitle}
        subtitle={pageSubtitle}
        backgroundImage={pageImage}
        description={pageDescription}
        publishedDate={publishedDate}
        tags={pageTags}
      />
      <BlogContainer title={pageTitle} subtitle={pageSubtitle}>
        <div className="flex-1 prose-2xl border-r border-gray-300 dark:border-gray-700 p-12 overflow-contain overflow-auto bg-gray-100">
          {content}
        </div>
      </BlogContainer>
    </>
  );
}
