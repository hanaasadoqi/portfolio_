import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import Tabs from './Tabs';
import { extractSections } from '../utils/extractSections';
import { TOCContextProvider } from '../../blog/[...slug]/components/TOC';

type Section = {
  title: string;
  content: string;
};

export default async function ProjectInfo({ content }: { content: MDXRemoteSerializeResult; }) {
  const { sections, toc } = extractSections(content.compiledSource);

  const sectionsObject: { [key: string]: { compiledSource: MDXRemoteSerializeResult } } = {};

  await Promise.all(
    sections.map(async (section) => {
      const compiledSource = await serialize(section.content);
      sectionsObject[section.title] = { compiledSource };
    })
  );

  return (
    <TOCContextProvider>
      <div className="p-8">
        <Tabs sections={sectionsObject} toc={toc} content={content} />
      </div>
    </TOCContextProvider>
  );
}
