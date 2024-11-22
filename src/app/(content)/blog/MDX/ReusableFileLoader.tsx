// // // // import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
// // // // import fs from 'fs/promises';
// // // // import path from 'path';
// // // // import { serialize } from 'next-mdx-remote/serialize';
// // // // import { getMdxOptions } from '../../utils/getMdxOptions';

// // // // const toPascalCase = (str: string) =>
// // // //   str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());


// // // // const reusableContentDirectory = path.join(process.cwd(), 'src/content/reusables');

// // // // export async function ReusableFileLoader() {
// // // //   const options = getMdxOptions();

// // // //   const reusableContent: Record<string, MDXRemoteSerializeResult> = {};

// // // //   const reusableFiles = await fs.readdir(reusableContentDirectory);

// // // //   for (const file of reusableFiles) {
// // // //     const reusableKey = toPascalCase(path.basename(file, '.mdx'));
// // // //     const reusableFileContent = await fs.readFile(
// // // //       path.join(reusableContentDirectory, file),
// // // //       'utf-8'
// // // //     );

// // // //     const serializedContent = await serialize(reusableFileContent, {
// // // //       ...options
// // // //     });

// // // //     reusableContent[reusableKey] = serializedContent
// // // //   }

// // // //   return { reusableContent };
// // // // }

// // // import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
// // // import fs from 'fs/promises';
// // // import path from 'path';
// // // import { serialize } from 'next-mdx-remote/serialize';
// // // import { getMdxOptions } from '../../utils/getMdxOptions';

// // // const toPascalCase = (str: string) =>
// // //   str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());

// // // const reusableContentDirectory = path.join(process.cwd(), 'src/content/reusables');

// // // async function getFilesRecursively(dir: string): Promise<string[]> {
// // //   const entries = await fs.readdir(dir, { withFileTypes: true });
// // //   const files = await Promise.all(
// // //     entries.map(entry => {
// // //       const fullPath = path.join(dir, entry.name);
// // //       return entry.isDirectory() ? getFilesRecursively(fullPath) : fullPath;
// // //     })
// // //   );
// // //   return files.flat().filter(file => file.endsWith('.mdx')); // Only include .mdx files
// // // }

// // // export async function ReusableFileLoader() {
// // //   const options = getMdxOptions();
// // //   const reusableContent: Record<string, MDXRemoteSerializeResult> = {};

// // //   // Get all files recursively from the reusableContentDirectory
// // //   const reusableFiles = await getFilesRecursively(reusableContentDirectory);

// // //   for (const file of reusableFiles) {
// // //     try {
// // //       const reusableKey = toPascalCase(
// // //         path.relative(reusableContentDirectory, file).replace(/\.mdx$/, '').replace(/[\/\\]/g, '-')
// // //       );

// // //       const reusableFileContent = await fs.readFile(file, 'utf-8');

// // //       const serializedContent = await serialize(reusableFileContent, {
// // //         ...options
// // //       });

// // //       reusableContent[reusableKey] = serializedContent;
// // //     } catch (error) {
// // //       console.error(`Failed to process file: ${file}`, error);
// // //     }
// // //   }

// // //   return { reusableContent };
// // // }





// import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
// import fs from 'fs/promises';
// import path from 'path';
// import { serialize } from 'next-mdx-remote/serialize';
// import { getMdxOptions } from '../../utils/getMdxOptions';

// const toPascalCase = (str: string) =>
//   str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());

// const reusableContentDirectory = path.join(process.cwd(), 'src/content/reusables');

// async function getFilesRecursively(dir: string): Promise<string[]> {
//   const entries = await fs.readdir(dir, { withFileTypes: true });
//   const files = await Promise.all(
//     entries.map(async entry => {
//       const fullPath = path.join(dir, entry.name);
//       if (entry.isDirectory()) {
//         // Recursive call for directories
//         return getFilesRecursively(fullPath);
//       } else if (entry.isFile() && fullPath.endsWith('.mdx')) {
//         // Return valid MDX files only
//         return fullPath;
//       }
//       return null; // Skip non-MDX files
//     })
//   );
//   return files.flat().filter(Boolean) as string[]; // Remove null entries
// }

// export async function ReusableFileLoader() {
//   const options = getMdxOptions();
//   const reusableContent: Record<string, MDXRemoteSerializeResult> = {};

//   try {
//     // Get all files recursively from the reusableContentDirectory
//     const reusableFiles = await getFilesRecursively(reusableContentDirectory);
//     console.log('Reusable Files Found:', reusableFiles); // Debugging

//     for (const file of reusableFiles) {
//       try {
//         const reusableKey = toPascalCase(
//           path.relative(reusableContentDirectory, file).replace(/\.mdx$/, '').replace(/[\/\\]/g, '-')
//         );

//         const reusableFileContent = await fs.readFile(file, 'utf-8');

//         const serializedContent = await serialize(reusableFileContent, {
//           ...options
//         });

//         reusableContent[reusableKey] = serializedContent;
//       } catch (fileError) {
//         console.error(`Error processing file: ${file}`, fileError);
//       }
//     }
//   } catch (error) {
//     console.error('Error loading reusable content directory:', error);
//   }

//   return { reusableContent };
// }













import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { getMdxOptions } from '../../utils/getMdxOptions';

const toPascalCase = (str: string) =>
  str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());

const reusableContentDirectory = path.join(process.cwd(), 'src/content/reusables');

async function getFilesRecursively(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Recursively get files in subdirectories
        return getFilesRecursively(fullPath);
      } else if (entry.isFile() && fullPath.endsWith('.mdx')) {
        // Return only .mdx files
        return fullPath;
      }
      return null; // Skip non-files and non-mdx entries
    })
  );

  return files.flat().filter(Boolean) as string[]; // Flatten and remove null entries
}

export async function ReusableFileLoader() {
  const options = getMdxOptions();
  const reusableContent: Record<string, MDXRemoteSerializeResult> = {};

  try {
    // Get all valid .mdx files recursively
    const reusableFiles = await getFilesRecursively(reusableContentDirectory);

    console.log('Processing MDX Files:', reusableFiles); // Debugging output

    for (const file of reusableFiles) {
      try {
        const reusableKey = toPascalCase(
          path.relative(reusableContentDirectory, file).replace(/\.mdx$/, '').replace(/[\/\\]/g, '-')
        );

        const reusableFileContent = await fs.readFile(file, 'utf-8');

        const serializedContent = await serialize(reusableFileContent, {
          ...options
        });

        reusableContent[reusableKey] = serializedContent;
      } catch (fileError) {
        console.error(`Error processing file: ${file}`, fileError);
      }
    }
  } catch (error) {
    console.error('Error loading reusable content:', error);
  }

  return { reusableContent };
}
