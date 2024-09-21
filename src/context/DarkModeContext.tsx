'use client'

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'

interface DarkModeContextProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined)

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize dark mode based on localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      } else {
        // Use system preference for the first load if no theme is saved
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    }
    return false // Default to light mode if SSR or no theme preference
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme)

  // Effect to update localStorage and HTML class when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', isDarkMode)
    }
  }, [isDarkMode])

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode)
  }, [])

  const value = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode, toggleDarkMode])

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
