'use client'

import { IconButton } from '@/components/shared';
import { FaSearch } from 'react-icons/fa';
import { useRef, useState } from 'react';
import clsx from 'clsx';

interface AutocompleteSearchProps {
  suggestions: string[]
}

const fetchSuggestions = async (userInput: string) => {
  const suggestions = ['React', 'JavaScript', 'Ruby on Rails', 'Express']
  return suggestions.filter(suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase()))
}

const AutocompleteSearchBar = () => {
  const [query, setQuery] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false)
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value
    setQuery(userInput)

    if (userInput) {
      const suggestions = await fetchSuggestions(userInput)
      setFilteredSuggestions(suggestions)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    setShowSuggestions(false)
  }

  const handleShowSearch = () => {
    if (showSearchBar) {
      setShowSearchBar(false)
    } else {
      setShowSearchBar(true)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="relative w-full h-12 mx-auto flex items-center justify-end space-x-2">
      <div className={clsx('max-w-lg transition-transform duration-1000 ease-in transition-opacity', {
        'flex-1 w-full': showSearchBar,
        'opacity-0 w-0': !showSearchBar
      })}>
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        {showSuggestions && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
            {filteredSuggestions.length ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No suggestions found</li>
            )}
          </ul>
        )}
      </div>
      <IconButton
        icon={<FaSearch size={24} />}
        onClick={() => setShowSearchBar(prevState => !prevState)}
      />
    </div>
  )
}

export default AutocompleteSearchBar