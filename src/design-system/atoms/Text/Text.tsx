import type { ReactNode, ElementType } from "react";
import styles from "./Text.module.css";

export type TextVariant =
  | "title"
  | "subtitle"
  | "body"
  | "hint"
  | "error"
  | "success"
  | "dim"
  | "legal";

const defaultElements: Record<TextVariant, ElementType> = {
  title: "h1",
  subtitle: "p",
  body: "p",
  hint: "p",
  error: "p",
  success: "p",
  dim: "span",
  legal: "footer",
};

export interface TextProps {
  as?: ElementType;
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
}

export function Text({ as, variant = "body", children, className }: TextProps) {
  const Component = as ?? defaultElements[variant];
  const classes = [styles[variant], className].filter(Boolean).join(" ");

  return <Component className={classes}>{children}</Component>;
}
