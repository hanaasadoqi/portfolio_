import { useCallback, useState } from 'react'

interface UiState {
  isFilterOpen: boolean
  isSortOpen: boolean
  isSearchOpen: boolean
}

const useUiState = () => {
  const [uiState, setUiState] = useState<UiState>({
    isFilterOpen: false,
    isSortOpen: false,
    isSearchOpen: false,
  })

  const toggleState = useCallback((key: keyof UiState) => {
    setUiState(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }, [])

  const closeAll = useCallback(() => {
    setUiState({
      isFilterOpen: false,
      isSortOpen: false,
      isSearchOpen: false,
    })
  }, [])

  return { uiState, toggleState, closeAll }
}

export default useUiState

// import { useCallback, useState } from 'react'

// interface UiState {
//   isFilterOpen: boolean
//   isSortOpen: boolean
//   isSearchOpen: boolean
// }

// const useUiState = (
//   initialState: UiState = {
//     isFilterOpen: false,
//     isSortOpen: false,
//     isSearchOpen: false,
//   }
// ) => {
//   const [uiState, setUiState] = useState<UiState>(initialState)

//   // Toggle the state for a given key
//   const toggleState = useCallback((key: keyof UiState) => {
//     setUiState(prevState => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }))
//   }, [])

//   // Close all states
//   const closeAll = useCallback(() => {
//     setUiState({
//       isFilterOpen: false,
//       isSortOpen: false,
//       isSearchOpen: false,
//     })
//   }, [])

//   // Handle an action with a delay
//   const handleActionWithDelay = useCallback(
//     (key: keyof UiState) => {
//       // closeAll() // Close all states first
//       // setTimeout(() => {
//       //   toggleState(key) // Then toggle the specific state
//       // }, 200)
//       toggleState(key) // Toggle the specific state
//     },
//     [toggleState]
//   )

//   // Reset all UI states to their initial values
//   // const reset = useCallback(() => {
//   //   setUiState(initialState)
//   // }, [initialState])

//   console.log('Current UI State:', uiState) // Debugging log

//   return { uiState, toggleState, closeAll, handleActionWithDelay }
// }

// export default useUiState
