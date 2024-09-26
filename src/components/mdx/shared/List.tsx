import clsx from "clsx"
import { OlHTMLAttributes, HTMLProps } from 'react'

export const UL = ({ children, ...props }: React.HTMLProps<HTMLUListElement>) => {
  return (
    <ul
      className={clsx(
        "mx-auto list-disc m-2 mb-4 pl-2 prose dark:prose-invert prose-xl",
        "text-gray-900 dark:text-gray-100",
        props.className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export const OL = ({ children, ...props }: HTMLProps<HTMLOListElement>) => {
  return (
    <ol
      className={clsx("mx-auto list-decimal m-2 mb-4 pl-2",
        "text-gray-900 dark:text-gray-100",
        "prose dark:prose-invert prose-xl",
        props.className)}
      {...(props as OlHTMLAttributes<HTMLOListElement>)}
    >
      {children}
    </ol>
  )
}
export const LI = ({ children, ...props }: React.HTMLProps<HTMLLIElement>) => {
  return (
    <li
      className={clsx(
        "mb-4 pl-6",  // Apply consistent left padding for indentation
        "text-gray-800 dark:text-gray-200",  // High contrast for both light/dark modes
        "hover:text-primary-900 dark:hover:text-primary-100",  // Hover effect for interactivity
        "transition-colors duration-200 ease-in-out",  // Smooth color transitions
        // "prose prose-2xl dark:prose-invert",  // Keep typography consistent with the parent `ul`
        props.className
      )}
      {...props}
    >
      {children}
    </li>
  )
}
