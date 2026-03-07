import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40",
  secondary:
    "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-text-secondary hover:text-text hover:bg-surface",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
