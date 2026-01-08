import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common';
import { SERVICES, IMAGES } from '@/lib/constants';
import { useUIStore } from '@/store/ui.store';
import { cn } from '@/lib/utils';

export function Services() {
  const { activeService, setActiveService } = useUIStore();
  const selectedService = SERVICES.find((s) => s.id === activeService) || SERVICES[1];

  return (
    <section id="services" className="bg-bg-main py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive financial services designed to protect, grow, and simplify your wealth."
          subtitle="We offer a full suite of financial services—from investment management to long-term planning—built around your unique goals. Our approach is clear, structured, and designed to bring confidence to every decision."
          alignment="center"
          className="max-w-3xl"
        />

        {/* Content Layout */}
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Service Navigation */}
            <div className="lg:w-[240px] flex-shrink-0">
              {/* Decorative teal bar */}
              <div className="hidden lg:block w-1 h-8 bg-bg-muted mb-6" />

              <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={cn(
                      'text-left px-4 py-3 whitespace-nowrap lg:whitespace-normal',
                      'text-sm transition-all duration-200',
                      'border-l-[3px] border-transparent',
                      activeService === service.id
                        ? 'border-l-teal-dark text-text-primary font-medium'
                        : 'text-text-muted hover:text-text-primary'
                    )}
                  >
                    {service.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Column - Service Image */}
            <div className="flex-1 relative">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src={IMAGES.servicesConsultation}
                  alt="Financial consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Service Description - Below the layout */}
          <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Decorative line + description */}
            <div className="flex gap-4 flex-1">
              <div className="w-[3px] bg-teal-dark flex-shrink-0 self-stretch" />
              <p className="font-serif text-2xl lg:text-3xl text-text-primary italic leading-relaxed max-w-2xl">
                {selectedService.description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <a href="#cta">
              <Button className="bg-teal-dark hover:bg-teal-accent text-white px-8 py-6 text-base gap-2">
                Learn More — {selectedService.title}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
