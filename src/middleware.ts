import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const supabase = createRouteHandlerClient({
    cookies: () => cookies(),
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if (!user) {
  //   return;
  // }

  return response
}

export const config = {
  matcher: ['/guestbook'],
}
