"use client"

import React, { memo } from 'react'
import clsx from 'clsx'
import { IconButton } from '../shared'
import { ArrowLeftIcon, ArrowRightIcon } from './Arrow'

const ScrollButton: React.FC<{
  direction: 'left' | 'right'
  onClick?: () => void
  visible: boolean
  className?: string
}> = ({ direction, onClick, visible, className }) => {
  if (!visible) return null

  return (
    <IconButton
      onClick={onClick}
      className={clsx(
        'absolute -bottom-12 transform md:bottom-auto md:top-1/2 md:-translate-y-1/2',
        'z-20 rounded-xl px-2 py-3 shadow-lg transition duration-300 ease-in-out md:px-3 md:py-2', {
        'left-0': direction === "left",
        'right-0': direction === "right"
      },
        className
      )}
      aria-label={`Scroll ${direction}`}
      icon={direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      variant="secondary"
      iconOnly
    />
  )
}

export default memo(ScrollButton)
