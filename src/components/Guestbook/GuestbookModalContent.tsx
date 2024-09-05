'use client'

import React, { useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/utils/supabaseClient'
import ErrorBoundary from '../shared/ErrorBoundary'
import ErrorFallback from '../shared/ErrorFallback'
import ParagraphSkeleton from '../shared/ParagraphSkeleton'
import { IconButton, IconLibrary, OAuthSignIn, SignOut } from '../shared'

const DynamicGuestbookForm = dynamic(() => import('./GuestbookForm'), {
  ssr: false,
})
const DynamicGuestbookList = dynamic(() => import('./GuestbookList'), {
  suspense: true,
})

const GuestbookModalContent: React.FC = () => {
  const { user, loading } = useAuth()
  const [entries, setEntries] = useState<any[]>([])
  const [fetching, setFetching] = useState<boolean>(true)
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

  useEffect(() => {
    if (loading) return

    const fetchGuestbookData = async () => {
      const { data, error } = await supabase
        .from('Guestbook')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching guestbook entries:', error)
      } else {
        setEntries(data)
      }
      setFetching(false)
    }

    fetchGuestbookData()
  }, [loading])

  const handleNewEntry = async (entry: { name: string; message: string }) => {
    try {
      const entryObject = {
        user_id: user?.id || null,
        name: entry.name || user?.user_metadata.preferred_username,
        message: entry.message,
        avatar: user?.user_metadata.avatar_url || null,
      }
      const { data, error } = await supabase
        .from('Guestbook')
        .insert([entryObject])
        .select()
      if (error) throw new Error(error.message)
      if (data) {
        setEntries(prevEntries => [data[0], ...prevEntries])
      }
    } catch (err) {
      console.error('Error adding entry:', err)
      alert('Failed to add entry. Please try again.')
    }
  }

  if (loading || fetching) return <p>Loading...</p>

  return (
    <div className="p-4">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Welcome to My Guestbook!</h2>
        {user ? <SignOut /> : <OAuthSignIn />}
      </div>

      <div className="flex flex-col gap-4">
        {/* Form Accordion */}
        <div className="p-8">
          <p
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="cursor-pointer text-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-400"
          >
            {"I'd love to hear from you!"}
          </p>
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              isFormOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
            }`}
          >
            {isFormOpen && <DynamicGuestbookForm onNewEntry={handleNewEntry} />}
          </div>
        </div>
        {/* Guestbook List */}
        <ErrorBoundary errorComponent={ErrorFallback}>
          <Suspense fallback={<ParagraphSkeleton count={5} />}>
            <DynamicGuestbookList entries={entries} />
          </Suspense>
        </ErrorBoundary>
      </div>
      {/* FAB Button to trigger form */}
      <div className="fixed bottom-5 right-5">
        <IconButton
          onClick={() => setIsFormOpen(true)}
          variant="primary"
          icon={<IconLibrary.plus />}
        />
      </div>
    </div>
  )
}

export default GuestbookModalContent
