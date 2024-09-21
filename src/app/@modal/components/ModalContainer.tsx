'use client'

import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useRef, useState, useCallback, useEffect, memo } from "react"
import { createPortal } from "react-dom"
import ModalHeader from "./ModalHeader"

interface ModalContainerProps {
  title?: string
  icon?: React.ReactNode
  children: React.ReactNode
  isArticle?: boolean
  isProject?: boolean
  isSkill?: boolean
  showSkills?: boolean
  handleSkills?: () => void
}

const ModalContainer: React.FC<ModalContainerProps> = ({ showSkills, handleSkills, title, icon, children, isProject = false, isSkill = true, isArticle = false }) => {
  const router = useRouter()
  const modalRef = useRef<HTMLDialogElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(true)


  const closeModal = useCallback(() => {
    modalRef.current?.close()
    setIsOpen(false)
    router.back()
  }, [router])

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal()
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''

    }
  }, [closeModal])

  return isOpen && createPortal(
    <dialog
      ref={modalRef}
      className="max-w-7xl w-full h-full m-auto fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
    >
      <div className="h-full w-full flex items-center justify-center">
        <div
          className={clsx("bg-white/50 dark:bg-black/50 overflow-y-auto max-h-full", {
            "md:max-w-5xl": isProject,
            "md:max-w-4xl": isSkill,
            "md:max-w-6xl": isArticle,
          })}
          ref={contentRef}
        >
          <ModalHeader
            icon={icon}
            title={title}
            onClose={closeModal}
            isProject={isProject}
            handleSkills={handleSkills}
            showSkills={showSkills}
          />
          {children}
        </div>
      </div>
    </dialog>,
    document.body
  )
}

export default memo(ModalContainer)