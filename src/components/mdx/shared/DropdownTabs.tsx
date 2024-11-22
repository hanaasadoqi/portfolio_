"use client";

import { Suspense } from 'react';
import { useTabs } from '../hooks/useTabs';
import { TabsProps } from './types'
import { LoadingOverlay } from '@/components';

export interface DropdownTabsProps extends TabsProps {
  label?: string;
  horizontal?: boolean;
}
export const DropdownTabs: React.FC<DropdownTabsProps> = ({ label = "Select", children }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <div className="dropdown-tabs sm:hidden">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          {label || children[activeTab].props.label}
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={activeTab}
          onChange={(e) => handleTab(Number(e.target.value), e)}
        >
          {children.map((tab, index) => (
            <option key={index} value={index}>
              {tab.props.label}
            </option>
          ))}
        </select>
      </div>
      <div className="relative sm:hidden tab-content h-full mx-auto prose-xl flex flex-col items-center justify-center text-left px-4">
        <Suspense fallback={<LoadingOverlay />}>
          {children[activeTab]}
        </Suspense>
      </div>
    </div>
  );
};