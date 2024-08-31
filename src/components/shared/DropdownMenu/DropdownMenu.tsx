'use client'

import React, { useEffect, useRef, useState } from 'react'
export interface DropdownMenuItemProps {
  label: string
  icon?: React.ReactElement | React.ReactElement<SVGSVGElement>
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface DropdownMenuProps {
  items: DropdownMenuItemProps[]
  menuLabel: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  menuLabel = 'Open Menu',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(prev => !prev)

  const handleItemClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  ) => {
    onClick(event)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isOpen && menuButtonRef.current) {
      menuButtonRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.focus()
    }
  }, [isOpen])

  const ariaExpanded = {
    'aria-expanded': isOpen,
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleDropdown()
    }
  }

  return (
    <div
      className="relative inline-block text-left"
      aria-haspopup="true"
      {...ariaExpanded}
    >
      <button
        ref={menuButtonRef}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className="rounded bg-blue-500 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-controls="dropdown-menu"
        {...ariaExpanded}
      >
        {menuLabel}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          id="dropdown-menu"
          role="menu"
          className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
          tabIndex={-1}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={event => handleItemClick(event, item.onClick)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabIndex={0}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
