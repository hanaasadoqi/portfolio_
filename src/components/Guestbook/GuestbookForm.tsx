'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

interface GuestbookFormProps {
  onNewEntry: (entry: { name: string; message: string }) => Promise<void>
}

const GuestbookForm: React.FC<GuestbookFormProps> = ({ onNewEntry }) => {
  const { user } = useAuth()
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await onNewEntry({ name, message })
      setMessage('')
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {!user && (
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="rounded border p-2"
            required
          />
        )}
        <textarea
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="rounded border p-2"
          required
        />
        <button
          type="submit"
          className="rounded bg-blue-500 p-2 text-white"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  )
}

export default GuestbookForm
