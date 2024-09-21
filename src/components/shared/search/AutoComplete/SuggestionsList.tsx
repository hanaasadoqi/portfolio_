

// export interface Suggestion {
//   title: string;
//   slug: string | null;
// }


// const SuggestionsList: React.FC<{
//   suggestions: Suggestion[];
//   onSuggestionClick: (suggestion: Suggestion) => void;
// }> = ({ suggestions, onSuggestionClick }) => (
//   <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
//     {suggestions.length ? (
//       suggestions.map((suggestion, index) => (
//         <li
//           key={index}
//           className="p-2 hover:bg-gray-100 cursor-pointer"
//           onClick={() => onSuggestionClick(suggestion)}
//           role="option"
//           aria-selected="false"
//         >
//           {suggestion.title}
//         </li>
//       ))
//     ) : (
//       <li className="p-2 text-gray-500">No suggestions found</li>
//     )}
//   </ul>
// );

// export default SuggestionsList;

// 'use client';

// import React, { KeyboardEvent } from 'react';
// import clsx from 'clsx';
// import { Suggestion } from '@/types';

// interface SuggestionsListProps {
//   suggestions: Suggestion[];
//   onSuggestionClick: (suggestion: Suggestion) => void;
//   activeSuggestionIndex: number;
//   setActiveSuggestionIndex: React.Dispatch<React.SetStateAction<number>>;
// }

// const SuggestionsList: React.FC<SuggestionsListProps> = ({
//   suggestions,
//   onSuggestionClick,
//   activeSuggestionIndex,
//   setActiveSuggestionIndex,
// }) => {
//   if (suggestions.length === 0) {
//     return (
//       <ul
//         className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10"
//         role="listbox"
//         aria-label="No suggestions available"
//       >
//         <li className="p-2 text-gray-500">No suggestions found</li>
//       </ul>
//     );
//   }

//   const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       setActiveSuggestionIndex((prev) => (prev + 1) % suggestions.length);
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       setActiveSuggestionIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
//     } else if (e.key === 'Enter') {
//       e.preventDefault();
//       if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
//         onSuggestionClick(suggestions[activeSuggestionIndex]);
//       }
//     }
//   };

//   return (
//     <ul
//       className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 max-h-60 overflow-y-auto"
//       role="listbox"
//       aria-label="Search suggestions"
//       onKeyDown={handleKeyDown}
//       tabIndex={-1} // Make the list focusable
//     >
//       {suggestions.map((suggestion, index) => (
//         <li
//           key={suggestion.slug || index}
//           className={clsx(
//             'p-2 cursor-pointer focus:outline-none',
//             index === activeSuggestionIndex ? 'bg-gray-100' : 'hover:bg-gray-100'
//           )}
//           onClick={() => onSuggestionClick(suggestion)}
//           role="option"
//           aria-selected={index === activeSuggestionIndex}
//           tabIndex={0}
//           onMouseEnter={() => setActiveSuggestionIndex(index)}
//           onMouseLeave={() => setActiveSuggestionIndex(-1)}
//         >
//           {suggestion.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default React.memo(SuggestionsList);
// SuggestionsList.tsx

'use client';

import React, { KeyboardEvent } from 'react';
import clsx from 'clsx';
import { Suggestion } from '@/types';

interface SuggestionsListProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  activeSuggestionIndex: number;
  setActiveSuggestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  onSuggestionClick,
  activeSuggestionIndex,
  setActiveSuggestionIndex,
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
      className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 max-h-60 overflow-y-auto"
      role="listbox"
      aria-label="Search suggestions"
      onKeyDown={handleKeyDown}
      tabIndex={-1} // Make the list focusable
    >
      {suggestions.map((suggestion, index) => (
        <li
          key={suggestion.slug || index}
          className={clsx(
            'p-2 cursor-pointer focus:outline-none',
            index === activeSuggestionIndex ? 'bg-gray-100' : 'hover:bg-gray-100'
          )}
          onClick={() => onSuggestionClick(suggestion)}
          role="option"
          aria-selected={index === activeSuggestionIndex}
          tabIndex={0}
          onMouseEnter={() => setActiveSuggestionIndex(index)}
          onMouseLeave={() => setActiveSuggestionIndex(-1)}
        >
          {suggestion.title}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SuggestionsList);
