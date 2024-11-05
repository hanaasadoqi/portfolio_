'use client';

import React, { KeyboardEvent } from 'react';
import clsx from 'clsx';
import { Suggestion } from '@/types';
import Link from 'next/link';

interface SuggestionsListProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  activeSuggestionIndex: number;
  setActiveSuggestionIndex: React.Dispatch<React.SetStateAction<number>>;
  side?: boolean;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  onSuggestionClick,
  activeSuggestionIndex,
  setActiveSuggestionIndex,
  side = false
}) => {
  if (suggestions.length === 0) {
    return (
      <ul
        className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10"
        role="listbox"
        aria-label="No suggestions available"
      >
        <li className="p-2 text-gray-500">No suggestions found</li>
      </ul>
    );
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        onSuggestionClick(suggestions[activeSuggestionIndex]);
      }
    }
  };

  return (
    <ul
      className={clsx("absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 max-h-60 overflow-y-auto", {
        'max-h-60': !side,
        'max-h-1/2': side
      })}
      role="listbox"
      aria-label="Search suggestions"
      onKeyDown={handleKeyDown}
      tabIndex={-1} // Make the list focusable
    >
      {suggestions.map((suggestion, index) => (
        <Link key={suggestion.slug || index} href={`/blog/${suggestion.slug}` || ''} onClick={() => onSuggestionClick(suggestion)}>
          <li
            className={clsx(
              'p-2 cursor-pointer focus:outline-none',
              index === activeSuggestionIndex ? 'bg-gray-100' : 'hover:bg-gray-100'
            )}
            role="option"
            aria-selected={index === activeSuggestionIndex}
            tabIndex={0}
            onMouseEnter={() => setActiveSuggestionIndex(index)}
            onMouseLeave={() => setActiveSuggestionIndex(-1)}
          >
            {suggestion.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default React.memo(SuggestionsList);
