"use client"

import { useState } from 'react';

interface UseTabsReturn {
  activeTab: number;
  handleTab: (e: React.MouseEvent<any> | React.ChangeEvent<any>, index: number) => void;
}

export const useTabs = (initialTab = 0): UseTabsReturn => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTab = (e: React.MouseEvent<any> | React.ChangeEvent<any>, index: number) => {
    if (e) {
      e.preventDefault();
    }
    if (index === activeTab) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
  };

  return { activeTab, handleTab };
};
