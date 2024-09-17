"use client"

import { Suggestion } from "@/app/(content)/blog/components/AutoComplete/SuggestionsList";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

export default function useAutocomplete(suggestions: Suggestion[]) {
  const [query, setQuery] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);


  const debounceFilter = useCallback(
    debounce((userInput: string) => {
      const filtered = suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(userInput.length > 0);
    }, 300),
    [suggestions]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setQuery(userInput);
    debounceFilter(userInput);
  };

  return {
    query,
    setQuery,
    filteredSuggestions,
    showSuggestions,
    handleInputChange,
    setShowSuggestions
  };
}
