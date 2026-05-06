'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionLayout({
  children,
  id,
  className,
  full = false,
  screen = false,
}: Readonly<{ children: ReactNode; id: string; className?: string; full?: boolean; screen?: boolean; }>) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      data-id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx("size-full flex flex-col items-center justify-center my-48 pb-24", {
        'py-24 mt-48': !full,
        'px-6 md:px-24': !screen,
        'max-w-7xl': !full && !screen
      }, className)}
    >
      {children}
    </motion.section>
  )
}
