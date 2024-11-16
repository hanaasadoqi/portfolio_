'use client'

import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useDarkMode } from '@/context/styling/DarkModeContext'
import dynamic from 'next/dynamic'
import { useMermaid } from '@/context/MermaidContext'

const ReactTooltip = dynamic(
  () => import('react-tooltip').then(mod => mod.Tooltip),
  {
    ssr: false,
  }
)

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  function handleToggle() {
    toggleDarkMode();
  }
  return (
    <div id="dark-mode-toggle-container" className="">
      <motion.button
        id="dark-mode-toggle"
        onClick={handleToggle}
        data-tooltip-id="dark-mode-toggle-tooltip"
        data-tooltip-content="Toggle dark mode"
        className={"fixed bottom-4 right-4 z-[999px] flex items-center justify-center rounded-full bg-primary-700 p-2 shadow-md transition-colors duration-300 dark:bg-primary-100"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <FaSun key="sun-icon" className="text-primary-900" size={24} />
        ) : (
          <FaMoon key="moon-icon" className="text-primary-100" size={24} />
        )}
      </motion.button>
      <ReactTooltip id="dark-mode-toggle-tooltip" place="top" />
    </div>
  )
}

export default DarkModeToggle
