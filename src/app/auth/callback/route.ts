import { NextResponse } from 'next/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from 'supabase/types'

// TODO: Configure for admin dashboard

export async function GET(request: Request) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const { data: { session }, error } = await supabase.auth.getSession()

  if (error) {
    console.error('Error getting session:', error.message)
    return NextResponse.redirect(new URL('/', request.url)) 
  }

  if (!session) {
    console.error('No session found')
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.redirect(new URL('/guestbook', request.url))
}
