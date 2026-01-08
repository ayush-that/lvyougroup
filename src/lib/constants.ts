import type { NavItem, ValueCard, ClientSegment, Stat, Service, FooterColumn, ContactInfo } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#values' },
  { label: 'What We Do', href: '#services' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Contact', href: '#footer' },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  enterprises: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
  innovators: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80',
  investors: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  partners: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  ctaBackground: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
  paymentSystems: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
  goldSilver: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&q=80',
  oilGas: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80',
  investmentPartnership: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  strategicAdvisory: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
};

export const VALUES: ValueCard[] = [
  {
    id: 'strategic-vision',
    title: 'Strategic Vision',
    description: 'We see beyond the immediate opportunity. Our consulting approach combines deep industry expertise with forward-thinking analysis to position your business for sustainable growth in evolving markets.',
    variant: 'muted',
  },
  {
    id: 'execution-excellence',
    title: 'Execution Excellence',
    description: 'Strategy without execution is merely theory. We bring the resources, networks, and capital to transform recommendations into results—backed by our $69M credit facility and decades of operational experience across payments, blockchain, and commodities.',
    variant: 'dark',
  },
  {
    id: 'partnership-mindset',
    title: 'Partnership Mindset',
    description: 'We invest alongside our clients—not just with advice, but with capital. Our transition to a family office structure reflects our commitment to long-term value creation over transactional relationships. Your success is our success.',
    variant: 'cream',
  },
];

export const CLIENT_SEGMENTS: ClientSegment[] = [
  {
    id: 'enterprises',
    title: 'Enterprise Clients',
    image: IMAGES.enterprises,
  },
  {
    id: 'innovators',
    title: 'Tech Innovators',
    image: IMAGES.innovators,
  },
  {
    id: 'investors',
    title: 'Commodity Investors',
    image: IMAGES.investors,
  },
  {
    id: 'partners',
    title: 'Strategic Partners',
    image: IMAGES.partners,
  },
];

export const STATS: Stat[] = [
  { id: 'capital', value: '$69M', label: 'Capital access' },
  { id: 'target', value: '$100M', label: 'NAV target by 2027' },
  { id: 'sectors', value: '3', label: 'Core consulting sectors' },
  { id: 'transition', value: '2-3', label: 'Years to family office', suffix: ' yrs' },
];

export const SERVICES: Service[] = [
  {
    id: 'payment-systems',
    title: 'Payment Systems & Ecosystems',
    description: 'End-to-end consulting for payment infrastructure, digital wallets, cross-border transactions, and fintech ecosystem integration.',
    image: IMAGES.paymentSystems,
  },
  {
    id: 'blockchain-solutions',
    title: 'Blockchain Solutions',
    description: 'Real-world blockchain applications—from supply chain transparency to tokenized assets—designed for practical business outcomes, not hype.',
    image: IMAGES.blockchain,
  },
  {
    id: 'gold-silver',
    title: 'Gold & Silver Commodities',
    description: 'Strategic advisory on precious metals investment, sourcing partnerships, and portfolio allocation for wealth preservation.',
    image: IMAGES.goldSilver,
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Commodities',
    description: 'Expert guidance on energy sector investments, trading strategies, and partnership structures in the oil and gas markets.',
    image: IMAGES.oilGas,
  },
  {
    id: 'family-office',
    title: 'Investment Partnerships',
    description: 'For qualified opportunities, we co-invest alongside our clients—putting our capital behind our recommendations.',
    image: IMAGES.investmentPartnership,
  },
  {
    id: 'strategic-advisory',
    title: 'Strategic Advisory',
    description: 'High-level consulting for businesses navigating complex decisions in payments, blockchain adoption, or commodity market entry.',
    image: IMAGES.strategicAdvisory,
  },
];

export const FOOTER_SERVICES: FooterColumn = {
  title: 'Services',
  links: [
    { label: 'Payment Systems', href: '#services' },
    { label: 'Blockchain Solutions', href: '#services' },
    { label: 'Gold & Silver', href: '#services' },
    { label: 'Oil & Gas', href: '#services' },
    { label: 'Investment Partnerships', href: '#services' },
    { label: 'Strategic Advisory', href: '#services' },
  ],
};

export const FOOTER_RESOURCES: FooterColumn = {
  title: 'Company',
  links: [
    { label: 'Our Values', href: '#values' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Our Approach', href: '#stats' },
    { label: 'Get In Touch', href: '#cta' },
  ],
};

export const CONTACT_INFO: ContactInfo = {
  email: 'contact@lvyou.sg',
  phone: '+65 XXXX XXXX',
  address: [
    'LVyou Pte Ltd',
    'Singapore',
  ],
};

export const COMPANY_DESCRIPTION = 'A management consulting firm specializing in payment ecosystems, blockchain solutions, and commodities—backed by capital and building toward a $100M family office.';
