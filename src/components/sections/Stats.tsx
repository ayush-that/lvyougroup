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
        'w-[200px] h-[200px] bg-teal-dark'
      )}
    >
      <div className="font-serif text-[48px] leading-tight font-medium text-white">
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-[13px] mt-3 text-white/70">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-bg-cream py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={cn(
            'grid gap-12 lg:gap-8 items-start',
            'grid-cols-1 lg:grid-cols-[1fr_1.3fr]'
          )}
        >
          {/* Left Column - Text */}
          <div className="lg:pt-16">
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

          {/* Right Column - Stats Grid with Staggered Layout */}
          <div className="relative">
            {/* Mobile: Simple 2x2 grid */}
            <div className="lg:hidden grid grid-cols-2 gap-4 justify-items-center">
              <StatCard value={STATS[0].value} label={STATS[0].label} suffix={STATS[0].suffix} />
              <StatCard value={STATS[1].value} label={STATS[1].label} suffix={STATS[1].suffix} />
              <StatCard value={STATS[2].value} label={STATS[2].label} suffix={STATS[2].suffix} />
              <StatCard value={STATS[3].value} label={STATS[3].label} suffix={STATS[3].suffix} />
            </div>

            {/* Desktop: Staggered layout with connectors */}
            <div className="hidden lg:block relative" style={{ height: '580px' }}>
              {/* Top Left Card - 50+ States served */}
              <div className="absolute" style={{ top: '0px', left: '0px' }}>
                <StatCard
                  value={STATS[0].value}
                  label={STATS[0].label}
                  suffix={STATS[0].suffix}
                />
              </div>

              {/* Top Right Card - 25+ Years in practice */}
              <div className="absolute" style={{ top: '100px', right: '0px' }}>
                <StatCard
                  value={STATS[1].value}
                  label={STATS[1].label}
                  suffix={STATS[1].suffix}
                />
              </div>

              {/* Bottom Left Card - $950M Under oversight */}
              <div className="absolute" style={{ top: '300px', left: '40px' }}>
                <StatCard
                  value={STATS[2].value}
                  label={STATS[2].label}
                  suffix={STATS[2].suffix}
                />
              </div>

              {/* Bottom Right Card - 12 Team members */}
              <div className="absolute" style={{ top: '380px', right: '40px' }}>
                <StatCard
                  value={STATS[3].value}
                  label={STATS[3].label}
                  suffix={STATS[3].suffix}
                />
              </div>

              {/* Connector Lines */}

              {/* Vertical line - from bottom of top-left card going down past bottom-left card */}
              <div
                className="absolute bg-border-subtle"
                style={{
                  left: '0px',
                  top: '200px',
                  width: '1px',
                  height: '380px',
                }}
              />

              {/* Horizontal line - from top-left card area extending to right edge */}
              <div
                className="absolute bg-border-subtle"
                style={{
                  left: '200px',
                  top: '200px',
                  width: 'calc(100% + 200px)',
                  height: '1px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
