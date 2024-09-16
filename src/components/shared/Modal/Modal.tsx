'use client'

import React, { useRef, useEffect } from 'react'
// import FocusTrap from 'focus-trap-react'
import { useRouter } from 'next/navigation'
interface ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
    // const handleKeyDown = (event: KeyboardEvent) => {
    //   if (event.key === 'Escape') {
    //     onClose()
    //   }
    // }

    // document.addEventListener('keydown', handleKeyDown)
    // document.addEventListener('mousedown', handleClickOutside)

    // if (closeButtonRef.current) {
    //   closeButtonRef.current.focus()
    // }

    // return () => {
    //   document.removeEventListener('keydown', handleKeyDown)
    //   document.removeEventListener('mousedown', handleClickOutside)
    // }
  }, [dialogRef])

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  // }, [isOpen])

  // if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 shadow-lg transition-opacity duration-300 ease-in-out"
    >
      {/* <FocusTrap> */}
      <dialog
        ref={dialogRef}
        className="relative w-full max-w-lg translate-y-0 transform rounded-2xl border border-gray-200 bg-white p-8 opacity-100 shadow-xl transition-transform duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 sm:translate-y-4 sm:opacity-100"
      >
        <button
          ref={closeButtonRef}
          onClick={() => router.back()}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800"
          aria-label="Close Modal"
        >
          &times;
        </button>
        {children}
      </dialog>
      {/* </FocusTrap> */}
    </div>
  )
}

export default Modal
