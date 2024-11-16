import { ReactNode } from 'react'
import clsx from 'clsx'

export default function SectionLayout({
  children,
  id,
  className,
  full = false,
  screen = false,
}: Readonly<{ children: ReactNode; id: string; className?: string; full?: boolean; screen?: boolean; }>) {
  return (
    <section
      id={id}
      data-id={id}
      className={clsx("size-full flex flex-col items-center justify-center my-48 pb-24", {
        'py-24 mt-48': !full,
        'px-6 md:px-24': !screen,
        'max-w-7xl': !full && !screen
      }, className)}
    >
      {children}
    </section>
  )
}
