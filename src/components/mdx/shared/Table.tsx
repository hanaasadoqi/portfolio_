import clsx from 'clsx'
import React from 'react'

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="not-prose w-full">
      <table className="w-full max-w-full divide-y divide-gray-200 not-prose">{children}</table>
    </div>
  )
}

export const Thead = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="bg-gray-200 dark:bg-gray-900">
      {children}
    </thead>
  )
}

export const Tbody = ({ children }: { children: React.ReactNode }) => {
  return <tbody className="bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 w-full not-prose text-base">{children}</tbody>
}

export const Tr = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return <tr data-id={id} className="not-prose text-base">{children}</tr>
}

export const Th = ({ children, isRowHeader = false, rowSpan }: { children: React.ReactNode; isRowHeader?: boolean; rowSpan?: number }) => {
  return (
    <th
      scope={isRowHeader ? 'row' : 'col'}
      rowSpan={rowSpan}
      className={clsx(
        'px-6 py-3 text-xs font-medium uppercase tracking-wider',
        isRowHeader
          ? 'text-left border-r-2 border-r-gray-300 text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800'
          : 'text-left text-gray-900 dark:text-gray-500 bg-gray-200 dark:bg-gray-900'
      )}
    >
      {children}
    </th>
  )
}

export const Td = ({
  children,
  className,
  full,
}: {
  children: React.ReactNode
  className?: string
  full?: boolean
}) => {
  return (
    <td
      className={clsx(
        'max-w-full text-base',
        {
          'px-6 py-4': !full,
          'p-0': full,
        },
        className
      )}
    >
      {children}
    </td>
  )
}
