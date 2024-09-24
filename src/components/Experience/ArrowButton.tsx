import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';
import { IconButton } from '@/components';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
  hidden: boolean;
  className?: string;
  ariaLabel: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  direction,
  hidden,
  className,
  ariaLabel,
}) => {
  return (
    <IconButton
      onClick={onClick}
      className={clsx(
        'absolute z-10 rounded-full p-2 text-white shadow-lg transition-opacity duration-300 ease-in-out bg-primary-500 hover:bg-primary-400 active:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600 dark:active:bg-primary-800',
        direction === 'left' ? 'left-2' : 'right-2',
        hidden && 'opacity-0 pointer-events-none',
        className
      )}
      aria-label={ariaLabel}
      icon={direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    />
  );
};
