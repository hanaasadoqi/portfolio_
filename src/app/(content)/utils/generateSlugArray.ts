import path from "path";

export function generateSlugArray(baseDir: string, filePath: string): string[] {
  const relativePath = path.relative(baseDir, filePath);
  return relativePath.replace(/\.mdx$/, '').split(path.sep);
}
