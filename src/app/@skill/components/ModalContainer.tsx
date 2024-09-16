'use client'

import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useRef, useState, useCallback, useEffect, memo } from "react"
import { createPortal } from "react-dom"
import ModalHeader from "./ModalHeader"

interface ModalContainerProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  isProject?: boolean
  isSkill?: boolean
  showSkills?: boolean
  handleSkills?: () => void
}

const ModalContainer: React.FC<ModalContainerProps> = ({ showSkills, handleSkills, title, icon, children, isProject = false, isSkill = true }) => {
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

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [closeModal])

  return isOpen && createPortal(
    <dialog
      ref={modalRef}
      className="w-full h-full m-auto fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
    >
      <div className="h-full w-full flex items-center justify-center ">
        <div className={clsx("h-full lg:h-5/6 w-full bg-white", {
          "md:max-w-7xl": isProject,
          "md:max-w-4xl": isSkill
        })} ref={contentRef}>
          <ModalHeader icon={icon} title={title} onClose={closeModal} isProject={isProject} handleSkills={handleSkills} showSkills={showSkills} />
          {children}
        </div>
      </div>
    </dialog>,
    document.body
  )
}

export default memo(ModalContainer)