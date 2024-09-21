'use client';

import { useState, useMemo, ChangeEvent, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { Suggestion } from '@/types';

interface UseAutocompleteProps {
  suggestions: Suggestion[];
  debounceDelay?: number;
}

interface UseAutocompleteReturn {
  query: string;
  setQuery: (query: string) => void;
  filteredSuggestions: Suggestion[];
  showSuggestions: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setShowSuggestions: (show: boolean) => void;
  activeSuggestionIndex: number;
  setActiveSuggestionIndex: (index: number) => void;
}

const useAutocomplete = ({
  suggestions,
  debounceDelay = 300,
}: UseAutocompleteProps): UseAutocompleteReturn => {
  const [query, setQuery] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(-1);

  // Debounced filter function
  const debouncedFilter = useMemo(
    () =>
      debounce((userInput: string) => {
        if (!userInput) {
          setFilteredSuggestions([]);
          setShowSuggestions(false);
          return;
        }

        const lowerCaseInput = userInput.toLowerCase();
        const filtered = suggestions.filter((suggestion) =>
          suggestion.title.toLowerCase().includes(lowerCaseInput)
        );

        setFilteredSuggestions(filtered);
        setShowSuggestions(filtered.length > 0);
      }, debounceDelay),
    [suggestions, debounceDelay]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const userInput = e.target.value;
      setQuery(userInput);
      setActiveSuggestionIndex(-1);
      debouncedFilter(userInput);
    },
    [debouncedFilter]
  );

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);

  return {
    query,
    setQuery,
    filteredSuggestions,
    showSuggestions,
    handleInputChange,
    setShowSuggestions,
    activeSuggestionIndex,
    setActiveSuggestionIndex,
  };
};

export default useAutocomplete;
