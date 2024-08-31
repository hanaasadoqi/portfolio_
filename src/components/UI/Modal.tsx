import React, { useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'
import { IconButton, IconLibrary } from '../shared'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  // Manage body overflow and focus on open/close
  useEffect(() => {
    if (isOpen) {
      // Save the last focused element
      lastFocusedElement.current = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'

      // Set focus to the modal or the first focusable element within it
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      focusableElements?.[0]?.focus()
    } else {
      document.body.style.overflow = 'unset'
      // Restore focus to the last focused element
      lastFocusedElement.current?.focus()
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close modal on outside click
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  // Trap focus inside the modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'Tab' && modalRef.current) {
        const focusableElements =
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        } else if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleOutsideClick}
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={clsx(
          'relative mx-4 max-h-[80vh] w-full max-w-3xl transform-gpu overflow-hidden rounded-2xl bg-secondary-50 p-8 shadow-xl transition-transform',
          'dark:bg-secondary-800'
        )}
        onClick={e => e.stopPropagation()}
      >
        {/* Scrollable content container */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          <IconButton
            aria-label="Close modal"
            icon={<IconLibrary.close />}
            variant="outline"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-primary-400 dark:hover:bg-gray-600 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
