import type { ReactNode } from "react";
import styles from "./Panel.module.css";

export interface PanelProps {
  title?: string;
  action?: ReactNode;
  footnote?: string;
  children: ReactNode;
  className?: string;
}

export function Panel({
  title,
  action,
  footnote,
  children,
  className,
}: PanelProps) {
  const classes = [styles.panel, className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      {(title || action) && (
        <div className={styles.head}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {action}
        </div>
      )}
      {children}
      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </section>
  );
}
