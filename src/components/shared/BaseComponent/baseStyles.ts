import { twMerge } from 'tailwind-merge'
export const sizeStyles = {
  xs: 'px-2 py-1 text-xs md:px-3 md:py-2 md:text-sm',
  sm: 'px-3 py-1.5 text-sm md:px-4 md:py-2.5 md:text-base',
  md: 'px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
  lg: 'px-5 py-3 text-lg md:px-6 md:py-4 md:text-xl',
  xl: 'px-6 py-4 text-xl md:px-7 md:py-5 md:text-2xl',
  full: 'w-full h-full p-4',
}

export const colorStyles = {
  primary:
    'bg-primary text-primary90 hover:bg-primary70 hover:text-white active:bg-primary80 focus:ring-2 focus:ring-primary focus:ring-offset-2',
  secondary:
    'bg-secondary text-primary90 hover:bg-secondary70 hover:text-white active:bg-secondary80 focus:ring-2 focus:ring-secondary focus:ring-offset-2',
  outline:
    'border border-primary text-primary80 bg-transparent hover:text-white hover:border-primary70 hover:bg-primary70 active:border-primary80 focus:ring-2 focus:ring-primary focus:ring-offset-2',
  ghost:
    'bg-transparent text-primary60 hover:text-primary70 active:text-primary80 focus:ring-2 focus:ring-primary focus:ring-offset-2',
  link: 'text-primary60 underline hover:text-primary80 active:text-primary90 focus:ring-2 focus:ring-primary focus:ring-offset-2',
  text: 'text-primary60 hover:text-primary70 active:text-primary80 focus:ring-2 focus:ring-primary focus:ring-offset-2',
  fab: 'bg-primary tex-primary70 hover:text-white shadow-primary hover:bg-primary70 active:bg-primary80 focus:ring-2 focus:ring-primary focus:ring-offset-2',
}

export const outerStyles = {
  primary: 'shadow-sm hover:shadow-md active:shadow-inner',
  secondary: 'shadow-sm hover:shadow-md active:shadow-inner',
  outline: 'hover:shadow-md active:shadow-lg',
  ghost: 'hover:shadow-md focus:shadow-md active:shadow-lg',
  link: '',
  text: 'hover:text-primary70 active:text-primary80',
  fab: 'hover:shadow-md active:shadow-lg',
}

export const roundedStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export const disabledStyles = twMerge(
  'opacity-50 cursor-not-allowed',
  'bg-gray-300 text-gray-500',
  'border-gray-300',
  'shadow-none',
  'hover:shadow-none active:shadow-none focus:shadow-none',
  'focus:ring-0 focus:ring-offset-0',
  'hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 hover:shadow-none',
  'focus:bg-gray-300 focus:text-gray-500 focus:border-gray-300 focus:shadow-none',
  'active:bg-gray-300 active:text-gray-500 active:border-gray-300 active:shadow-none',
  'focus:ring-0 focus:ring-offset-0'
)
