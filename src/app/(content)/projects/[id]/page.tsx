import fs from 'fs';
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import mdxComponents from "@/components/mdx/MDXComponents.server";
import { fetchProjectById } from "@/app/lib/actions/projects";
import ProjectContent from "../components/ProjectContent";


interface Params {
  params: {
    id: string;
  };
}

export default async function ProjectDocsPage({ params }: Params) {
  const { id } = params;
  const project = await fetchProjectById(id);

  const { slug } = project;

  const source = fs.readFileSync(
    path.join(process.cwd(), `/src/content/projects/${slug}.mdx`)
  )

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypePrism, rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
    components: mdxComponents,
  });

  const pageTitle = project.title as string;
  const pageDescription = project.description as string;

  return <ProjectContent project={project} content={content} />
}