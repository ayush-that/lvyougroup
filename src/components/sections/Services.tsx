import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common';
import { SERVICES } from '@/lib/constants';
import { useUIStore } from '@/store/ui.store';
import { cn } from '@/lib/utils';

export function Services() {
  const { activeService, setActiveService } = useUIStore();
  const selectedService = SERVICES.find((s) => s.id === activeService) || SERVICES[0];
  const activeIndex = SERVICES.findIndex((s) => s.id === activeService);

  return (
    <section id="services" className="bg-bg-main py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="What We Do"
          title="Strategic consulting across three high-impact sectors."
          subtitle="From payment infrastructure to blockchain applications to commodity markets—we bring deep expertise and capital access to every engagement. We don't just advise; we have the resources to help execute."
          alignment="center"
          className="max-w-3xl"
        />

        {/* Content Layout */}
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Service Navigation with animated indicator */}
            <div className="lg:w-[280px] flex-shrink-0">
              <nav className="relative flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                {/* Animated blue indicator bar */}
                <motion.div
                  className="hidden lg:block absolute left-0 w-[3px] bg-teal-dark rounded-full"
                  initial={false}
                  animate={{
                    top: activeIndex * 52,
                    height: 52,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />

                {/* Static track line */}
                <div className="hidden lg:block absolute left-0 top-0 w-[3px] h-full bg-border-subtle/50 rounded-full" />

                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={cn(
                      'relative text-left pl-6 pr-4 py-3.5 whitespace-nowrap lg:whitespace-normal',
                      'text-sm transition-all duration-200',
                      activeService === service.id
                        ? 'text-text-primary font-medium'
                        : 'text-text-muted hover:text-text-primary'
                    )}
                  >
                    {/* Mobile indicator */}
                    <span
                      className={cn(
                        'lg:hidden absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-colors',
                        activeService === service.id ? 'bg-teal-dark' : 'bg-transparent'
                      )}
                    />
                    {service.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Column - Animated Service Image */}
            <div className="flex-1 relative">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-bg-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedService.id}
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Service Description - Animated */}
          <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex gap-4 flex-1">
              <div className="w-[3px] bg-teal-dark flex-shrink-0 self-stretch rounded-full" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedService.id}
                  className="font-serif text-2xl lg:text-3xl text-text-primary italic leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  {selectedService.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button - Animated */}
          <div className="mt-10 flex justify-center">
            <a href="#cta">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-teal-dark hover:bg-teal-accent text-white px-8 py-6 text-base gap-2">
                    Learn More — {selectedService.title}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
