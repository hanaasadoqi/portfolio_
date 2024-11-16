"use client";

import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import { getMermaidInstance, renderMermaidDiagram } from './mermaidInstance';
import { useDarkMode } from '@/context/styling/DarkModeContext';

interface MermaidContextProps {
  mermaid: any;
  triggerRerender: (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => void;
}

const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const [mermaid, setMermaid] = useState<any>(null);

  useEffect(() => {
    const instance = getMermaidInstance(isDarkMode);

    instance.registerIconPacks([
      {
        name: 'mdi',
        loader: () => import('./mdi.json')
      },
      {
        name: 'carbon',
        loader: () => import('./carbon.json')
      }
    ])

    setMermaid(instance);
  }, [isDarkMode]);

  const triggerRerender = useCallback(
    (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
      if (!mermaid) {
        console.warn('Mermaid is not initialized yet');
        return;
      }

      if (targetRef?.current && diagramContent) {
        renderMermaidDiagram(targetRef.current, diagramContent);
      }
    },
    [mermaid, isDarkMode]
  );

  return (
    <MermaidContext.Provider value={{ mermaid, triggerRerender }}>
      {children}
    </MermaidContext.Provider>
  );
};

export const useMermaid = (): MermaidContextProps => {
  const context = useContext(MermaidContext);
  if (!context) {
    throw new Error('useMermaid must be used within a MermaidProvider');
  }
  return context;
};
























// "use client";

// import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
// import { getMermaidInstance, renderMermaidDiagram } from './mermaidInstance';
// import { useDarkMode } from '@/context/styling/DarkModeContext';

// interface MermaidContextProps {
//   mermaid: any;
//   triggerRerender: (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => void;
//   mermaidLoading: boolean;
// }

// const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

// export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isDarkMode } = useDarkMode();
//   const [loading, setLoading] = useState(true);
//   const [mermaid, setMermaid] = useState<any>(null);

//   useEffect(() => {
//     console.log('Initializing Mermaid in provider...');
//     const instance = getMermaidInstance(isDarkMode);
//     setMermaid(instance);
//     setLoading(false);
//   }, [isDarkMode]);

//   const triggerRerender = useCallback(
//     async (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
//       if (loading || !mermaid) {
//         console.warn('Mermaid is still loading or not initialized yet');
//         return;
//       }

//       if (targetRef?.current && diagramContent) {
//         try {
//           setLoading(true);
//           await renderMermaidDiagram(targetRef.current, diagramContent);
//         } catch (err) {
//           console.error('Error reloading Mermaid:', err);
//         } finally {
//           setLoading(false);
//         }
//       }
//     },
//     [loading, mermaid]
//   );

//   return (
//     <MermaidContext.Provider value={{ mermaid, triggerRerender, mermaidLoading: loading }}>
//       {children}
//     </MermaidContext.Provider>
//   );
// };

// export const useMermaid = (): MermaidContextProps => {
//   const context = useContext(MermaidContext);
//   if (!context) {
//     throw new Error('useMermaid must be used within a MermaidProvider');
//   }
//   return context;
// };



















// "use client";

// import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
// import { getMermaidInstance, renderMermaidDiagram } from './mermaidInstance';
// import { useDarkMode } from '@/context/styling/DarkModeContext';

// interface MermaidContextProps {
//   mermaid: any;
//   triggerRerender: (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => void;
//   renderTrigger: number;
//   mermaidLoading: boolean;
// }

// const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

// export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isDarkMode } = useDarkMode();
//   const [renderTrigger, setRenderTrigger] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [mermaid, setMermaid] = useState<any>(null);

//   useEffect(() => {
//     // Initialize Mermaid instance when component mounts or when dark mode changes
//     console.log('Initializing Mermaid in provider...');
//     const instance = getMermaidInstance(isDarkMode);
//     setMermaid(instance);
//     setLoading(false); // Set loading to false when initialization is complete
//   }, [isDarkMode]);

