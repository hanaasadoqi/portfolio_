// HighlightContext.tsx
import React, { createContext, useContext, useReducer, useMemo, ReactNode, Dispatch, useState } from 'react';

// Separate context for activeHighlight
interface HighlightState {
  activeHighlight: number | null;
}

type HighlightAction = { type: 'SET_ACTIVE_HIGHLIGHT'; payload: number | null };

interface HighlightContextProps extends HighlightState {
  dispatch: Dispatch<HighlightAction>;
}

const HighlightContext = createContext<HighlightContextProps | undefined>(undefined);

const highlightReducer = (state: HighlightState, action: HighlightAction): HighlightState => {
  switch (action.type) {
    case 'SET_ACTIVE_HIGHLIGHT':
      return { ...state, activeHighlight: action.payload };
    default:
      return state;
  }
};

export const HighlightProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(highlightReducer, { activeHighlight: null });

  const value = useMemo(() => ({ ...state, dispatch }), [state.activeHighlight]);

  return <HighlightContext.Provider value={value}>{children}</HighlightContext.Provider>;
};

export const useHighlight = () => {
  const context = useContext(HighlightContext);
  if (!context) {
    throw new Error('useHighlight must be used within a HighlightProvider');
  }
  return context;
};

// // SidePanelContext.tsx
// import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidePanelContextProps {
  isSidePanelOpen: boolean;
  toggleSidePanel: (open: boolean) => void;
}

const SidePanelContext = createContext<SidePanelContextProps | undefined>(undefined);

export const SidePanelProvider = ({ children }: { children: ReactNode }) => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = (open: boolean) => setSidePanelOpen(open);

  const value = useMemo(() => ({ isSidePanelOpen, toggleSidePanel }), [isSidePanelOpen]);

  return <SidePanelContext.Provider value={value}>{children}</SidePanelContext.Provider>;
};

export const useSidePanel = () => {
  const context = useContext(SidePanelContext);
  if (!context) {
    throw new Error('useSidePanel must be used within a SidePanelProvider');
  }
  return context;
};



// // HighlightContext.tsx
// "use client"

// import React, { createContext, useReducer, useRef, useContext, ReactNode, Dispatch } from 'react';

// // Define the shape of our state
// interface HighlightState {
//   activeHighlight: number | null;
//   isSidePanelOpen: boolean;
// }

// // Define action types
// type HighlightAction =
//   | { type: 'SET_ACTIVE_HIGHLIGHT'; payload: number | null }
//   | { type: 'TOGGLE_SIDE_PANEL'; payload: boolean };

// // Define the context properties
// interface HighlightContextProps extends HighlightState {
//   dispatch: Dispatch<HighlightAction>;
//   codeRef?: React.RefObject<HTMLDivElement>;
//   sideRef?: React.RefObject<HTMLDivElement>;
// }

// // Initialize the context with default values
// const HighlightContext = createContext<HighlightContextProps | undefined>(undefined);

// // Reducer function to manage state transitions
// const highlightReducer = (state: HighlightState, action: HighlightAction): HighlightState => {
//   switch (action.type) {
//     case 'SET_ACTIVE_HIGHLIGHT':
//       return {
//         ...state,
//         activeHighlight: action.payload,
//         isSidePanelOpen: action.payload !== null ? true : state.isSidePanelOpen,
//       };
//     case 'TOGGLE_SIDE_PANEL':
//       return {
//         ...state,
//         isSidePanelOpen: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Provider component
// const HighlightProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(highlightReducer, {
//     activeHighlight: null,
//     isSidePanelOpen: false,
//   });

//   const codeRef = useRef<HTMLDivElement>(null);
//   const sideRef = useRef<HTMLDivElement>(null)

//   const value = React.useMemo(
//     () => ({ ...state, dispatch, codeRef, sideRef }),
//     [state.activeHighlight, state.isSidePanelOpen] // Only re-create the value when relevant state changes
//   );


//   return (
//     <HighlightContext.Provider value={value}>
//       {children}
//     </HighlightContext.Provider>
//   );
// };

// // Custom hook for easy access to the context
// const useHighlight = () => {
//   const context = useContext(HighlightContext);
//   if (!context) {
//     throw new Error('useHighlight must be used within a HighlightProvider');
//   }
//   return context;
// };

// export { HighlightProvider, useHighlight };






















// import React, { createContext, useState, useCallback, MutableRefObject, useRef } from 'react';
// // HighlightContext.tsx

// import {
//   useReducer,

// } from 'react';

// interface State {
//   activeHighlight: number | null;
//   isSidePanelOpen: boolean;
// }

// const initialState: State = {
//   activeHighlight: null,
//   isSidePanelOpen: false,
// };

