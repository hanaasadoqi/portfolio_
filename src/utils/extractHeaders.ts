'use client'
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

// Define a type for header nodes
interface HeaderNode {
  tagName: string;
  children: { value: string }[];
  position?: { start: { line: number }; end: { line: number } };
}

// Function to extract headers
export function extractHeaders(content: string): HeaderNode[] {
  const tree = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .parse(content);

  const headers: HeaderNode[] = [];

  visit(tree, 'element', (node) => {
    if (node.tagName && /^h[1-6]$/.test(node.tagName)) {
      headers.push(node as HeaderNode);
    }
  });

  return headers;
}
