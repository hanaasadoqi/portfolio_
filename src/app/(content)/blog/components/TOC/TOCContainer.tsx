import React from 'react';
import clsx from 'clsx';
import { IconButton } from '@/components/shared';
import { BiBookContent, BiSolidBookContent, BiNetworkChart } from 'react-icons/bi';
import TOCContent from './TOCContent';
import { TOCItem } from '@/hooks/useTOC';

interface TOCContainerProps {
  showTOC: boolean;
  toggleTOC: () => void;
  children: React.ReactNode;
  type?: string;
}

const contentItems: TOCItem[] = [
  {
    id: '/arrays',
    text: 'Understanding React Hooks',
    level: 1, // Optional level, can be used to nest items visually
    children: [
      {
        id: 'related-post-1-subtopic-1',
        text: 'useState and useEffect Basics',
        level: 2,
      },
      {
        id: 'related-post-1-subtopic-2',
        text: 'Advanced Hook Patterns',
        level: 2,
      },
    ],
  },
  {
    id: 'related-post-2',
    text: 'State Management in React',
    level: 1,
    children: [
      {
        id: 'related-post-2-subtopic-1',
        text: 'Context API vs Redux',
        level: 2,
      },
      {
        id: 'related-post-2-subtopic-2',
        text: 'Managing Async State',
        level: 2,
      },
    ],
  },
  {
    id: 'external-resource-1',
    text: 'Next.js Documentation',
    level: 1,
  },
  {
    id: 'external-resource-2',
    text: 'Tailwind CSS Official Guide',
    level: 1,
  },
];


const TOCContainer: React.FC<TOCContainerProps> = ({ showTOC, toggleTOC, children, type }) => {
  return (
    <div className="relative">
      <aside
        className={clsx(
          "sticky top-0 right-0 h-screen bg-gray-100 dark:bg-gray-900 border-x border-gray-200 dark:border-gray-800 flex flex-col shadow-inner rounded-r-lg transition-width duration-300",
          { 'w-0': !showTOC, 'w-64': showTOC },
        )}
      >
        {
          type === "related" ? (
            <IconButton
              className="absolute top-4 -right-12 z-[9999] opacity-15 hover:opacity-85 hover:text-cyan-500"
              ariaLabel="Show Related"
              icon={<BiNetworkChart />}
              onClick={toggleTOC}
              tooltip="Related Posts"
              tooltipId='related-tooltip'
              tooltipPlace='bottom'
              variant="ghost"
            />
          ) : (

            <IconButton
              className="absolute top-4 right-4 z-[9999]"
              ariaLabel={showTOC ? 'Hide Table of Contents' : 'Show Table of Contents'}
              icon={showTOC ? <BiSolidBookContent /> : <BiBookContent />}
              onClick={toggleTOC}
            />
          )}
        <div className="relative flex-1 h-full">
          <div className={clsx("relative z-10 h-full flex flex-col items-center justify-start transition-opacity duration-300 ease-in-out", { "hidden opacity-0": !showTOC, "absolute lg:flex opacity-100": showTOC })}>
            <p className="w-full text-xl font-bold mb-4 pt-4 pl-4 text-left">{type === 'related' ? "Related Posts" : "Table of Contents"}</p>
            <div className="flex-1 w-full flex flex-col py-2 md:p-4 overflow-y-auto">
              {type === "related" ? (
                <TOCContent tocItems={contentItems} activeId={null} expandedSections={new Set()} toggleSection={() => { }} />
              ) : (
                <>
                  {children}
                </>
              )}
            </div>
          </div>

        </div>
      </aside >
    </div >
  );
};

export default TOCContainer;
