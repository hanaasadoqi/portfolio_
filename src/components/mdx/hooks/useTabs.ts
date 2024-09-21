import { useState } from 'react';

interface UseTabsReturn {
  activeTab: number;
  handleTab: (index: number) => void;
}

export const useTabs = (initialTab = 0): UseTabsReturn => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTab = (index: number) => {
    if (index === activeTab) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
  };

  return { activeTab, handleTab };
};
