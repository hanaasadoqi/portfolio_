import React from 'react'
import { useSearchParams } from 'next/navigation'

export const useURLSearchParams = () => {
  const searchParams = useSearchParams()

  const updateSearchParams = (type: string, term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(type, term)
    } else {
      params.delete(type)
    }

    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return { updateSearchParams }
}
