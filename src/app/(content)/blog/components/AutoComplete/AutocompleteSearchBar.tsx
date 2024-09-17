'use client';

import { useRef, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { IconButton } from '@/components/shared';
import { FaSearch } from 'react-icons/fa';
import SuggestionsList, { Suggestion } from './SuggestionsList';
import useAutocomplete from '@/hooks/useAutocomplete';

interface AutocompleteSearchProps {
  suggestions: Suggestion[];
}

const AutocompleteSearchBar: React.FC<AutocompleteSearchProps> = ({ suggestions }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const router = useRouter();

  const {
    query,
    setQuery,
    filteredSuggestions,
    showSuggestions,
    handleInputChange,
    setShowSuggestions
  } = useAutocomplete(suggestions);

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.title);
    setShowSuggestions(false);
    if (suggestion.slug) {
      router.push(`/blog/${suggestion.slug}`);
    }
  };

  const handleShowSearch = () => {
    setShowSearchBar(prev => !prev);
    if (!showSearchBar) inputRef.current?.focus();
  };

  return (
    <div className="z-20 absolute w-full h-12 mx-auto flex items-center justify-end space-x-2">
      <div
        className={clsx('max-w-lg transition-transform duration-1000 ease-in transition-opacity', {
          'flex-1 w-full': showSearchBar,
          'opacity-0 w-0': !showSearchBar
        })}
      >
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          aria-autocomplete="list"
          aria-controls="suggestions-list"
          aria-expanded={showSuggestions}
        />
        {showSuggestions && (
          <SuggestionsList
            suggestions={filteredSuggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
      <IconButton
        icon={<FaSearch size={24} />}
        onClick={handleShowSearch}
        aria-label="Toggle search bar"
      />
    </div>
  );
};

export default AutocompleteSearchBar;
