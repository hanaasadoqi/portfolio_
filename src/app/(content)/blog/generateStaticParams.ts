import fs from 'node:fs';
import path from 'node:path';

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const articlesPath = path.join(process.cwd(), 'src/content/articles');
  const files = fs.readdirSync(articlesPath).filter(file => file.endsWith('.mdx'));

  return files.map(file => ({
    slug: [file.replace(/\.mdx$/, '')]
  }));
}