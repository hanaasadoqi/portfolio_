import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Fetch the session and user data
  const { data: { session }, error } = await supabase.auth.getSession()

  if (error) {
    console.error('Error fetching session:', error.message)
    return supabaseResponse
  }

  // If no session exists, create a temporary anonymous session
  if (!session) {
    let anonymousId = request.cookies.get('anonymous-session-id')?.value

    if (!anonymousId) {
      // Create a new anonymous session if it doesn't exist
      anonymousId = uuidv4()
      supabaseResponse.cookies.set('anonymous-session-id', anonymousId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // Set session for 24 hours
        path: '/',
      })
      console.log('Created new anonymous session:', anonymousId)
    } else {
      console.log('Existing anonymous session:', anonymousId)
    }

    // Proceed with anonymous user session handling
    return supabaseResponse
  }

  // If a session exists and it has expired, refresh it
  if (session.expires_at && session.expires_at < Math.floor(Date.now() / 1000)) {
    console.log('Access token expired, attempting to refresh session...')

    const { data: { session: refreshedSession }, error: refreshError } = await supabase.auth.refreshSession()

    if (refreshError || !refreshedSession) {
      console.error('Error refreshing session:', refreshError?.message)
      supabaseResponse.cookies.delete('sb-refresh-token')
      supabaseResponse.cookies.delete('sb-access-token')
      return supabaseResponse
    }

    // Update session tokens if successfully refreshed
    supabaseResponse.cookies.set('sb-access-token', refreshedSession.access_token, { httpOnly: true })
    supabaseResponse.cookies.set('sb-refresh-token', refreshedSession.refresh_token, { httpOnly: true })
  }

  // Return the response (whether for anonymous or authenticated users)
  return supabaseResponse
}
