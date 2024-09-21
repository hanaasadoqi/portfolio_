import fs from 'fs';
import path from 'path';

// Function to search for an MDX file by name in a given directory
export const findMdxFileByName = (dir: string, filename: string) => {
  const mdxFiles = fs.readdirSync(dir) // Read all files in the directory
    .filter(file => path.extname(file) === '.mdx'); // Filter only `.mdx` files
  console.log('files', mdxFiles)
  // Check if a file with the desired name exists
  const matchedFile = mdxFiles.find(file =>
    path.parse(file).name === filename
    // console.log(filename)
  );
  console.log(matchedFile)

  if (matchedFile) {
    return path.join(dir, matchedFile); // Return the full path of the file
  }

  return null; // Return null if no match is found
};
