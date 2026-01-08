import { Separator } from '@/components/ui/separator';
import {
  FOOTER_SERVICES,
  FOOTER_RESOURCES,
  CONTACT_INFO,
  COMPANY_DESCRIPTION,
} from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-teal-dark py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Footer Grid */}
        <div
          className={cn(
            'grid gap-10',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          )}
        >
          {/* Logo & Description Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-block mb-6">
              <span
                className="text-2xl font-medium tracking-tight"
                style={{ fontFamily: 'Georgia, serif', color: '#ffffff' }}
              >
                LVyou
              </span>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm leading-relaxed max-w-xs">
              {COMPANY_DESCRIPTION}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className="text-base font-semibold mb-5"
              style={{ color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}
            >
              {FOOTER_SERVICES.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-100 transition-opacity text-sm"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4
              className="text-base font-semibold mb-5"
              style={{ color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}
            >
              {FOOTER_RESOURCES.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_RESOURCES.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-100 transition-opacity text-sm"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-base font-semibold mb-5"
              style={{ color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}
            >
              Find Us Here
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block hover:opacity-100 transition-opacity"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="block hover:opacity-100 transition-opacity"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {CONTACT_INFO.phone}
              </a>
              <div className="pt-2">
                <p className="font-semibold mb-2" style={{ color: '#ffffff' }}>Address</p>
                <address className="not-italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {CONTACT_INFO.address.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < CONTACT_INFO.address.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            &copy; {currentYear} LVyou Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
