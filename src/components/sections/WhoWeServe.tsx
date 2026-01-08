import { SectionHeading } from '@/components/common';
import { CLIENT_SEGMENTS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="relative overflow-hidden">
      {/* Background - Light teal at top */}
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-bg-muted" />

      <div className="relative py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Partnering with forward-thinking organizations and investors"
            subtitle="We work with enterprises building payment infrastructure, companies exploring blockchain adoption, investors seeking commodity exposure, and strategic partners looking for capital-backed consulting relationships."
            alignment="center"
            className="max-w-3xl"
          />

          {/* Client Cards Grid */}
          <div
            className={cn(
              'grid gap-6',
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
              'mt-12'
            )}
          >
            {CLIENT_SEGMENTS.map((segment) => (
              <div key={segment.id} className="group">
                {/* Image Container - 4:3 aspect ratio */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className={cn(
                      'w-full h-full object-cover',
                      'transition-transform duration-200 ease-out',
                      'group-hover:scale-[1.03]'
                    )}
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-text-primary">
                  {segment.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
