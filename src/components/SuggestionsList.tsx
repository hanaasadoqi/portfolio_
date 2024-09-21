"use client"

import Link from 'next/link';
import React from 'react'

export interface Suggestion {
  title: string;
  slug: string | null;
}


const SuggestionsList: React.FC<{
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
}> = ({ suggestions, onSuggestionClick }) => (
  <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
    {suggestions.length ? (
      suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSuggestionClick(suggestion)}
          role="option"
          aria-selected="false"
        >
          <Link href={suggestion.slug || ''}>
            {suggestion.title}
          </Link>
        </li>
      ))
    ) : (
      <li className="p-2 text-gray-500">No suggestions found</li>
    )}
  </ul>
);

export default SuggestionsList;