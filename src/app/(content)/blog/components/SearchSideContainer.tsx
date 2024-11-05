import React from 'react'
import SearchWithSuggestions from './SearchWithSuggestions'

const SearchSideContainer: React.FC = () => {
  return (
    <div className="h-full">
      <div className="w-full flex justify-end">
        <SearchWithSuggestions />
      </div>
    </div>
  )
}

export default SearchSideContainer;