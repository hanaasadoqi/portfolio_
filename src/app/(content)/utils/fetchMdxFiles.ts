
// import fs from 'fs/promises';
// import path from 'path';

// export async function fetchMdxFiles(dir: string): Promise<string[]> {
//   try {
//     let mdxFiles: string[] = [];
//     const entries = await fs.readdir(dir, { withFileTypes: true });

//     for (const entry of entries) {
//       const fullPath = path.join(dir, entry.name);
//       if (entry.isDirectory()) {
//         const subDirFiles = await fetchMdxFiles(fullPath);
//         mdxFiles = mdxFiles.concat(subDirFiles);
//       } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
//         mdxFiles.push(fullPath);
//       }
//     }

//     // Check if index.mdx exists if no other MDX files are found
//     if (mdxFiles.length === 0) {
//       const indexFilePath = path.join(dir, 'index.mdx');
//       try {
//         await fs.access(indexFilePath);
//         mdxFiles.push(indexFilePath);
//       } catch {
//         console.warn(`index.mdx not found in ${dir}`);
//       }
//     }

//     return mdxFiles;

//   } catch (err) {
//     console.error(`Error fetching MDX files from ${dir}: ${err}`);
//     return [];
//   }
// }
import { promises as fs } from 'fs';
import path from 'path';

export async function fetchMdxFiles(dir: string): Promise<string[]> {
  let mdxFiles: string[] = [];

  async function traverseDirectory(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        // Traverse into subdirectory, without checking for index.mdx here
        await traverseDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        // Collect .mdx files only
        mdxFiles.push(fullPath);
      }
    }
  }

  // Traverse starting from the initial directory
  await traverseDirectory(dir);

  // Check if there's an index.mdx in any directory if no files were found at all
  if (mdxFiles.length === 0) {
    const indexFilePath = path.join(dir, 'index.mdx');
    try {
      await fs.access(indexFilePath);
      mdxFiles.push(indexFilePath);
    } catch {
      // Silently fail if index.mdx does not exist, avoiding logs for non-existent paths
    }
  }

  return mdxFiles;
}

// export async function fetchMdxFile(dir: string): Promise<string | null> {
//   const directFilePath = `${dir}.mdx`; // Example: /articles/algorithms/techniques.mdx

//   try {
//     // Check if a specific .mdx file matches the route directly
//     await fs.access(directFilePath);
//     return directFilePath;
//   } catch {
//     // If no direct match, check if it's a directory
//     try {
//       const directoryExists = await fs.stat(dir);
//       if (directoryExists.isDirectory()) {
//         // Look for index.mdx only if directory exists without a specific .mdx file
//         const indexFilePath = path.join(dir, 'index.mdx');
//         await fs.access(indexFilePath);
//         return indexFilePath;
//       }
//     } catch {
//       // No match found
//       return null;
//     }
//   }

//   return null;
// }

// import { promises as fs } from 'fs';
// import path from 'path';

export async function fetchMdxFile(filePath: string): Promise<string | null> {
  // Directly check if the given file exists
  try {
    await fs.access(filePath);
    return filePath; // Return the path if file is found
  } catch {
    // Return null if file is not found
    return null;
  }
}
