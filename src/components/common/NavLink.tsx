import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-text-primary hover:text-teal-accent transition-colors duration-200",
        "text-sm tracking-wide",
        className,
      )}
    >
      {children}
    </a>
  );
}
