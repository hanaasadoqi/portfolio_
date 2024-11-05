import React from 'react';
import clsx from 'clsx';
import { IconButton } from '@/components/shared';
import { BiNetworkChart, BiNote, BiSearch, BiLink } from 'react-icons/bi';
import SearchWithSuggestions from '../SearchWithSuggestions';
import { Suggestion } from '@/types';

interface SideContainerProps {
  showSide: boolean;
  toggleSide: () => void;
  children: React.ReactNode;
  currentSide: string;
  setCurrentSide: (side: string) => void;
  relatedPosts?: Suggestion[];
  resources?: Suggestion[];
}

const SideContainer: React.FC<SideContainerProps> = ({ showSide, toggleSide, children, currentSide, setCurrentSide, resources, relatedPosts }) => {

  const handleSide = (side: string) => {
    if (!showSide || currentSide === side) {
      toggleSide()
    }

    setCurrentSide(side)
  }

  return (
    <div className="relative">
      <aside
        className={clsx(
          "sticky top-0 right-0 h-screen bg-gray-100 dark:bg-gray-900 border-x border-gray-200 dark:border-gray-800 flex flex-col shadow-inner rounded-r-lg transition-width duration-300",
          { 'w-0': !showSide, 'w-64': showSide },
        )}
      >
        <div className="absolute top-0 -right-12 z-[9999] gap-4 flex flex-col justify-center items-center h-full">
          <IconButton
            className="opacity-15 hover:opacity-85 hover:text-cyan-500"
            ariaLabel="Search Posts"
            icon={<BiSearch />}
            onClick={() => handleSide('search')}
            tooltip="Search"
            tooltipId='search-tooltip'
            tooltipPlace='bottom'
            variant="ghost"
          />
          {relatedPosts && <IconButton
            className="opacity-15 hover:opacity-85 hover:text-cyan-500"
            ariaLabel="Show Related"
            icon={<BiNetworkChart />}
            onClick={() => handleSide('related')}
            tooltip="Related"
            tooltipId='related-tooltip'
            tooltipPlace='bottom'
            variant="ghost"
          />}
          {resources && <IconButton
            className="opacity-15 hover:opacity-85 hover:text-cyan-500"
            ariaLabel="Show Related"
            icon={<BiLink />}
            onClick={() => handleSide('resources')}
            tooltip="Resources"
            tooltipId='resource-tooltip'
            tooltipPlace='bottom'
            variant="ghost"
          />}
        </div>
        <div className="relative flex-1 h-full">
          <div className={clsx("relative z-10 h-full flex flex-col items-center justify-start transition-opacity duration-300 ease-in-out", { "hidden opacity-0": !showSide, "absolute lg:flex opacity-100": showSide })}>
            {currentSide === 'related' && <p className="w-full text-xl font-bold mb-4 pt-4 pl-4 text-left">Related Posts</p>}
            {currentSide === 'search' && <p className="w-full text-xl font-bold mb-4 pt-4 pl-4 text-left">All Posts</p>}
            {currentSide === 'resources' && <p className="w-full text-xl font-bold mb-4 pt-4 pl-4 text-left">Resources</p>}
            <div className="flex-1 w-full flex flex-col py-2 md:p-4 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideContainer;
