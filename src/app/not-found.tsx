'use client'

import { LinkButton, BaseButton } from '@/components/shared'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center flex-wrap">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <LinkButton href="/" size="lg" >Return Home</LinkButton>
        <BaseButton size="lg" onClick={() => router.back()}>Go Back</BaseButton>
      </div>
    </div>
  )
}