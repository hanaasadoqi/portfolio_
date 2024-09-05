export interface GithubUser {
  id: string
  email?: string
  isAuthenticated: boolean
  isAdmin: boolean
  isSignedIn: boolean
  displayName: string
  username: string
  avatarUrl?: string
  profile?: string
}