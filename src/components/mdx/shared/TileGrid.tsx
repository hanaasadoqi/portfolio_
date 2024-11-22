"use client";

import clsx from 'clsx';
import { useTabs } from '../hooks/useTabs';
import { Suspense } from 'react';
import { LoadingOverlay } from '@/components';

interface TileProps {
  label: string;
  children: React.ReactNode;
}

interface TileGridProps {
  label?: string;
  children: React.ReactElement<TileProps>[];
}

export const TileGrid: React.FC<TileGridProps> = ({ label, children }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <>
      {/* Grid for tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {children.map((tile, index) => {
          const isActive = activeTab === index;
          const { label } = tile.props;

          return (
            <button
              key={index}
              onClick={(e) => handleTab(index, e)}
              className={clsx(
                'p-4 border rounded-lg shadow-md text-left transition-all duration-200',
                {
                  'bg-primary-300 dark:bg-primary-800 dark:text-white text-primary-800': isActive,
                  'text-gray-700 dark:bg-gray-800 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-50 dark:bg-gray-900 dark:active:bg-gray-950 dark:hover:bg-gray-800 ':
                    !isActive,
                }
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Active tile content */}
      <div className="relative mt-6 w-full max-w-full px-6 py-4 bg-white dark:bg-gray-900 rounded-lg shadow">
        <Suspense fallback={<LoadingOverlay />}>
          {children[activeTab] && children[activeTab].props.children}
        </Suspense>
      </div>
    </>
  );
};
