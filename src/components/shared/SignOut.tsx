'use client'

import { useRouter } from 'next/navigation'
import { BaseButton } from '.'
import { supabase } from '@/utils/supabaseClient'
export default function SignOut() {
  const router = useRouter()

  async function signOut() {
    await supabase.auth.signOut()

    router.refresh()
  }

  return (
    <BaseButton
      onClick={signOut}
      size="sm"
      variant="link"
      className="text-muted-foreground p-0"
    >
      Sign Out
    </BaseButton>
  )
}
