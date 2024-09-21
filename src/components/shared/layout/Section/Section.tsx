import React from 'react'
import styles from './Section.module.scss'
import clsx from 'clsx'

interface SectionProps {
  id: string
  label?: string
  subtitle?: string
  description?: string
  className?: string
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  id,
  label,
  subtitle,
  description,
  children,
  className,
}) => {
  const scrollLeft = () => {
    // logic for scrolling left
  }

  const scrollRight = () => {}

  return (
    <section
      id={id}
      data-id={id}
      className={clsx(
        styles._component,
        {
          'min-h-screen': id !== 'hero',
          'h-screen w-full': id === 'hero',
        },
        className
      )}
    >
      <div
        className={clsx(
          'container relative flex h-full max-w-full flex-col items-center justify-center',
          {
            'py-48': id !== 'hero' && id !== 'contact',
          }
        )}
      >
        <div className="mb-12 space-y-6 text-center">
          {label && <h2 className={styles.title}>{label}</h2>}
          {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
