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
      className={clsx("flex min-h-screen w-screen flex-col items-center justify-center mb-48 pb-24", {
        'py-24 mt-48': !full,
        'px-6 md:px-24': !screen,
      }, className)}
    >
      <div className={clsx("w-full flex flex-col items-center justify-center", { 'max-w-7xl': !full && !screen })}>
        {children}
      </div>
    </section>
  )
}
