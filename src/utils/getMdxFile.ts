import fs from 'node:fs';
import path from 'node:path';

export const getMdxFileContent = (slug: string): string => {
  if (slug) {
    const filePath = path.join(process.cwd(), `/src/content/${slug}.mdx`);
    return fs.readFileSync(filePath, 'utf8');
  } else {
    return 'No file found'
  }
};
