'use client'

'use client'

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'

interface DarkModeContextProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined)

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    // Check localStorage on client side
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Fallback or default behavior if no saved theme is present
      setIsDarkMode(false) // or true, depending on your default preference
    }
  }, [])

  useEffect(() => {
    // Update localStorage and class on document
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
