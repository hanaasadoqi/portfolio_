// "use client";

// import clsx from 'clsx';
// import { useTabs } from '../hooks/useTabs';
// import { DropdownTabsProps } from './DropdownTabs';
// import { Suspense } from 'react';
// import { LoadingOverlay } from '@/components';

// export const TabList: React.FC<DropdownTabsProps> = ({ label, children, horizontal = false }) => {
//   const { activeTab, handleTab } = useTabs(0);

//   return (
//     <>
//       {/* Mobile Dropdown */}
//       <div className="md:hidden w-full my-4">
//         <label htmlFor={`tabs-${label}`} className="sr-only">
//           {label || children[activeTab].props.label}
//         </label>
//         <select
//           id={`tabs-${label}`}
//           className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           value={activeTab}
//           onChange={(e) => handleTab(Number(e.target.value), e)}
//         >
//           {children.map((tab, index) => (
//             <option key={index} value={index}>
//               {tab.props.label}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Desktop Layout */}
//       <div className={clsx("md:flex h-[calc(100vh-100px)] md:h-[500px]", {
//         'flex-col': horizontal
//       })}>
//         {/* Tabs List */}
//         <ul className={clsx("not-prose hidden md:flex text-sm font-medium text-gray-500 dark:text-gray-400 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800 pr-4", {
//           'flex-col': !horizontal
//         })}>
//           {children.map((tab, index) => {
//             const { label } = tab.props;
//             const isActive = activeTab === index;

//             return (
//               <li key={index}>
//                 <button
//                   onClick={(e) => handleTab(index, e)}
//                   className={clsx(
//                     'not-prose inline-flex items-center px-4 w-full h-full transition-all duration-200 text-left',
//                     {
//                       'bg-primary-600 text-white rounded-t-lg': isActive,
//                       'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700':
//                         !isActive,
//                     }
//                   )}
//                   aria-current={isActive ? 'page' : undefined}
//                 >
//                   {label}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Tab Content */}
//         <div className="relative w-full max-w-full px-6 py-4 md:px-8 bg-white dark:bg-gray-900 rounded-lg shadow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
//           <Suspense fallback={<LoadingOverlay />}>
//             {children[activeTab]}
//           </Suspense>
//         </div>
//       </div>
//     </>
//   );
// };






"use client";

import clsx from 'clsx';
import { useTabs } from '../hooks/useTabs';
import { DropdownTabsProps } from './DropdownTabs';
import { Suspense } from 'react';
import { LoadingOverlay } from '@/components';

export const TabList: React.FC<DropdownTabsProps & { horizontal?: boolean }> = ({ label, children, horizontal = false }) => {
  const { activeTab, handleTab } = useTabs(0);

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="md:hidden w-full my-4">
        <label htmlFor={`tabs-${label}`} className="sr-only">
          {label || children[activeTab].props.label}
        </label>
        <select
          id={`tabs-${label}`}
          className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

      {/* Desktop Layout */}
      <div
        className={clsx(
          'md:flex h-[calc(100vh-300px)]',
          horizontal ? 'flex-col' : 'flex-row'
        )}
      >
        {/* Tabs List */}
        <ul
          className={clsx(
            'not-prose hidden md:flex text-sm font-medium text-gray-500 dark:text-gray-400 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800',
            horizontal
              ? 'flex-row space-x-4 border-b border-gray-200 dark:border-gray-700'
              : 'flex-col pr-4'
          )}
        >
          {children.map((tab, index) => {
            const { label } = tab.props;
            const isActive = activeTab === index;

            return (
              <li key={index}>
                <button
                  onClick={(e) => handleTab(index, e)}
                  className={clsx(
                    'not-prose inline-flex items-center px-4 py-3 transition-all duration-200',
                    {
                      'text-center justify-center whitespace-nowrap': horizontal,
                      'border-b-2 border-primary-600 bg-primary-200 hover:bg-primary-100 active:bg-primary-300 dark:bg-primary-800 dark:hover:bg-primary-700 dark:active:bg-primary-900 dark:text-white': horizontal && isActive,
                      'text-left w-full rounded-l-lg': !horizontal,
                      'bg-primary-600 text-white': isActive && !horizontal,
                      'text-primary-600 dark:text-primary-400 bg-primary-200 dark:bg-primary-900': isActive && horizontal,
                      'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700':
                        !isActive && !horizontal,
                      'hover:text-primary-500 dark:hover:text-primary-300': !isActive && horizontal,
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

        {/* Tab Content */}
        {activeTab !== -1 && (
          <div className="relative w-full max-w-full px-6 py-4 md:px-8 bg-white dark:bg-gray-900 rounded-lg shadow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
            <Suspense fallback={<LoadingOverlay />}>
              {activeTab !== -1 && children[activeTab]}
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
};
