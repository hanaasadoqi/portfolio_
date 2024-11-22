import { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export const createIndependentTabsContext = () => {
  const TabsContext = createContext<TabsContextType | undefined>(undefined);

  const TabsProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabsContext.Provider>
    );
  };

  const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
      throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
  };

  return { TabsProvider, useTabs };
};
