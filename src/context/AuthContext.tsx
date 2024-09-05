'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { supabase } from '@/utils/supabaseClient'
import { GithubUser } from '@/types/user'
import { User } from '@supabase/supabase-js'

// TODO: Clean up code and finalize types

// Define the AuthContextType interface
interface AuthContextType {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
}

// Create the AuthContext with a default value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Define the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error fetching session:', error.message)
        setLoading(false)
        return
      }

      if (data.session && data.session.user) {
        // Check if session and user exist
        // const userMetadata = data.session.user.user_metadata || {} // Ensure user_metadata is defined

        // console.log('User authenticated:', userMetadata)

        // // Explicitly create a new user object with expected properties
        // const newUser: GithubUser = {
        //   id: data.session.user.id,
        //   email: data.session.user.email,
        //   isAdmin: false,
        //   isAuthenticated: true,
        //   isSignedIn: true,
        //   username: userMetadata.preferred_username || '', // Default to empty string if undefined
        //   displayName: userMetadata.full_name || '', // Default to empty string if undefined
        //   avatarUrl: userMetadata.avatar_url, // Uncomment if you use avatarUrl
        //   // profile: `https://github.com/${userMetadata.preferred_username}`, // Construct profile URL
        // }

        setUser(data.session.user || null) // Update user state
      } else {
        setUser(null) // Handle anonymous user case
      }

      setLoading(false)
    }

    checkSession()

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // if (session?.user) {
        // // Check if user exists
        // const userMetadata = session.user.user_metadata || {} // Ensure user_metadata is defined

        // console.log('User authenticated:', userMetadata)

        // // Explicitly create a new user object with expected properties
        // const newUser: GithubUser = {
        //   id: session.user.id,
        //   email: session.user.email,
        //   isAdmin: false,
        //   isAuthenticated: true,
        //   isSignedIn: true,
        //   username: userMetadata.preferred_username || '',
        //   displayName: userMetadata.full_name || '',
        //   avatarUrl: userMetadata.avatar_url, // Uncomment if you use avatarUrl
        //   // profile: `https://github.com/${userMetadata.preferred_username}`, // Construct profile URL
        // }

        setUser(session?.user || null) // Update user state
        // } else {
        //   setUser(null) // Set user to null for anonymous users
        // }
      }
    )

    // Cleanup subscription on component unmount
    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, []) // Add necessary dependencies if any used outside this effect

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
