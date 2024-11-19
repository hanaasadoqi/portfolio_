import { serialize } from 'next-mdx-remote/serialize';
import Tabs from './Tabs';
import { extractSections } from '../utils/extractSections';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { getMdxOptions } from '../../utils/getMdxOptions';

export default async function ProjectInfo({ content }: { content: string }) {
  const { sections } = extractSections(content);
  const options = getMdxOptions();

  const sectionsObject: {
    [key: string]: { title: string; content: MDXRemoteSerializeResult };
  } = {};

  await Promise.all(
    sections.map(async (section) => {
      const compiledSource = await serialize(section.content, {
        ...options
      });
      sectionsObject[section.title] = {
        title: section.title,
        content: compiledSource,
      };
    })
  );

  return (
    <div className="sm:p-8 tabs-container">
      <Tabs sections={sectionsObject} />
    </div>
  );
}