// type Action =
//   | {
//     type: 'TOGGLE_HIGHLIGHT';
//     highlightId: number | null;
//     ref?: MutableRefObject<HTMLElement | null>;
//     codeRef: MutableRefObject<HTMLDivElement | null>;
//   };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'TOGGLE_HIGHLIGHT': {
//       const { highlightId, ref, codeRef } = action;
//       const isSameHighlight = state.activeHighlight === highlightId;
//       let isSidePanelOpen = state.isSidePanelOpen;

//       if (state.isSidePanelOpen) {
//         if (isSameHighlight) {
//           // Close side panel if the same highlight is clicked
//           isSidePanelOpen = false;
//         } else {
//           // Keep side panel open
//           isSidePanelOpen = true;
//         }
//       } else {
//         // Open side panel
//         isSidePanelOpen = true;
//       }

//       // Scroll to the highlight if necessary
//       if ((!isSameHighlight || !state.isSidePanelOpen) && ref?.current && codeRef.current) {
//         codeRef.current.scrollTo({
//           top: ref.current.offsetTop - 30,
//           behavior: 'smooth',
//         });
//       }

//       return {
//         activeHighlight: isSameHighlight ? null : highlightId,
//         isSidePanelOpen,
//       };
//     }
//     default:
//       return state;
//   }
// }
// interface HighlightContextProps {
//   state: State;
//   handleHighlightClick: (
//     highlightId: number | null,
//     ref?: MutableRefObject<HTMLElement | null>
//   ) => void;
//   codeRef: MutableRefObject<HTMLDivElement | null>;
// }

// export const HighlightContext = createContext<HighlightContextProps | undefined>(
//   undefined
// );

// export const HighlightProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const codeRef = useRef<HTMLDivElement | null>(null);

//   const handleHighlightClick = useCallback(
//     (highlightId: number | null, ref?: MutableRefObject<HTMLElement | null>) => {
//       dispatch({
//         type: 'TOGGLE_HIGHLIGHT',
//         highlightId,
//         ref,
//         codeRef,
//       });

//       if (state.activeHighlight !== highlightId && highlightId !== null && codeRef.current) {
//         const highlightElement = codeRef.current.querySelector(
//           `[data-id="${state.activeHighlight}"]`
//         );
//         if (highlightElement) {
//           codeRef.current.scrollTo({
//             top: (highlightElement as HTMLElement).offsetTop,
//             behavior: 'smooth',
//           });
//         }
//       }
//     },
//     [dispatch, codeRef, state.activeHighlight]
//   );

//   return (
//     <HighlightContext.Provider
//       value={{ state, handleHighlightClick, codeRef }}
//     >
//       {children}
//     </HighlightContext.Provider>
//   );
// };

// interface HighlightContextProps {
//   activeHighlight: number | null;
//   setActiveHighlight: React.Dispatch<React.SetStateAction<number | null>>;
//   handleHighlightClick: (id: number | null, ref?: MutableRefObject<HTMLElement | null>) => void;
//   isSidePanelOpen: boolean;
//   setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   codeRef: MutableRefObject<HTMLDivElement | null>;
// }

// export const HighlightContext = createContext<HighlightContextProps | undefined>(undefined);

// interface HighlightProviderProps {
//   children: React.ReactNode;
// }

// export const HighlightProvider = ({ children }: HighlightProviderProps) => {
//   const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
//   const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);
//   const codeRef = useRef<HTMLDivElement | null>(null);

//   const handleHighlightClick = useCallback(
//     (highlightId: number | null, ref?: MutableRefObject<HTMLElement | null>) => {
//       setActiveHighlight((prevActiveHighlight) => {
//         const isSameHighlight = prevActiveHighlight === highlightId;

//         setIsSidePanelOpen((prevIsSidePanelOpen) => {
//           if (prevIsSidePanelOpen) {
//             // Side panel is open
//             if (isSameHighlight) {
//               // Close side panel
//               return false;
//             } else {
//               // Keep side panel open
//               return true;
//             }
//           } else {
//             // Side panel is closed
//             // Open side panel
//             return true;
//           }
//         });

//         // Scroll to the highlight in the code container
//         if ((!isSameHighlight || !isSidePanelOpen) && ref?.current && codeRef.current) {
//           codeRef.current.scrollTo({
//             top: ref.current.offsetTop,
//             behavior: 'smooth',
//           });
//         }

//         // Update activeHighlight
//         return isSameHighlight ? null : highlightId;
//       });
//     },
//     [codeRef]
//   );

//   return (
//     <HighlightContext.Provider
//       value={{
//         codeRef,
//         isSidePanelOpen,
//         setIsSidePanelOpen,
//         activeHighlight,
//         setActiveHighlight,
//         handleHighlightClick,
//       }}
//     >
//       {children}
//     </HighlightContext.Provider>
//   );
// };
