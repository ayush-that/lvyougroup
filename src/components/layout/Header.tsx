import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavLink } from '@/components/common';
import { NAV_ITEMS } from '@/lib/constants';
import { useUIStore } from '@/store/ui.store';
import { cn } from '@/lib/utils';

export function Header() {
  const { mobileNavOpen, toggleMobileNav, closeMobileNav } = useUIStore();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-[72px]',
        'bg-bg-main/95 backdrop-blur-sm',
        'border-b border-border-subtle'
      )}
    >
      <div className="container mx-auto h-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <span className="font-serif text-2xl font-medium text-teal-dark tracking-tight">
              LVyou
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Empty div to maintain spacing on desktop */}
          <div className="hidden lg:block w-[1px]" />

          {/* Mobile Menu */}
          <Sheet open={mobileNavOpen} onOpenChange={toggleMobileNav}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-teal-dark">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-bg-main border-l-border-subtle"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="font-serif text-xl text-teal-dark">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 px-4">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileNav}
                    className="text-base py-2"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
