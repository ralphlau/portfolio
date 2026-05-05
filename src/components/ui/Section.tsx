import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 px-6 max-w-6xl mx-auto", className)}
    >
      {children}
    </section>
  );
}
