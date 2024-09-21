"use client";

import React from 'react';
import clsx from 'clsx';
import { useTabs } from '../hooks/useTabs';
import { DropdownTabsProps } from './DropdownTabs';

export const TabList: React.FC<DropdownTabsProps> = ({ label, children }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <>
      {label && (
        <div className="md:hidden w-full mb-8">
          <label htmlFor="tabs" className="sr-only">
            {label}
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={activeTab}
            onChange={(e) => handleTab(Number(e.target.value))}
          >
            {children.map((tab, index) => (
              <option key={index} value={index}>
                {tab.props.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="md:flex">
        {/* Tab buttons */}
        <ul className="hidden md:flex md:flex-col flex-column justify-start space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {children.map((tab, index) => {
            const { label } = tab.props;
            const isActive = activeTab === index;

            return (
              <li key={index}>
                <button
                  onClick={() => handleTab(index)}
                  className={clsx(
                    'inline-flex items-center px-4 py-3 rounded-lg w-full',
                    {
                      'text-white bg-primary-700 dark:bg-primary-600': isActive,
                      'hover:text-gray-900 dark:text-primary-100 bg-gray-50 hover:bg-primary-100 dark:bg-primary-800 dark:hover:bg-primary-700 dark:hover:text-white':
                        !isActive,
                    }
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Tab content */}
        <div className="p-6 bg-primary-50 text-medium text-primary-500 dark:text-primary-400 dark:bg-black/50 rounded-lg w-full">
          <div className="w-full min-h-[200px] flex items-start justify-center">
            {children[activeTab]}
          </div>
        </div>
      </div >
    </>
  );
};
