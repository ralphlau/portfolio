import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "default" | "accent" | "gold" | "muted";
}

export default function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-xs px-2.5 py-1 rounded border transition-colors",
        {
          "border-border text-text-secondary bg-surface/40 hover:border-accent/40 hover:text-accent":
            variant === "default",
          "border-accent/30 text-accent bg-accent/5": variant === "accent",
          "border-gold/30 text-gold bg-gold/5": variant === "gold",
          "border-border/50 text-text-muted bg-surface/20": variant === "muted",
        }
      )}
    >
      {label}
    </span>
  );
}
