import fs from 'fs/promises';
import path from 'path';

interface FileLoaderProps {
  slug: string[] | string;
  contentSource: string;
}

export const FileLoader = async ({ slug, contentSource }: FileLoaderProps): Promise<string | null> => {
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
  const filePath = path.join(process.cwd(), contentSource, `${slugPath}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error loading file ${slugPath}:`, error);
    return null;
  }
};
