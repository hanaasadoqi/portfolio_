import React from 'react';
import clsx from 'clsx';
import { IconButton } from '@/components/shared';
import { BiBookContent, BiSolidBookContent } from 'react-icons/bi';
import TOCContent from './TOCContent';

interface TOCContainerProps {
  showTOC: boolean;
  toggleTOC: () => void;
  children: React.ReactNode;
}

const TOCContainer: React.FC<TOCContainerProps> = ({ showTOC, toggleTOC, children }) => {
  return (
    <div className="relative">
      <aside
        className={clsx(
          "sticky top-0 right-0 h-screen bg-gray-100 dark:bg-gray-900 border-x border-gray-200 dark:border-gray-800 flex flex-col shadow-inner rounded-r-lg transition-width duration-300",
          { 'w-0': !showTOC, 'w-64': showTOC },
        )}
      >
        <IconButton
          className="absolute top-4 right-4 z-[9999]"
          ariaLabel={showTOC ? 'Hide Table of Contents' : 'Show Table of Contents'}
          icon={showTOC ? <BiSolidBookContent /> : <BiBookContent />}
          onClick={toggleTOC}
        />
        <div className="relative flex-1">
          <div className={clsx("relative z-10 flex flex-col items-center justify-start transition-opacity duration-300 ease-in-out", { "hidden opacity-0": !showTOC, "flex opacity-100": showTOC })}>
            <p className="w-full text-xl font-bold mb-4 pt-4 pl-4 text-left -z-10">Table of Contents</p>
            <div className="flex-1 w-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 p-4">
              {children}
            </div>
          </div>

        </div>
      </aside>
    </div>
  );
};

export default TOCContainer;
