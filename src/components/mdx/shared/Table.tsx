import clsx from 'clsx'
import React from 'react'

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  )
}

export const Thead = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="bg-gray-200 dark:bg-gray-900">
      <tr>{children}</tr>
    </thead>
  )
}

export const Tbody = ({ children }: { children: React.ReactNode }) => {
  return <tbody className="bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200">{children}</tbody>
}

export const Tr = ({ children, id }: { children: React.ReactNode; id?: string; }) => {
  return <tr data-id={id}>{children}</tr>
}

export const Th = ({ children }: { children: React.ReactNode }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-gray-500 uppercase tracking-wider"
    >
      {children}
    </th>
  )
}

export const Td = ({ children, className, full }: { children: React.ReactNode, className?: string; full?: boolean; }) => {
  return <td className={clsx("whitespace-nowrap", {
    "px-6 py-4": !full,
    "p-0": full
  }, className)}>{children}</td>
}
