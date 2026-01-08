import { cn } from '@/lib/utils';
import type { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
  className?: string;
  variant?: 'dark' | 'light';
}

export function StatCard({ stat, className, variant = 'dark' }: StatCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        'w-[180px] h-[140px]',
        isDark ? 'bg-teal-dark' : 'bg-transparent',
        className
      )}
    >
      <div
        className={cn(
          'font-serif text-[32px] leading-tight font-medium',
          isDark ? 'text-white' : 'text-teal-dark'
        )}
      >
        {stat.value}
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <p
        className={cn(
          'text-[13px] mt-2',
          isDark ? 'text-white/70' : 'text-text-muted'
        )}
      >
        {stat.label}
      </p>
    </div>
  );
}
