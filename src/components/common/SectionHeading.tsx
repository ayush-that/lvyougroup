import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", alignment === "center" && "text-center mx-auto", className)}>
      {eyebrow && (
        <p
          className={cn("text-sm tracking-wide mb-4", light ? "text-white/70" : "text-text-muted")}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-serif", light ? "text-white" : "text-text-primary")}>{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl",
            alignment === "center" && "mx-auto",
            light ? "text-white/80" : "text-text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
