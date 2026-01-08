import { cn } from '@/lib/utils';

interface BlurOverlayProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export function BlurOverlay({ position = 'bottom', className }: BlurOverlayProps) {
  return (
    <div
      className={cn(
        'fixed left-0 right-0 h-20 pointer-events-none z-50',
        position === 'bottom' ? 'bottom-0' : 'top-0',
        className
      )}
      style={{
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        maskImage:
          position === 'bottom'
            ? 'linear-gradient(to top, black 0%, transparent 100%)'
            : 'linear-gradient(to bottom, black 0%, transparent 100%)',
        WebkitMaskImage:
          position === 'bottom'
            ? 'linear-gradient(to top, black 0%, transparent 100%)'
            : 'linear-gradient(to bottom, black 0%, transparent 100%)',
      }}
    />
  );
}
