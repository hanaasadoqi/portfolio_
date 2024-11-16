import { serialize } from 'next-mdx-remote/serialize';
import { getMdxOptions } from './getMdxOptions';

export async function serializeMDX(source: string) {
  const options = getMdxOptions();
  try {
    const mdxSource = await serialize(source,
      {
        ...options
      }
    );
    return mdxSource
  } catch (err) {
    console.error(`Error loading mdx file: ${err}`);
  }
}