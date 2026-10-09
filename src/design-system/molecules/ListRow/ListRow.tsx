import type { ReactNode } from "react";
import styles from "./ListRow.module.css";

export interface ListRowProps {
  primary: ReactNode;
  secondary?: ReactNode;
  className?: string;
}

export function ListRow({ primary, secondary, className }: ListRowProps) {
  const classes = [styles.row, className].filter(Boolean).join(" ");

  return (
    <li className={classes}>
      <span>{primary}</span>
      {secondary && <span>{secondary}</span>}
    </li>
  );
}

export interface ListProps {
  children: ReactNode;
  className?: string;
}

export function List({ children, className }: ListProps) {
  const classes = [styles.list, className].filter(Boolean).join(" ");

  return <ul className={classes}>{children}</ul>;
}
