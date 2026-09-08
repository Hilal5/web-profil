import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`button ${
        variant === "primary" ? "button-primary" : "button-secondary"
      }`}
    >
      {children}
    </a>
  );
}
