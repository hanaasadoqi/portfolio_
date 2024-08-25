import React from "react";

interface SortProps {
  sortOption: string | null;
  setSortOption: (option: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortOption, setSortOption }) => {
  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="max-h-96 overflow-hidden transition-all duration-300">
      <div className="rounded-lg bg-gray-100 p-4 shadow-md dark:bg-gray-700">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-200">
          Sort Options
        </h3>
        <div className="space-y-2">
          {["Experience", "Projects", "Years"].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="sort"
                className="form-radio h-4 w-4"
                onChange={() => handleSortChange(option)}
                checked={sortOption === option}
              />
              <span className="text-gray-900 dark:text-gray-200">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sort);
