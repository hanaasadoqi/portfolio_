'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DarkModeProvider } from './DarkModeContext';
type Theme = 'app-wide' | 'writing' | 'projects';

interface ThemeContextProps {
  siteTheme: Theme;
  setSiteTheme: (theme: Theme) => void;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [siteTheme, setSiteTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('siteTheme') as Theme;
      return savedTheme || 'app-wide';
    }
    return 'app-wide';
  });

  const pathname = usePathname();

  const updateTheme = (theme: Theme) => {
    setSiteTheme(theme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('siteTheme', theme);
    }
  };

  useEffect(() => {
    if (pathname.startsWith('/blog') && siteTheme !== 'writing') {
      updateTheme('writing');
    } else if (pathname.startsWith('/projects') && siteTheme !== 'projects') {
      updateTheme('projects');
    } else if (!pathname.startsWith('/blog') && !pathname.startsWith('/projects') && siteTheme !== 'app-wide') {
      updateTheme('app-wide');
    }
  }, [pathname, siteTheme]);

  return (
    <ThemeContext.Provider value={{ siteTheme, setSiteTheme, updateTheme }}>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </ThemeContext.Provider>
  );
};

export const useSiteTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSiteTheme must be used within a ThemeProvider');
  }
  return context;
};