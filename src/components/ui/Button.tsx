import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-strong",
  ghost:
    "border border-line-strong text-text hover:border-accent hover:text-accent-strong",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

// Buttons on this site always go somewhere, so they render as links.
export default function Button({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
