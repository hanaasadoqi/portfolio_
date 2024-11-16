'use client'

import FabMenu from '@/components/shared/FABMenu'
import { ScrollProvider } from '@/context/ScrollContext'
import { MermaidProvider } from '@/context/MermaidContext'
import CombinedStarryBackground from '@/context/styling/StarryBackground'
import { useState, useEffect } from 'react'
import { ThemeProvider, useSiteTheme } from '@/context/styling/ThemeContext'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <MermaidProvider>
          <ScrollProvider>
            {children}
          </ScrollProvider>
        </MermaidProvider>
      </ThemeWrapper>
      <FabMenu />
    </ThemeProvider>
  )
}

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { siteTheme } = useSiteTheme();
  const [classNames, setClassNames] = useState('')

  useEffect(() => {
    async function setClassFromRoute() {
      if (siteTheme === 'projects') setClassNames('bg-projects-light dark:bg-projects-dark text-primary-950 dark:text-secondary-100')
      else if (siteTheme === 'writing') setClassNames('bg-writing-light dark:bg-writing-dark text-primary-950 dark:text-secondary-100')
      else setClassNames('bg-app-gradient-light dark:bg-app-gradient-dark text-primary-950 dark:text-secondary-100')
    }
    setClassFromRoute()

    const root = document.querySelector('body');
    if (root) {
      root.dataset.id = siteTheme;
      root.className = classNames
    }
  }, [siteTheme, classNames]);

  useEffect(() => {
    const root = document.querySelector('body');
    if (root && !root.className.includes(classNames)) {
      root.className = classNames
    }
  }, [classNames])

  return (
    <ThemeProvider>
      <div className={`relative min-h-screen w-full z-0 ${classNames}`}>
        <CombinedStarryBackground id={"app-wide"}>{children}</CombinedStarryBackground>
      </div>
    </ThemeProvider>
  );
}

