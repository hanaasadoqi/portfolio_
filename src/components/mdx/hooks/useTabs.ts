"use client"

import { useState } from 'react';

interface UseTabsReturn {
  activeTab: number;
  handleTab: (index: number, e?: React.MouseEvent<any> | React.ChangeEvent<any>) => void;
}

export const useTabs = (initialTab = 0): UseTabsReturn => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTab = (index: number , e?: React.MouseEvent<any> | React.ChangeEvent<any>) => {
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
