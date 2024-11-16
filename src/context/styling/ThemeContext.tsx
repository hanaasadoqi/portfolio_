'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DarkModeProvider } from './DarkModeContext';

import '@/styles/mixins.scss'
import '@/styles/globals.css'

type Theme = 'app-wide' | 'writing' | 'projects';

interface ThemeContextProps {
  siteTheme: Theme;
  setSiteTheme: (theme: Theme) => void;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [siteTheme, setSiteTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('siteTheme') as Theme;
      return savedTheme || 'app-wide';
    }
    return 'app-wide';
  });

  const pathname = usePathname();

  const updateTheme = (theme: Theme) => {
    setSiteTheme(theme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('siteTheme', theme);
    }
  };

  useEffect(() => {
    if (pathname.startsWith('/blog') && siteTheme !== 'writing') {
      updateTheme('writing');
    } else if (pathname.startsWith('/projects') && siteTheme !== 'projects') {
      updateTheme('projects');
    } else if (!pathname.startsWith('/blog') && !pathname.startsWith('/projects') && siteTheme !== 'app-wide') {
      updateTheme('app-wide');
    }
  }, [pathname, siteTheme]);

  return (
    <ThemeContext.Provider value={{ siteTheme, setSiteTheme, updateTheme }}>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </ThemeContext.Provider>
  );
};

export const useSiteTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSiteTheme must be used within a ThemeProvider');
  }
  return context;
};









// // 'use client'

// // import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// // import { usePathname } from 'next/navigation';

// // import { DarkModeProvider } from './DarkModeContext';
// // import CombinedStarryBackground from './StarryBackground';

// // import 'prism-themes/themes/prism-vsc-dark-plus.css'
// // import 'katex/dist/katex.min.css'

// // import '@/styles/globals.css'

// // type Theme = 'app-wide' | 'writing' | 'projects';

// // interface ThemeContextProps {
// //   siteTheme: Theme;
// //   setSiteTheme: (theme: Theme) => void;
// // }

// // const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// // export const ThemeProvider = ({ children }: { children: ReactNode }) => {
// //   const [siteTheme, setSiteTheme] = useState<Theme>('app-wide');
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     if (pathname.startsWith('/blog')) {
// //       setSiteTheme('writing');
// //     } else if (pathname.startsWith('/projects')) {
// //       setSiteTheme('projects');
// //     } else {
// //       setSiteTheme('app-wide');
// //     }
// //   }, [pathname]);

// //   return (
// //     <ThemeContext.Provider value={{ siteTheme, setSiteTheme }}>
// //       <DarkModeProvider>
// //         {children}
// //       </DarkModeProvider>
// //     </ThemeContext.Provider>
// //   );
// // };

// // export const useSiteTheme = () => {
// //   const context = useContext(ThemeContext);
// //   if (!context) {
// //     throw new Error('useTheme must be used within a ThemeProvider');
// //   }
// //   return context;
// // };

// // export function ThemeWrapper({ children }: { children: React.ReactNode }) {
// //   const { siteTheme } = useSiteTheme();

// //   useEffect(() => {
// //     const root = document.querySelector('body');
// //     if (root) {
// //       root.dataset.id = siteTheme;
// //       root.className = `relative min-h-screen w-full z-0`;
// //     }
// //   }, [siteTheme]);

// //   return (
// //     <ThemeProvider>
// //       <div
// //         className={`w-full min-h-full bg-cover -z-20 ${siteTheme === 'projects'
// //           ? 'bg-projects-light dark:bg-projects-dark'
// //           : siteTheme === 'writing'
// //             ? 'bg-writing-light dark:bg-writing-dark'
// //             : 'bg-app-gradient-light dark:bg-app-gradient-dark'
// //           }`}
// //       >
// //         <CombinedStarryBackground id={"app-wide"}>
// //           {children}
// //         </CombinedStarryBackground>
// //       </div>
// //     </ThemeProvider>
// //   );
// // }
// 'use client'

// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { usePathname } from 'next/navigation';

// import { DarkModeProvider } from './DarkModeContext';
// import CombinedStarryBackground from './StarryBackground';

// import '@/styles/mixins.scss'
// import 'prism-themes/themes/prism-vsc-dark-plus.css'
// import 'katex/dist/katex.min.css'
// import '@/styles/globals.css'

// type Theme = 'app-wide' | 'writing' | 'projects';

// interface ThemeContextProps {
//   siteTheme: Theme;
//   setSiteTheme: (theme: Theme) => void;
//   updateTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [siteTheme, setSiteTheme] = useState<Theme>(() => {
//     const savedTheme = window.localStorage.getItem('siteTheme') as Theme;
//     return savedTheme || 'app-wide';
//   });
//   const pathname = usePathname();

//   const updateTheme = (theme: Theme) => {
//     setSiteTheme(theme);
//     window.localStorage.setItem('siteTheme', theme);
//   };

//   useEffect(() => {
//     if (pathname.startsWith('/blog') && siteTheme !== 'writing') {
//       updateTheme('writing');
//     } else if (pathname.startsWith('/projects') && siteTheme !== 'projects') {
//       updateTheme('projects');
//     } else if (!pathname.startsWith('/blog') && !pathname.startsWith('/projects') && siteTheme !== 'app-wide') {
//       updateTheme('app-wide');
//     }
//   }, [pathname, siteTheme]);

//   return (
//     <ThemeContext.Provider value={{ siteTheme, setSiteTheme, updateTheme }}>
//       <DarkModeProvider>
//         {children}
//       </DarkModeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export const useSiteTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useSiteTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export function ThemeWrapper({ children }: { children: React.ReactNode }) {
//   const { siteTheme } = useSiteTheme();

//   useEffect(() => {
//     const root = document.querySelector('body');
//     if (root) {
//       root.dataset.id = siteTheme;
//       root.className = `relative min-h-screen w-full z-0`;
//     }
//   }, [siteTheme]);

//   return (
//     <ThemeProvider>
//       <div
//         className={`w-full min-h-full bg-cover -z-20 ${siteTheme === 'projects'
//           ? 'bg-projects-light dark:bg-projects-dark'
//           : siteTheme === 'writing'
//             ? 'bg-writing-light dark:bg-writing-dark'
//             : 'bg-app-gradient-light dark:bg-app-gradient-dark'
//           }`}
//       >
//         <CombinedStarryBackground id={"app-wide"}>
//           {children}
//         </CombinedStarryBackground>
//       </div>
//     </ThemeProvider>
//   );
// }
