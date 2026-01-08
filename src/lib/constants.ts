import type { NavItem, ValueCard, ClientSegment, Stat, Service, FooterColumn, ContactInfo } from '@/types';

// Navigation items - using anchor links for smooth scroll
export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#values' },
  { label: 'What We Do', href: '#services' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Contact', href: '#footer' },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  businessOwners: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
  individualsFamilies: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
  retirees: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
  highNetWorth: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  servicesConsultation: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
  ctaBackground: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
};

export const VALUES: ValueCard[] = [
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We offer straightforward, transparent guidance with no complexity or hidden conditions. Every recommendation is made with your best interests at the heart of our process.',
    variant: 'muted',
  },
  {
    id: 'commitment',
    title: 'Commitment',
    description: 'We stay committed to your goals through continuous support and thoughtful adjustments as your financial needs evolve, ensuring you always have clear guidance at every step.',
    variant: 'dark',
  },
  {
    id: 'discipline',
    title: 'Discipline',
    description: 'Our planning and investment approach is structured, research-backed, and consistent. We focus on long-term stability rather than short-term reactions, ensuring clarity.',
    variant: 'cream',
  },
];

export const CLIENT_SEGMENTS: ClientSegment[] = [
  {
    id: 'business-owners',
    title: 'Business Owners',
    image: IMAGES.businessOwners,
  },
  {
    id: 'individuals-families',
    title: 'Individuals & Families',
    image: IMAGES.individualsFamilies,
  },
  {
    id: 'retirees',
    title: 'Retirees & Pre-Retirees',
    image: IMAGES.retirees,
  },
  {
    id: 'high-net-worth',
    title: 'High-Net-Worth Clients',
    image: IMAGES.highNetWorth,
  },
];

export const STATS: Stat[] = [
  { id: 'states', value: '50', label: 'States served', suffix: '+' },
  { id: 'years', value: '25', label: 'Years in practice', suffix: '+' },
  { id: 'aum', value: '$950M', label: 'Under financial oversight' },
  { id: 'team', value: '12', label: 'Dedicated team members' },
];

export const SERVICES: Service[] = [
  {
    id: 'asset-management',
    title: 'Asset Management',
    description: 'Comprehensive portfolio management designed to grow and protect your wealth across market cycles.',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning & Consulting',
    description: 'Strategic planning for retirement, education, tax efficiency, and wealth preservation.',
  },
  {
    id: 'pension-retirement',
    title: 'Pension & Retirement Consulting',
    description: 'Expert guidance on pension plans, 401(k) management, and retirement income strategies.',
  },
  {
    id: 'tailored-advisory',
    title: 'Tailored Advisory Services',
    description: 'Personalized financial advice tailored to your unique circumstances and goals.',
  },
  {
    id: 'wrap-fee',
    title: 'Wrap Fee Programs',
    description: 'All-inclusive fee structures that simplify your investment management experience.',
  },
  {
    id: 'lpl-sponsored',
    title: 'LPL Sponsored Advisory Programs',
    description: 'Access to institutional-quality investment programs through our LPL partnership.',
  },
];

// Footer services - all link to services section
export const FOOTER_SERVICES: FooterColumn = {
  title: 'Services',
  links: [
    { label: 'Asset Management', href: '#services' },
    { label: 'Financial Planning', href: '#services' },
    { label: 'Pension Consulting', href: '#services' },
    { label: 'LPL Sponsored Programs', href: '#services' },
    { label: 'Tailored Advisory Services', href: '#services' },
    { label: 'Wrap Fee Programs', href: '#services' },
  ],
};

// Footer resources - link to relevant sections
export const FOOTER_RESOURCES: FooterColumn = {
  title: 'Resources',
  links: [
    { label: 'Our Values', href: '#values' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Our Presence', href: '#stats' },
    { label: 'Get In Touch', href: '#cta' },
  ],
};

export const CONTACT_INFO: ContactInfo = {
  email: 'work@hubops.in',
  phone: '+91 99308 20763',
  address: [
    '502, Hiranandani Lighthall',
    'Tower A, Hiranandani Business Park',
    'Saki Vihar Road, Powai, Mumbai',
    '- 400072',
  ],
};

export const COMPANY_DESCRIPTION = 'We provide disciplined financial guidance, personalized planning, and long-term wealth strategies designed to support your financial goals.';
