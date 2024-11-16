"use client"

import React, { createContext, useContext, useReducer, useMemo, ReactNode, Dispatch, useState } from 'react';

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

  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return <HighlightContext.Provider value={value}>{children}</HighlightContext.Provider>;
};

export const useHighlight = () => {
  const context = useContext(HighlightContext);
  if (!context) {
    throw new Error('useHighlight must be used within a HighlightProvider');
  }
  return context;
};


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