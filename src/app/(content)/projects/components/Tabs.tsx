'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMDXComponents } from 'mdx-components';

export type TabsProps = {
  sections: {
    [key: string]: {
      title: string;
      content: MDXRemoteSerializeResult;
    };
  };
};

const Tabs: React.FC<TabsProps> = ({ sections }) => {
  const sectionKeys = Object.keys(sections);
  const [activeTab, setActiveTab] = useState(sectionKeys[0]);
  const components = useMDXComponents();

  return (
    <div className="bg-transparent w-full flex gap-4 h-[500px] flex-col sm:flex-row">
      {/* Mobile Dropdown */}
      <div className="sm:hidden w-full border border-2 rounded-md">
        <label htmlFor="tabs" className="sr-only">
          Select Section
        </label>
        <select
          id="tabs"
          className="block w-full p-2 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setActiveTab(e.target.value)}
          value={activeTab}
        >
          {sectionKeys.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      {/* Tab Navigation */}
      <ul className="hidden sm:block border border-2 border-gray-300 dark:border-gray-700 pl-0 scrollbar-hide overflow-y-auto scroll-contain py-4">
        {sectionKeys.map((key) => (
          <li key={key} className="w-full">
            <button
              onClick={() => setActiveTab(key)}
              className={clsx(
                'py-2 px-6 w-full text-right',
                activeTab === key ? 'bg-primary-500 text-white' : 'text-gray-800 dark:text-gray-500'
              )}
            >
              {sections[key].title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="w-full border border-2 border-gray-300 dark:border-gray-700 px-8 dark:text-white overflow-y-auto scroll-contain">
        {sectionKeys.map((key) => (
          <div
            key={key}
            style={{ display: activeTab === key ? 'block' : 'none' }}
            className="text-white"
          >
            <MDXRemote {...sections[key].content} components={components} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
