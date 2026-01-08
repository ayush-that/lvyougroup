export interface NavItem {
  label: string;
  href: string;
}

export type ValueVariant = 'muted' | 'dark' | 'cream';

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  variant: ValueVariant;
}

export interface ClientSegment {
  id: string;
  title: string;
  image: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string[];
}

export interface UIState {
  mobileNavOpen: boolean;
  activeService: string;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  setActiveService: (id: string) => void;
}
