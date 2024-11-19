import matter from 'gray-matter';

type Section = {
  title: string;
  content: string;
};

export function extractSections(mdxContent: string): {
  sections: Section[];
} {
  const { content } = matter(mdxContent);
  const lines = content.split('\n');

  const sections: Section[] = [];

  let currentTitle: string | null = null;
  let currentContent: string[] = [];

  lines.forEach((line) => {
    const headingMatch = line.match(/^(#{2,6})\s+(.*)/);
    const mainHeadingMatch = line.match(/^(#{2})\s+(.*)/);

    if (headingMatch) {
      const depth = headingMatch[1].length;
      const text = headingMatch[2].trim();

      const id = text.toLowerCase().replace(/\s+/g, '-');

      if (mainHeadingMatch) {
        if (currentTitle) {
          sections.push({
            title: currentTitle,
            content: currentContent.join('\n'),
          });
        }

        currentTitle = text;
        currentContent = [];
      }
    }

    currentContent.push(line);
  });

  if (currentTitle) {
    sections.push({
      title: currentTitle,
      content: currentContent.join('\n'),
    });
  }

  return { sections };
}
