import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from './types'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing environment variables for Supabase URL or Anon Key')
  }

  return createServerComponentClient<Database>({
    cookies,
  }, {
    supabaseUrl,
    supabaseKey: supabaseAnonKey,
  })
}
