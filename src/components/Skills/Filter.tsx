import React from "react";

interface FilterProps {
  filters: string[];
  setFilters: (filters: string[] | ((prev: string[]) => string[])) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const handleFilterChange = (filter: string) => {
    setFilters((prev: string[]) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  return (
    <div className="max-h-96 overflow-hidden transition-all duration-300">
      <div className="rounded-lg bg-gray-100 p-4 shadow-md dark:bg-gray-700">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-200">
          Filter Options
        </h3>
        <div className="space-y-2">
          {[
            "Frontend",
            "Backend",
            "Full-Stack",
            "Programming Language",
            "API",
          ].map((filter) => (
            <label key={filter} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4"
                onChange={() => handleFilterChange(filter)}
                checked={filters.includes(filter)}
              />
              <span className="text-gray-900 dark:text-gray-200">{filter}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filter);
