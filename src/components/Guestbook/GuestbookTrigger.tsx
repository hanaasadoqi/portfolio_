'use client'

import React, { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { IconButton, IconLibrary, ParagraphSkeleton } from '../shared'
import Modal from '../UI/Modal'
import { useAuth } from '@/context/AuthContext'
import ErrorBoundary from '../shared/ErrorBoundary'
import ErrorFallback from '../shared/ErrorFallback'

const GuestbookModalContent = dynamic(() => import('./GuestbookModalContent'), {
  ssr: false,
})

const GuestbookTrigger: React.FC = () => {
  const [isGuestbookOpen, setIsGuestbookOpen] = useState<boolean>(false)
  const { loading } = useAuth()

  if (loading) return <ParagraphSkeleton count={5} />

  return (
    <>
      <IconButton
        icon={<IconLibrary.ClipboardCheck />}
        variant="outline"
        onClick={() => setIsGuestbookOpen(true)}
      />
      <Modal
        size="lg"
        isOpen={isGuestbookOpen}
        onClose={() => setIsGuestbookOpen(false)}
      >
        <ErrorBoundary errorComponent={ErrorFallback}>
          <GuestbookModalContent />
        </ErrorBoundary>
      </Modal>
    </>
  )
}

export default GuestbookTrigger
