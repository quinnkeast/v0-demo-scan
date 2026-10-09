import type { ReactNode } from "react";
import styles from "./EmptyState.module.css";

export interface EmptyStateProps {
  variant?: "empty" | "success";
  title: string;
  body?: string;
  icon?: ReactNode;
  className?: string;
}

export function EmptyState({
  variant = "empty",
  title,
  body,
  icon,
  className,
}: EmptyStateProps) {
  const classes = [styles.emptyState, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {variant === "success" && icon && (
        <div className={styles.successMark}>{icon}</div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {body && <p className={styles.body}>{body}</p>}
    </div>
  );
}