//   const triggerRerender = useCallback(
//     async (targetRef: React.RefObject<HTMLDivElement>, diagramContent: string) => {
//       if (loading || !mermaid) {
//         console.warn('Mermaid is still loading or not initialized yet');
//         return;
//       }

//       if (targetRef?.current && diagramContent) {
//         try {
//           setLoading(true);
//           await renderMermaidDiagram(targetRef.current, diagramContent);
//         } catch (err) {
//           console.error('Error reloading Mermaid:', err);
//         } finally {
//           setLoading(false);
//         }
//       }
//     },
//     [loading, mermaid]
//   );

//   return (
//     <MermaidContext.Provider value={{ mermaid, triggerRerender, renderTrigger, mermaidLoading: loading }}>
//       {children}
//     </MermaidContext.Provider>
//   );
// };

// export const useMermaid = (): MermaidContextProps => {
//   const context = useContext(MermaidContext);
//   if (!context) {
//     throw new Error('useMermaid must be used within a MermaidProvider');
//   }
//   return context;
// };





























// "use client";

// import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
// import { getMermaidInstance, renderMermaidDiagram } from './mermaidInstance';
// import { useDarkMode } from '@/context/styling/DarkModeContext';

// interface MermaidContextProps {
//   mermaid: any;
//   triggerRerender: (targetRef?: React.RefObject<HTMLDivElement>, diagramContent?: string) => void;
//   renderTrigger: number;
//   mermaidLoading: boolean;
// }

// const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

// export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isDarkMode } = useDarkMode();
//   const [renderTrigger, setRenderTrigger] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [mermaid, setMermaid] = useState<any>(null);

//   useEffect(() => {
//     // Initialize Mermaid instance when component mounts or when dark mode changes
//     const instance = getMermaidInstance(isDarkMode);
//     setMermaid(instance);
//     setLoading(false); // Set loading to false when initialization is complete
//   }, [isDarkMode]);

//   const triggerRerender = useCallback(
//     async (targetRef?: React.RefObject<HTMLDivElement>, diagramContent?: string) => {
//       if (loading || !mermaid) {
//         console.warn('Mermaid is still loading or not initialized yet');
//         return;
//       }

//       if (targetRef?.current && diagramContent) {
//         try {
//           setLoading(true);
//           await renderMermaidDiagram(targetRef.current, diagramContent);
//         } catch (err) {
//           console.error('Error reloading Mermaid:', err);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setRenderTrigger((prev) => prev + 1);
//       }
//     },
//     [loading, mermaid]
//   );

//   return (
//     <MermaidContext.Provider value={{ mermaid, triggerRerender, renderTrigger, mermaidLoading: loading }}>
//       {children}
//     </MermaidContext.Provider>
//   );
// };

// export const useMermaid = (): MermaidContextProps => {
//   const context = useContext(MermaidContext);
//   if (!context) {
//     throw new Error('useMermaid must be used within a MermaidProvider');
//   }
//   return context;
// };




























// "use client";

// import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
// import { getMermaidInstance, renderMermaidDiagram } from './mermaidInstance';
// import { useDarkMode } from '@/context/styling/DarkModeContext';

// interface MermaidContextProps {
//   mermaid: any;
//   triggerRerender: (targetRef?: React.RefObject<HTMLDivElement>) => void;
//   renderTrigger: number;
//   mermaidLoading: boolean;
// }

// const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

// export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isDarkMode } = useDarkMode();
//   const [renderTrigger, setRenderTrigger] = useState(0);
//   const [loading, setLoading] = useState(true); // Initially set to true until Mermaid is fully ready
//   const [mermaid, setMermaid] = useState<any>(null);

