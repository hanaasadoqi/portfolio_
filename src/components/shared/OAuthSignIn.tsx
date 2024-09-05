'use client'

import { supabase } from '@/utils/supabaseClient'
import { FaGithub } from 'react-icons/fa'
import { BaseButton } from '.'

export default function OAuthSignIn() {
  async function signInWithGitHub(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      })

      if (error) {
        console.error('Error during GitHub sign-in:', error.message)
        return
      }
    } catch (err) {
      console.error('Unexpected error during sign-in:', err)
    }
  }

  return (
    <BaseButton variant="primary" size="lg" onClick={signInWithGitHub}>
      <FaGithub className="mr-2" />
      Sign in with GitHub
    </BaseButton>
  )
}
