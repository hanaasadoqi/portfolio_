import { useEffect } from 'react'

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useClickOutside
