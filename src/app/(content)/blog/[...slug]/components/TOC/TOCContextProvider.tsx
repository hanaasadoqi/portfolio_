"use client"

import { TOCProvider } from "@/context/TOCContext"

export default function TOCContextProvider({ children }: { children: React.ReactNode; }) {
  return (
    <TOCProvider>
      {children}
    </TOCProvider>
  )
}