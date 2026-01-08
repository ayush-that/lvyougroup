import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { STATS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
}

function StatCard({ value, label, suffix }: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        'w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] bg-teal-dark rounded-sm'
      )}
    >
      <div className="font-serif text-[40px] lg:text-[48px] leading-tight font-medium text-white">
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-[12px] lg:text-[13px] mt-3 text-white/70 px-4">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-bg-cream py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={cn(
            'grid gap-12 lg:gap-8 items-center',
            'grid-cols-1 lg:grid-cols-[1fr_1fr]'
          )}
        >
          {/* Left Column - Text */}
          <div>
            <p className="text-sm text-text-muted mb-4">Our Presence</p>
            <h2 className="font-serif text-text-primary mb-6">
              A quick look at the scale
              <br />
              and stability of our firm.
            </h2>
            <p className="text-text-muted mb-8 max-w-md">
              We serve clients nationwide with a strong team, a disciplined
              approach, and a long-standing commitment to financial clarity.
            </p>
            <a href="#services">
              <Button className="bg-teal-dark hover:bg-teal-accent text-white gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Right Column - 2x2 Stats grid with inverted L line */}
          <div className="relative">
            {/* Inverted L - Vertical line through left column */}
            <div
              className="hidden lg:block absolute bg-border-subtle"
              style={{
                left: '-40px',
                top: '0',
                width: '1px',
                height: 'calc(100% + 80px)',
              }}
            />

            {/* Inverted L - Horizontal line from bottom of vertical to right */}
            <div
              className="hidden lg:block absolute bg-border-subtle"
              style={{
                left: '-40px',
                right: '-200px',
                bottom: '-80px',
                height: '1px',
              }}
            />

            {/* 2x2 Grid */}
            <div className="relative grid grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-[450px] mx-auto lg:mx-0">
              {STATS.map((stat) => (
                <StatCard
                  key={stat.id}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
