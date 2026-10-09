import type { InputHTMLAttributes, Ref } from "react";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}

export function Input({ className, ref, ...rest }: InputProps) {
  const classes = [styles.input, className].filter(Boolean).join(" ");

  return <input ref={ref} className={classes} {...rest} />;
}
