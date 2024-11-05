import { fetchArticleTitles } from '@/app/lib/actions/articles';
import { AutocompleteSearchBar } from '@/components';
import { Suggestion } from '@/types';
import React from 'react'

const SearchWithSuggestions: React.FC = async () => {
  let suggestions: Suggestion[] = [];

  try {
    suggestions = await fetchArticleTitles();
  } catch (error) {
    console.error('Error fetching article titles:', error);
    suggestions = [];
  }

  return (
    <div className="max-w-7xl mx-auto">
      <AutocompleteSearchBar suggestions={suggestions} />
    </div>
  )
}

export default SearchWithSuggestions;