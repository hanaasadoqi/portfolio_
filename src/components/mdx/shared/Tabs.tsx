"use client";

import clsx from 'clsx';
import { useTabs } from '../hooks/useTabs';
import { TabsProps, TabProps } from './types';
import { Suspense } from 'react';
import { LoadingOverlay } from '@/components';


export const Tabs: React.FC<TabsProps> = ({ children, label }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <div className={`tabs-container-${label}`}>
      <ul className="tab-list not-prose w-full flex">
        {children.map((tab, index) => (
          <li key={index} className="w-full bg-gray-200 dark:bg-gray-900 text-primary-950 dark:text-primary-100">
            <button
              className={clsx('whitespace-nowrap', {
                'active': index === activeTab,
              })}
              onClick={(e) => handleTab(e, index)}
            >
              {tab.props.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {activeTab !== -1 && children[activeTab]}
      </div>
    </div>
  )
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return (
    <div className="max-w-full w-full">
      <Suspense fallback={<LoadingOverlay />}>
        {children}
      </Suspense>
    </div>
  )
}
