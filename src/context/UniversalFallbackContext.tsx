"use client"

import React, { ReactNode } from 'react';

const ParentContext = React.createContext<string | null>(null);


interface UniversalFallbackProps {
  isLoading?: boolean;
  children?: React.ReactNode;
  parentType?: string;
}

const UniversalFallback: React.FC<UniversalFallbackProps> = ({
  isLoading = true,
  children,
  parentType = 'div',
}) => {
  if (!isLoading) return <>{children}</>;

  switch (parentType) {
    case 'table':
      return (
        <table>
          <tbody>
            <tr>
              <td colSpan={100} className="text-center">
                <span>Loading table...</span>
              </td>
            </tr>
          </tbody>
        </table>
      );
    case 'thead':
      return (
        <thead>
          <tr>
            <th colSpan={100} className="text-center">
              Loading header...
            </th>
          </tr>
        </thead>
      );
    case 'tbody':
      return (
        <tbody>
          <tr>
            <td colSpan={100} className="text-center">
              Loading body...
            </td>
          </tr>
        </tbody>
      );
    case 'tr':
      return (
        <tr>
          <td>
            <span>Loading row...</span>
          </td>
        </tr>
      );
    case 'th':
      return <th>Loading header cell...</th>;
    case 'td':
      return <td>Loading cell...</td>;
    case 'ul':
      return (
        <ul>
          <li>Loading list item...</li>
        </ul>
      );
    case 'ol':
      return (
        <ol>
          <li>Loading ordered list item...</li>
        </ol>
      );
    case 'li':
      return <li>Loading list item...</li>;
    case 'pre':
      return (
        <pre>
          <code>Loading code block...</code>
        </pre>
      );
    case 'code':
      return <code>Loading code...</code>;
    case 'p':
      return <p>Loading paragraph...</p>;
    case 'div':
    default:
      return (
        <div className="flex items-center justify-center p-4">
          <span>Loading...</span>
        </div>
      );
  }
};

export default UniversalFallback;


interface ParentProviderProps {
  type: string;
  children: ReactNode;
}

export const ParentProvider: React.FC<ParentProviderProps> = ({ type, children }) => {
  return <ParentContext.Provider value={type}>{children}</ParentContext.Provider>;
};