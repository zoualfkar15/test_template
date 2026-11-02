import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  size?: "small" | "large";
};

/** A link styled as a button. */
export default function Button({ href, children, variant = "primary", size = "large" }: ButtonProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...(external && { target: "_blank", rel: "noreferrer" })}
    >
      {children}
    </a>
  );
}
