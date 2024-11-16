import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import mdxComponents from '@/components/mdx/mdxComponents';
import { getMdxOptions } from './getMdxOptions';

export interface Frontmatter {
  [key: string]: any;
}

export async function readAndCompileMdx(filePath: string) {
  try {
    const source = await fs.readFile(filePath, 'utf8');

    const { frontmatter, content } = await compileMDX<Frontmatter>({
      source,
      // components: mdxComponents,
      options: getMdxOptions(),
    });


    return { frontmatter, content };
  } catch (error) {
    console.error(`Error reading or compiling MDX file at ${filePath}:`, error);
    throw error;
  }
}
