"use client"

import { useEffect, useState } from 'react'
import { IconButton } from '@/components'
import { IoMdClose } from 'react-icons/io'
import { FaPen } from 'react-icons/fa'

interface ModalProps {
  onClose?: () => void
  children: React.ReactNode
}

const Modal = ({ onClose, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      // After rendering the diagram, apply hover effects to each node
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Clean up when the modal closes
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(!isOpen);

    if (onClose) {
      onClose()
    }
  }

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 h-full w-full">
      <div className="relative rounded-lg p-6 max-w-7xl w-full max-h-[90%] overflow-hidden h-full bg-black">
        <IconButton
          className="fixed top-2 right-2"
          onClick={handleClose}
          icon={<IoMdClose />}
          variant="ghost"
        />
        <div className="relative w-full h-full overflow-y-auto p-2">
          {children}
        </div>
      </div>
    </div>

  ) :
    (
      <IconButton
        icon={<FaPen />}
        tooltip="Try"
        tooltipId="code-tooltip"
        tooltipPlace="bottom"
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="sm"
      />
    )
}

export default Modal;
