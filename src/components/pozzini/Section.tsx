import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  centered = true,
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-16 sm:py-20 lg:py-28", "reveal", visible && "reveal-in", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
