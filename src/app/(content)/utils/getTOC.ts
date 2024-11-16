// import remarkParse from 'remark-parse'
// import remarkExtractTOC from 'remark-flexible-toc';
// import remarkMdx from 'remark-mdx';
// import { unified } from 'unified';
// // import fs from 'fs';
// // import path from 'path';
// // // import { remark } from 'remark';
// // import { TOCItem } from '@/hooks/useTOC';
// import remarkStringify from 'remark-stringify';


// interface TOCItem {
//   depth: number,
//   value: string,
//   children: TOCItem[]
// }

// interface TOC {

// }

// export async function getTOC(content: string): Promise<any> {
//   // const toc: any[] = [];

//   // async function processTOC() {


//   const file = await unified()
//     .use(remarkParse)
//     .use(remarkMdx)
//     .use(remarkExtractTOC, { maxDepth: 6, children: true })
//     .use(remarkStringify)
//     .process(content);


//   // return toc;
// }
// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import remarkMdx from 'remark-mdx';
// import { visit } from 'unist-util-visit';
// import rehypeAutolinkHeadings from 'remark-autolink-headings';

// interface TOCItem {
//   id: string;
//   depth: number;
//   value: string;
//   children: TOCItem[];
// }

// export async function getTOC(content: string): Promise<TOCItem[]> {
//   const toc: TOCItem[] = [];

//   const processor = unified()
//     .use(remarkParse) // Parses Markdown syntax
//     // .use(rehypeAutolinkHeadings)
//     .use(remarkMdx)

//   const tree = processor.parse(content);

//   function addToTOC(toc: TOCItem[], item: TOCItem) {
//     if (toc.length === 0 || item.depth === 2) {
//       toc.push(item); // Add directly if top-level (e.g., h2)
//     } else {
//       let parent = toc[toc.length - 1];
//       while (parent.depth < item.depth - 1 && parent.children.length > 0) {
//         parent = parent.children[parent.children.length - 1];
//       }
//       parent.children.push(item);
//     }
//   }

//   // Visit each heading node and structure the TOC array
//   visit(tree, 'heading', (node: any) => {
//     if (node.depth >= 2 && node.depth <= 6) { // Only include h2 to h6
//       const textNode = node.children.find((child: any) => child.type === 'text');
//       const value = textNode ? textNode.value : '';
//       const id = value.toLowerCase().replace(/\s+/g, '-'); // Generate an id from text

//       const tocItem: TOCItem = {
//         id,
//         depth: node.depth,
//         value,
//         children: [],
//       };

//       addToTOC(toc, tocItem); // Add the item in the correct hierarchical position
//     }
//   });

//   return toc;
// }
// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import remarkMdx from 'remark-mdx';
// import remarkAutolinkHeadings from 'remark-autolink-headings';
// import { visit } from 'unist-util-visit';
// import remarkRehype from 'remark-rehype'

// interface TOCItem {
//   id: string;
//   depth: number;
//   value: string;
//   children: TOCItem[];
// }

// export async function getTOC(content: string): Promise<TOCItem[]> {
//   const toc: TOCItem[] = [];

//   const processor = remarkRehype()
//     .use(remarkParse)
//     .use(remarkMdx)
//     .use(remarkAutolinkHeadings, { behavior: 'append' });

//   const tree = processor.parse(content);
//   console.log(tree)

//   function addToTOC(toc: TOCItem[], item: TOCItem) {
//     if (toc.length === 0 || item.depth === 2) {
//       toc.push(item);
//     } else {
//       let parent = toc[toc.length - 1];
//       while (parent.depth < item.depth - 1 && parent.children.length > 0) {
//         parent = parent.children[parent.children.length - 1];
//       }
//       parent.children.push(item);
//     }
//   }

//   visit(tree, 'heading', (node: any) => {
//     if (node.depth >= 2 && node.depth <= 6) {
//       const textNode = node.children.find((child: any) => child.type === 'text');
//       const value = textNode ? textNode.value : '';
//       const id = value.toLowerCase().replace(/\s+/g, '-');

//       const tocItem: TOCItem = {
//         id,
//         depth: node.depth,
//         value,
//         children: [],
//       };

//       addToTOC(toc, tocItem);
//     }
//   });

//   return toc;
// }



import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlugify from 'remark-slug'
import { visit } from 'unist-util-visit';

interface TOCItem {
  id: string;
  depth: number;
  value: string;
  children: TOCItem[];
  dataset: { dataId: number; }
}

export async function getTOC(content: string): Promise<TOCItem[]> {
  const toc: TOCItem[] = [];

  // Use `unified()` as the main processor
  const processor = unified()
    .use(remarkParse) // Parse Markdown
    .use(remarkMdx) // Parse MDX syntax
    .use(remarkAutolinkHeadings as any, { behavior: 'append' }); // Add autolinks to headings

  // // Parse the content to generate the AST (Abstract Syntax Tree)
  const tree = processor.parse(content);

  function sanitizeId(id: string): string {
    const prefixId = id.startsWith('#') ? id : `#${id}`
    return prefixId
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "") // Remove invalid characters
      .replace(/\s+/g, "-");
  }

  // Traverse the AST to find heading nodes and build the TOC
  function addToTOC(toc: TOCItem[], item: TOCItem) {
    let idx = 1
    item.dataset.dataId = idx;
    idx++
    if (toc.length === 0 || item.depth === 2) {
      toc.push(item);
    } else {
      let parent = toc[toc.length - 1];
      while (parent.depth < item.depth - 1 && parent.children.length > 0) {
        parent = parent.children[parent.children.length - 1];
      }
      parent.children.push(item);
      if (idx >= parent.children.length || idx >= toc.length) {
        idx = 1;
      }
    }
  }

  // Visit each heading node and add it to the TOC structure
  visit(tree, 'heading', (node: any) => {
    if (node.depth >= 2 && node.depth <= 6) {
      const textNode = node.children.find((child: any) => child.type === 'text');
      const value = textNode ? textNode.value : '';
      const dataId = node.dataset && node.dataset.dataId ? node.dataset.dataId : 1
      const id = sanitizeId(value);

      const tocItem: TOCItem = {
        id,
        depth: node.depth,
        value,
        dataset: { dataId },
        children: [],
      };

      addToTOC(toc, tocItem);
    }
  });

  return toc;
}
