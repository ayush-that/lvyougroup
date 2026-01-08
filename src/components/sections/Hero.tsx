import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section id="hero" className="bg-bg-main pt-8 lg:pt-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative mb-8 lg:mb-0">
          <div className="lg:max-w-[45%]">
            <h1 className="font-serif text-text-primary mb-6 lg:mb-12 max-w-[560px]">
              <span className="italic">Strategic Consulting</span>
              <br />
              <span className="italic">Backed by Capital</span>
            </h1>
            <p className="text-text-muted text-lg max-w-md">
              Management consulting in payment systems, blockchain, and commodities—with the resources to execute, not just advise.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8 lg:mt-0">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Modern architecture representing strategic growth"
            className="w-full h-full object-cover"
          />
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0',
              'h-[30%]',
              'bg-gradient-to-t from-black/40 to-transparent'
            )}
          />
        </div>
      </div>
    </section>
  );
}
