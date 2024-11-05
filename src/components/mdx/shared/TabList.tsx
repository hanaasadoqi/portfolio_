"use client";

import React from 'react';
import clsx from 'clsx';
import { useTabs } from '../hooks/useTabs';
import { DropdownTabsProps } from './DropdownTabs';

export const TabList: React.FC<DropdownTabsProps> = ({ label, children }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <>
      {/* Mobile dropdown */}
      {label && (
        <div className="md:hidden max-w-full m-4">
          <label htmlFor="tabs" className="sr-only">
            {label}
          </label>
          <select
            id="tabs"
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

      {/* Tab buttons for larger screens */}
      <div className="md:flex">
        <ul className="not-prose hidden md:flex flex-col space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
          {children.map((tab, index) => {
            const { label } = tab.props;
            const isActive = activeTab === index;

            return (
              <li key={index}>
                <button
                  onClick={() => handleTab(index)}
                  className={clsx(
                    'not-prose inline-flex items-center px-4 py-2 rounded-l-lg max-w-full transition-all duration-200 text-left',
                    {
                      'bg-primary-600 text-white': isActive,
                      'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700':
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
        <div className="w-screen p-6 md:p-12 bg-white dark:bg-gray-900 rounded-lg shadow">
          {children[activeTab]}
        </div>
      </div>
    </>
  );
};