import clsx from 'clsx';

export const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <button className={clsx("not-prose px-3 py-1.5 rounded-md text-base font-semi-bold font-mono leading-5 whitespace-nowrap", className)}>
      {children}
    </button>
  )
}