import { useState, useCallback } from 'react'

const useToggle = (
  initialState = false
): [boolean, () => void, () => void, () => void] => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => {
    setState(prev => !prev)
  }, [])

  const reset = useCallback(() => {
    setState(initialState)
  }, [initialState])

  const close = useCallback(() => {
    setState(false)
  }, [])

  return [state, toggle, reset, close]
}

export default useToggle
