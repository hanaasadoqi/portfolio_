import LoadingComponent from "@/app/@modal/(.)skills/[id]/loading";
import { Suspense } from "react";

export const InfoBlock = ({ children }: { children: React.ReactNode }) => {
  return <div data-id="info-block" className="mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg px-8 py-4 shadow-md hover:shadow-lg border-gray-400 text-gray-800">{children}</div>
}

export const Callout = ({ type = 'info', children }: { type?: 'info' | 'warning' | 'success' | 'danger'; children: React.ReactNode }) => {
  const colors = {
    info: 'bg-blue-50 dark:bg-blue-950 dark:text-blue-200 border-blue-400 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
    success: 'bg-green-50 border-green-400 text-green-800',
    danger: 'bg-red-50 dark:bg-red-950 dark:text-red-200 border-red-400 text-red-800'
  }

  return (
    <div className={`border-l-4  p-4 my-6 ${colors[type]} rounded-md`}>
      <Suspense fallback={<LoadingComponent />}>
        {children}
      </Suspense>
    </div>
  )
}