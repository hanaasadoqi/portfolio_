import clsx from "clsx"
import { OlHTMLAttributes, HTMLProps } from 'react'

export const UL = ({ children, ...props }: React.HTMLProps<HTMLUListElement>) => {
  return (
    <ul
      className={clsx(
        "list-disc my-4 pl-2 list-yellow-300",
        "text-gray-900 dark:text-gray-100",
        "prose dark:prose-invert prose-xl",
        props.className
      )}
      {...props}
    >
      <span>
        {children}
      </span>
    </ul>
  )
}

export const OL = ({ children, ...props }: HTMLProps<HTMLOListElement>) => {
  return (
    <ol
      className={clsx("list-decimal my-4 pl-2",
        "text-gray-900 dark:text-gray-100",
        "prose dark:prose-invert prose-xl",
        props.className)}
      {...(props as OlHTMLAttributes<HTMLOListElement>)}
    >
      <span>
        {children}
      </span>
    </ol>
  )
}
export const LI = ({ children, ...props }: React.HTMLProps<HTMLLIElement>) => {
  return (
    <li
      className={clsx(
        "md:m-4 pl-2 md:pl-6",  // Apply consistent left padding for indentation
        "text-gray-800 dark:text-gray-200",  // High contrast for both light/dark modes
        "hover:text-primary-900 dark:hover:text-primary-100",  // Hover effect for interactivity
        "transition-colors duration-200 ease-in-out",  // Smooth color transitions
        "prose-xl prose dark:prose-invert",
        props.className
      )}
      {...props}
    >
      <span>
        {children}
      </span>
    </li>
  )
}
