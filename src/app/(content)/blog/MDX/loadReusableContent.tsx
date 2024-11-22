import fs from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { getMdxOptions } from '../../utils/getMdxOptions';

const reusableContentDirectory = path.join(process.cwd(), 'src/content/reusables');

const toPascalCase = (str: string) =>
  str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());
export async function loadReusableContent() {
  const options = getMdxOptions();

  const reusableFiles = await fs.readdir(reusableContentDirectory);

  const reusableContent = await Promise.all(
    reusableFiles.map(async (file) => {
      const key = toPascalCase(file.replace(/\.mdx$/, ''))
      const content = await fs.readFile(path.join(reusableContentDirectory, file), 'utf-8');
      const serializedContent = await serialize(content, { ...options });
      return { key: toPascalCase(key), serializedContent };
    })
  );

  return Object.fromEntries(
    reusableContent.map(({ key, serializedContent }) => [key, serializedContent])
  );
}
