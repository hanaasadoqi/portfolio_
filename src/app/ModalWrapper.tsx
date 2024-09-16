'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ModalWrapperProps {
  modal: React.ReactNode
}

export default function ModalWrapper({ modal }: ModalWrapperProps) {
  const pathname = usePathname()
  const [currentModal, setCurrentModal] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    setCurrentModal(modal)
  }, [pathname, modal])

  return (
    <>
      {currentModal && (
        <div className="relative inset-0 z-50">
          {currentModal}
        </div>
      )}
    </>
  )
}
