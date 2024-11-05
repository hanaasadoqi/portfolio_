'use client';

import React, { useRef, useState, KeyboardEvent } from 'react';
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { IconButton } from '../IconButton';
import SuggestionsList from './SuggestionsList';
import useAutocomplete from '@/hooks/useAutocomplete';
import { Suggestion } from '@/types';
import useClickOutside from '@/hooks/useClickOutside';
import { useRouter } from 'next/router';

interface AutocompleteSearchBarProps {
  suggestions: Suggestion[];
  size?: number;
  placeholder?: string;
  className?: string;
  side?: boolean;
}

const AutocompleteSearchBar: React.FC<AutocompleteSearchBarProps> = ({ suggestions, size = 24, placeholder = "Search articles...", className, side = false }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(-1);
  // const router = useRouter()

  const {
    query,
    setQuery,
    filteredSuggestions,
    showSuggestions,
    handleInputChange,
    setShowSuggestions,
  } = useAutocomplete({ suggestions, debounceDelay: 300 });

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.title);
    setShowSuggestions(false);
    setShowSearchBar(false);
    // if (suggestion.slug) {
    //   router.push(suggestion.slug)
    // }

  };

  const handleShowSearch = () => {
    setShowSearchBar(prev => !prev);
    if (!showSearchBar) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      setShowSearchBar(false);
    }
  };

  useClickOutside(wrapperRef, () => {
    setShowSuggestions(false);
    setShowSearchBar(false);
  });

  return (
    <div
      ref={wrapperRef}
      className={clsx("relative z-20 flex items-center justify-end w-full h-12 space-x-2 p-4 m-2", className)}
    >
      <div
        className={clsx(
          'transition-all duration-300 ease-in-out',
          {
            'flex-1 w-full opacity-100': showSearchBar,
            'w-0 opacity-0': !showSearchBar,
          },
          {
            'max-w-lg': !side,
            'max-w-full': side
          }
        )}
      >
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 border border-gray-300 bg-primary-200 text-primary-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-controls="suggestions-list"
          aria-expanded={showSuggestions}
          role="combobox"
        />
        {showSuggestions && (
          <SuggestionsList
            suggestions={filteredSuggestions}
            onSuggestionClick={handleSuggestionClick}
            activeSuggestionIndex={activeSuggestionIndex}
            setActiveSuggestionIndex={setActiveSuggestionIndex}
            side={side}
          />

        )}
      </div>
      <IconButton
        icon={<FaSearch size={size} />}
        onClick={handleShowSearch}
        ariaLabel={showSearchBar ? 'Close search bar' : 'Open search bar'}
        variant={showSearchBar ? 'outline' : 'icon'}
        size="md"
      />
    </div>
  );
};

export default AutocompleteSearchBar;
