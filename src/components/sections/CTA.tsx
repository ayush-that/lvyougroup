import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function CTA() {
  return (
    <section
      id="cta"
      className={cn(
        'relative py-24 lg:py-32',
        'bg-cover bg-center bg-no-repeat'
      )}
      style={{ backgroundImage: `url(${IMAGES.ctaBackground})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-white text-4xl lg:text-5xl italic mb-8">
            Let's Build Something
            <br />
            Extraordinary Together
          </h2>

          <a href="#footer">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                'border-white/80 text-white bg-transparent',
                'hover:bg-white hover:text-teal-dark',
                'px-8 py-6 text-base gap-2'
              )}
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
