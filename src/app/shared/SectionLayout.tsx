import { ReactNode } from 'react'
import clsx from 'clsx'

export default function SectionLayout({
  children,
  id,
  className,
  full = false
}: Readonly<{ children: ReactNode; id: string; className?: string; full?: boolean }>) {
  return (
    <section
      id={id}
      data-id={id}
      className={clsx("flex min-h-screen w-screen flex-col items-center justify-center px-6 md:px-24", {
        'py-24 my-48': !full
      }, className)}
    >
      <div className={clsx("w-full flex flex-col items-center justify-center", { 'max-w-7xl': !full })}>
        {children}
      </div>
    </section>
  )
}
