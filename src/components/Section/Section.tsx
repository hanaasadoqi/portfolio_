import React from "react";

import styles from "./Section.module.scss";
import clsx from "clsx";
interface SectionProps {
  id: string;
  label: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({
  id,
  label,
  subtitle,
  description,
  children,
  className,
}) => {
  return (
    <section
      id={id}
      data-id={id}
      className={clsx(styles._component, className)}
    >
      <div className="container mx-auto h-full items-center justify-center">
        <div className="mb-12 space-y-6">
          <h1 className={styles.title}>{label}</h1>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
