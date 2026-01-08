// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Value card types
export type ValueVariant = 'muted' | 'dark' | 'cream';

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  variant: ValueVariant;
}

// Client segment types
export interface ClientSegment {
  id: string;
  title: string;
  image: string;
}

// Stat types
export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
}

// Footer types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Contact info types
export interface ContactInfo {
  email: string;
  phone: string;
  address: string[];
}

// UI State
export interface UIState {
  mobileNavOpen: boolean;
  activeService: string;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  setActiveService: (id: string) => void;
}
