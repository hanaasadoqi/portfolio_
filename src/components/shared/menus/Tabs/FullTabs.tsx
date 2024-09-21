import React from 'react';
import { toTitleCase } from '@/utils/toTitleCase';
import { toId } from '@/utils/toId'

const FullTabItem = (label: string) => {
  const labelId = toId(label)
  const labelTitle = toTitleCase(label)
  return (
    <li className="w-full focus-within:z-10">
      <div
        id={labelId}
        className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
        {labelTitle}
      </div>
    </li>
  )
}


const FullTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
      {children}
    </ul>
  )
}

export default FullTabs;