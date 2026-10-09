import styles from "./Avatar.module.css";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  onClick?: () => void;
  className?: string;
}

export function Avatar({ src, alt, size = 38, onClick, className }: AvatarProps) {
  const img = (
    <img
      src={src}
      alt={alt}
      className={[styles.avatar, className].filter(Boolean).join(" ")}
      width={size}
      height={size}
    />
  );

  if (onClick) {
    return (
      <button
        className={styles.avatarButton}
        onClick={onClick}
        aria-label={alt}
      >
        {img}
      </button>
    );
  }

  return img;
}
