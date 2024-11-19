"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx'

import { IconButton } from '@/components';
import { BiSolidBookContent, BiBookContent } from 'react-icons/bi';

const TOC = ({ children }: { children: React.ReactNode; }) => {
  const [showTOC, setShowTOC] = useState(false)
  const sideRef = useRef(null)

  const toggleTOC = () => {
    setShowTOC(prev => !prev)
  }


  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (sideRef.current && !(sideRef.current as Node).contains(event.target as Node)) {
      setShowTOC(false);
    }
  }, []);


  useEffect(() => {
    if (showTOC) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showTOC, handleClickOutside]);

  return (
    <aside
      className={clsx(
        "z-50 fixed top-0 right-0 h-screen bg-gray-100 dark:bg-gray-900 border-x border-gray-200 dark:border-gray-800 flex flex-col shadow-inner rounded-r-lg transition-width duration-300",
        { 'w-0': !showTOC, 'w-64': showTOC },
      )}
      ref={sideRef}
    >
      <IconButton
        className="absolute top-4 right-4 z-[9999]"
        ariaLabel={showTOC ? 'Hide Table of Contents' : 'Show Table of Contents'}
        icon={showTOC ? <BiSolidBookContent size={24} /> : <BiBookContent size={24} />}
        onClick={toggleTOC}
      />
      <div className="relative w-full flex flex-col py-2 md:p-4 overflow-y-auto overscroll-contain">
        {children}
      </div>
    </aside>
  );
};

export default TOC;


