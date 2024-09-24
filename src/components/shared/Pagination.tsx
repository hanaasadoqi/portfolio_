import React from 'react';
import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      className="mt-8 flex flex-wrap items-center justify-center"
      aria-label="Pagination Navigation"
    >
      {pages.map(page => (
        <button
          key={page}
          className={clsx(
            'm-1 rounded-full flex items-center justify-center px-3 py-1 text-sm transition-colors',
            {
              'bg-primary-500 text-white': currentPage === page,
              'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600':
                currentPage !== page,
            }
          )}
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default React.memo(Pagination);
