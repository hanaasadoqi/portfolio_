'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Tooltip } from 'react-tooltip'
import { motion, useAnimation } from 'framer-motion'
import clsx from 'clsx'
import GuestbookTrigger from './Guestbook/GuestbookTrigger'

const TableOfContents = dynamic(() => import('@/components/TableOfContents'), {
  ssr: false,
})

const DarkModeToggle = dynamic(
  () => import('@/components/shared/DarkModeToggle/DarkModeToggle'),
  { ssr: false }
)

const Ribbon: React.FC = () => {
  const [isRibbonOpen, setIsRibbonOpen] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: isRibbonOpen ? 1 : 0 })
  }, [isRibbonOpen, controls])

  return (
    <header
      id="nav"
      className="pointer-events-auto absolute right-0 top-0 h-screen w-1/5 bg-transparent"
      onMouseLeave={() => setIsRibbonOpen(false)}
      onMouseEnter={() => setIsRibbonOpen(true)}
    >
      <motion.div
        id="ribbon"
        className={clsx(
          'fixed bottom-0 right-0 top-0 z-40 bg-transparent text-white transition-all duration-300 ease-in-out',
          { 'w-12': isRibbonOpen, 'w-4': !isRibbonOpen }
        )}
        data-tooltip-id="ribbon-tooltip"
        animate={{ width: isRibbonOpen ? 48 : 16 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex h-screen flex-col items-center justify-start p-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="mt-4"
          >
            <TableOfContents />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="mt-4"
          >
            <GuestbookTrigger />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="mt-4"
          >
            <DarkModeToggle />
          </motion.div>
        </div>

        {!isRibbonOpen && (
          <Tooltip
            id="ribbon-tooltip"
            place="left"
            delayShow={500}
            className="rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-2 text-white shadow-lg"
            content="Explore the TOC and toggle Dark Mode!"
          />
        )}
      </motion.div>
    </header>
  )
}

export default Ribbon
