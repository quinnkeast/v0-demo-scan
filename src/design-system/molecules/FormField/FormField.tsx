import type { ReactNode } from "react";
import { Text } from "../../atoms/Text/Text";
import styles from "./FormField.module.css";

export interface FormFieldProps {
  label: string;
  hint?: string;
  error?: string;
  success?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  hint,
  error,
  success,
  children,
  className,
}: FormFieldProps) {
  const classes = [styles.field, className].filter(Boolean).join(" ");

  return (
    <label className={classes}>
      <span className={styles.label}>{label}</span>
      {children}
      {hint && !error && <Text variant="hint">{hint}</Text>}
      {error && <Text variant="error">{error}</Text>}
      {success && <Text variant="success">{success}</Text>}
    </label>
  );
}
