"use client";

import clsx from 'clsx';
import React from 'react';
import { useTabs } from '../hooks/useTabs';
import { TabsProps, TabProps } from './types';

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <div className="tabs">
      <ul className="hidden overflow-x-auto tab-list text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex sm:justify-center sm:items-center dark:divide-gray-700 dark:text-gray-400">
        {children.map((tab, index) => (
          <li key={index}>
            <button
              className={clsx('whitespace-nowrap', { active: index === activeTab })}
              onClick={() => handleTab(index)}
            >
              {tab.props.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content w-full max-w-full h-full mx-auto prose-xl flex flex-col items-start justify-center text-left p-12">
        {activeTab !== -1 && children[activeTab]}
      </div>
    </div>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="max-w-full w-full">{children}</div>;
};