//   useEffect(() => {
//     // Initialize Mermaid instance when component mounts or when dark mode changes
//     const instance = getMermaidInstance();
//     instance.initialize({
//       startOnLoad: false,
//       securityLevel: 'loose',
//       theme: 'base',
//       darkMode: isDarkMode,
//       layout: 'elk',
//       elk: {
//         mergeEdges: true,
//         nodePlacementStrategy: 'LINEAR_SEGMENTS',
//       },
//       themeVariables: {
//         primaryColor: isDarkMode ? '#1f1f1f' : '#f5f5f5',
//         primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
//         lineColor: isDarkMode ? '#a3a3a3' : '#4d4d4d',
//         mainBkg: isDarkMode ? '#1a1a1a' : '#f0f0f0',
//       },
//     });

//     setMermaid(instance);
//     setLoading(false); // Set loading to false when initialization is complete
//   }, [isDarkMode]);

//   const triggerRerender = useCallback(async (targetRef?: React.RefObject<HTMLDivElement>) => {
//     if (loading || !mermaid) {
//       console.warn('Mermaid is still loading or not initialized yet');
//       return;
//     }

//     if (targetRef?.current) {
//       try {
//         setLoading(true);
//         await renderMermaidDiagram(targetRef.current);
//       } catch (err) {
//         console.error('Error reloading Mermaid:', err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setRenderTrigger(prev => prev + 1);
//     }
//   }, [loading, mermaid]);

//   return (
//     <MermaidContext.Provider value={{ mermaid, triggerRerender, renderTrigger, mermaidLoading: loading }}>
//       {children}
//     </MermaidContext.Provider>
//   );
// };

// export const useMermaid = (): MermaidContextProps => {
//   const context = useContext(MermaidContext);
//   if (!context) {
//     throw new Error('useMermaid must be used within a MermaidProvider');
//   }
//   return context;
// };














// "use client";

// import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
// import { getMermaidInstance, renderMermaidDiagram } from './mermaidInstance';
// import { useDarkMode } from '@/context/styling/DarkModeContext';

// interface MermaidContextProps {
//   mermaid: any;
//   triggerRerender: (targetRef?: React.RefObject<HTMLDivElement>) => void;
//   renderTrigger: number;
//   mermaidLoading: boolean;
// }

// const MermaidContext = createContext<MermaidContextProps | undefined>(undefined);

// export const MermaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isDarkMode } = useDarkMode();
//   const [renderTrigger, setRenderTrigger] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const mermaid = useMemo(() => {
//     const instance = getMermaidInstance();
//     instance.initialize({
//       startOnLoad: false,
//       securityLevel: 'loose',
//       theme: 'base',
//       darkMode: isDarkMode,
//       layout: 'elk',
//       elk: {
//         mergeEdges: true,
//         nodePlacementStrategy: 'LINEAR_SEGMENTS',
//       },
//       themeVariables: {
//         primaryColor: isDarkMode ? '#1f1f1f' : '#f5f5f5',
//         primaryBorderColor: isDarkMode ? '#4b4b4b' : '#bfbfbf',
//         lineColor: isDarkMode ? '#a3a3a3' : '#4d4d4d',
//         mainBkg: isDarkMode ? '#1a1a1a' : '#f0f0f0',
//       },
//     });
//     return instance;
//   }, [isDarkMode]);

//   const triggerRerender = useCallback(async (targetRef?: React.RefObject<HTMLDivElement>) => {
//     if (targetRef?.current) {
//       try {
//         setLoading(true);
//         await renderMermaidDiagram(targetRef.current);
//       } catch (err) {
//         console.error('Error reloading Mermaid:', err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setRenderTrigger(prev => prev + 1);
//     }
//   }, [mermaid]);

//   return (
//     <MermaidContext.Provider value={{ mermaid, triggerRerender, renderTrigger, mermaidLoading: loading }}>
//       {children}
//     </MermaidContext.Provider>
//   );
// };

// export const useMermaid = (): MermaidContextProps => {
//   const context = useContext(MermaidContext);
//   if (!context) {
//     throw new Error('useMermaid must be used within a MermaidProvider');
//   }
//   return context;
// };
