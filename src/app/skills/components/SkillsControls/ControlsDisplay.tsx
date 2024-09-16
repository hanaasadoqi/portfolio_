'use client'

import { IconButton } from '@/components/shared';
import React, { useState, memo, useRef, useCallback, useEffect } from 'react'
import { FaFilter, FaRedo, FaSearch, FaSort } from 'react-icons/fa';

type ControlOption = 'search' | 'sort' | 'filter' | null;

const LazySkillsSearch = React.lazy(() => import('./Search'));
const LazySort = React.lazy(() => import('./Sort'));
const LazyFilter = React.lazy(() => import('./Filter'));

const ControlsDisplay: React.FC = () => {
  const [activeControl, setActiveControl] = useState<ControlOption>(null);
  const displayRef = useRef<HTMLDivElement>(null);  // Use ref for the control display only

  // Toggles the control on and off
  const handleSetControl = (e: React.MouseEvent, control: ControlOption) => {
    e.stopPropagation()
    setActiveControl(prevControl => (prevControl && prevControl === control) ? null : control);
  };

  const renderControl = () => {
    switch (activeControl) {
      case 'search':
        return (
          <React.Suspense fallback={<div>Loading search...</div>}>
            <LazySkillsSearch />
          </React.Suspense>
        );
      case 'sort':
        return (
          <React.Suspense fallback={<div>Loading sort...</div>}>
            <LazySort
              options={[
                { label: 'Years', value: 'Years' },
                { label: 'Projects', value: 'Projects' },
                { label: 'Experience', value: 'Experience' }
              ]}
            />
          </React.Suspense>
        );
      case 'filter':
        return (
          <React.Suspense fallback={<div>Loading filter...</div>}>
            <LazyFilter />
          </React.Suspense>
        );
      default:
        return null;
    }
  };

  const resetControls = useCallback(() => {
    setActiveControl(null);
    window.history.pushState(null, '', `/`);  // Reset the URL without reloading the page
  }, []);

  // Handle clicks outside the displayRef element
  // const handleClickOutside = useCallback((e: MouseEvent) => {
  //   if (displayRef.current && !displayRef.current.contains(e.target as Node)) {
  //     console.log('triggering')
  //     resetControls();  // Close the control if clicking outside
  //   }
  //   console.log(e.target, displayRef)
  // }, [resetControls]);

  // Adding event listeners to close the control when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        resetControls();
      }
    };

    // document.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscape);

    return () => {
      // document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [resetControls]);

  return (
    <div className="flex md:absolute bottom-0 right-0 flex flex-col md:flex-row items-end justify-center space-x-4">
      {/* Display the active control */}
      <div className="my-6 md:my-12" ref={displayRef}>
        {renderControl()}
      </div>

      {/* Control buttons */}
      <div className="mb-4 space-x-2 flex items-center justify-center">
        {['filter', 'sort', 'search'].map(control => (
          <IconButton
            key={control}
            size="md"
            icon={
              control === 'filter' ? <FaFilter /> :
                control === 'sort' ? <FaSort /> :
                  <FaSearch />
            }
            onClick={(e) => handleSetControl(e, control as ControlOption)}
            ariaLabel={`Toggle ${control}`}
            variant={activeControl === control ? 'outline' : 'icon'}
            className={activeControl === control ? 'active p-2 active:text-white' : 'p-2 active:text-white'}
          />
        ))}

        {/* Reset button */}
        <IconButton
          size="md"
          icon={<FaRedo />}
          onClick={resetControls}
          ariaLabel="Reset filters and sort"
          variant="danger"
          iconClassName="active:text-white"
          className="p-2 active:text-white"
        />
      </div>
    </div>
  );
};

export default memo(ControlsDisplay);
