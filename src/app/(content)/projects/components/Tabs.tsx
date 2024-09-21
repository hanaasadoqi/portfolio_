"use client";

import React, { useState, useEffect, ReactElement, JSXElementConstructor } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import mdxComponents from '@/components/mdx/MDXComponents.server';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

type Section = {
  compiledSource: string;
};

type Sections = {
  [key: string]: Section;
};

interface TabsProps {
  sections: Sections;
}

const Tabs: React.FC<TabsProps> = ({ sections }) => {
  const sectionKeys = Object.keys(sections);
  const [activeTab, setActiveTab] = useState(sectionKeys[0] || '');
  const [expanded, setExpanded] = useState(false);
  const [compiledContent, setCompiledContent] = useState<ReactElement<any, string | JSXElementConstructor<any>>>();

  useEffect(() => {
    const compileSection = async () => {
      if (activeTab && sections[activeTab]) {
        const { content } = await compileMDX({
          source: sections[activeTab].compiledSource,
          components: mdxComponents,
          options: {
            mdxOptions: {
              rehypePlugins: [rehypePrism, rehypeSlug],
              remarkPlugins: [remarkGfm],
            },
            parseFrontmatter: false,
          },
        });
        setCompiledContent(content);
      }
    };

    compileSection();
  }, [activeTab, sections]);

  const handleTab = (key: string) => {
    if (activeTab === key) {
      setActiveTab('');
      setExpanded(false);
      setCompiledContent(undefined);
    } else {
      setActiveTab(key);
      setExpanded(true);
    }
  };

  return (
    <div className="max-w-sm md:max-w-3xl lg:max-w-5xl">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Read More</label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleTab(e.target.value)}
        >
          <option value={''}>Reset</option>
          {sectionKeys.map((section, index) => (
            <option key={`${section}-${index}`} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 overflow-x-auto">
        {sectionKeys.map((section, index) => {
          return (
            <li className="w-full focus-within:z-10" key={`${section}-${index}`}>
              <button
                onClick={() => handleTab(section)}
                className={`inline-block w-full p-4 ${activeTab === section
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500'
                  } bg-gray-100 border-r border-gray-200 whitespace-nowrap dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white`}
                aria-current="page"
              >
                {section}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col w-full space-y-4 md:px-0 px-12">
        {expanded && activeTab && compiledContent && (
          <div className="transition-all ease-in-out duration-500 bg-gray-100 p-4 rounded-lg shadow-inner mb-24 md:m-auto">
            <div
              className="prose prose-2xl mx-auto py-12"
              dangerouslySetInnerHTML={{ __html: compiledContent }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

Tabs.displayName = "Tabs";
