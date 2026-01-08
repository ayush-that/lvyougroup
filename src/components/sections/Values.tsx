import { SectionHeading } from '@/components/common';
import { VALUES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { ValueVariant } from '@/types';

const variantStyles: Record<ValueVariant, { bg: string; text: string }> = {
  muted: {
    bg: 'bg-bg-muted',
    text: 'text-text-primary',
  },
  dark: {
    bg: 'bg-teal-dark',
    text: 'text-white',
  },
  cream: {
    bg: 'bg-bg-cream',
    text: 'text-text-primary',
  },
};

export function Values() {
  return (
    <section id="values" className="bg-bg-main py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Core Values"
          title="The principles that guide every engagement and every investment we make"
          subtitle="We're building toward a family office because we believe in long-term partnerships over short-term transactions."
        />

        <div
          className={cn(
            'grid gap-6',
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {VALUES.map((value) => {
            const styles = variantStyles[value.variant];
            return (
              <div
                key={value.id}
                className={cn(
                  'p-6 lg:p-8 rounded-2xl',
                  'min-h-[220px] flex flex-col lg:justify-between',
                  styles.bg,
                  styles.text
                )}
              >
                <h3
                  className={cn(
                    'font-serif text-center text-3xl lg:text-4xl italic mb-4 lg:mb-6',
                    styles.text
                  )}
                >
                  {value.title}
                </h3>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    value.variant === 'dark' ? 'text-white/80' : 'text-text-muted'
                  )}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
