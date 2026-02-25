interface BadgeProps {
  children: string;
  variant?: "default" | "primary" | "accent";
}

const variants = {
  default: "bg-surface text-text-secondary border border-border",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
