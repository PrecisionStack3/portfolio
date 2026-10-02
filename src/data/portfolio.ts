export type ProjectCategory = 'web' | 'mobile' | 'brand'

export interface Project {
  id: string
  category: ProjectCategory
  title: string
  client: string
  year: string
  status: string
  tag: string
  summary: string
  image: string
  cta: string
  modal: {
    category: string
    metrics: string
    description: string
    tags: string[]
  }
}

export const profile = {
  name: 'Elena Vance',
  initials: 'CT',
  title: 'Senior Product Designer & Creative Developer',
  location: 'SF / Remote',
  availability: 'Available for Select Q2/Q3 Collaborations',
  headline: 'Crafting minimalist digital products with code, motion & intentional design.',
  bio: 'I am Elena Vance, a Senior Product Designer & Creative Developer with 8+ years building resilient design systems, immersive 3D web spaces, and production-grade architectures.',
  email: 'elena@vance.design',
  fullLocation: 'San Francisco, CA · Remote Worldwide',
  availabilityDetail: 'Accepting select client sprints from May 2024',
  metrics: [
    { value: '8+', label: 'Years Experience' },
    { value: '40+', label: 'Shipped Systems' },
    { value: '99.8%', label: 'Satisfaction Rate' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Read.cv', href: 'https://read.cv' },
    { label: 'X/Twitter', href: 'https://x.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
}

export const services = [
  {
    index: '01',
    icon: 'layers' as const,
    title: 'Product Design & UI/UX',
    description:
      'Architecting multi-platform design systems, interaction patterns, wireframes, and enterprise prototypes optimized for cognitive ease.',
    tags: ['Design Systems', 'Figma Tokens', 'Prototyping'],
  },
  {
    index: '02',
    icon: 'code' as const,
    title: 'Frontend & Creative Dev',
    description:
      'Engineered with modern frameworks, WebGL visualizers, reactive state, and sub-second Lighthouse scores for maximum product velocity.',
    tags: ['React & Next.js', 'Three.js / WebGL', 'Tailwind'],
  },
  {
    index: '03',
    icon: 'auto_awesome' as const,
    title: 'Brand Strategy & Identity',
    description:
      'Translating core company narratives into high-contrast brand foundations: editorial typography, spatial guidelines, and bespoke packaging.',
    tags: ['Art Direction', 'Typography', 'Packaging'],
  },
]

export const projects: Project[] = [
  {
    id: 'axiom',
    category: 'web',
    title: 'Axiom: Spatial 3D Architecture',
    client: 'Axiom Spatial Studio',
    year: '2024',
    status: 'Live Architecture',
    tag: 'WebGL / Three.js',
    summary:
      'High-fidelity interactive 3D web experience mapping cantilevered architectural volumes with procedural day-night lighting.',
    image: '/images/axiom.webp',
    cta: 'Explore Architecture Case Study',
    modal: {
      category: 'Interactive 3D WebGL Web Experience',
      metrics: 'Sub-16ms Framerate · 98 Lighthouse Score · 45% Conversion Surge',
      description:
        'Axiom required a breakthrough digital presence capable of showcasing complex structural elevations in full real-time 3D. We integrated WebGL render passes with zero jank, coupled with minimalist Swiss typography and an architectural line grid system.',
      tags: ['Three.js', 'GLSL Shaders', 'Tailwind CSS', 'Next.js 14', 'Spatial UI'],
    },
  },
  {
    id: 'quantum',
    category: 'mobile',
    title: 'Quantum Finance: Dark Mode Core',
    client: 'Quantum Global',
    year: '2024',
    status: 'Design System & App',
    tag: 'Mobile Fintech UI',
    summary:
      'Next-generation multi-asset portfolio monitor featuring luminous balance metrics, smooth gesture routing, and custom SVG visualizers.',
    image: '/images/quantum.webp',
    cta: 'View Fintech Specs',
    modal: {
      category: 'Fintech Mobile Application & Cross-Platform UI',
      metrics: '4.9 App Store Rating · $2.4B Monitored Volume · 240k MAU',
      description:
        'A dual-mode fintech dashboard built for serious wealth managers. Highlights include custom low-latency chart engines, dynamic gradient glow cues for market fluctuations, and ergonomic quick-action gestures for transfers.',
      tags: ['React Native', 'Tailwind Design System', 'SVG Visualizers', 'Biometric Auth', 'Dark Mode'],
    },
  },
  {
    id: 'aura',
    category: 'brand',
    title: 'Aura: Botanical Minimalist Packaging',
    client: 'Aura Care',
    year: '2023',
    status: 'Sustainable Packaging',
    tag: 'Brand & Packaging',
    summary:
      'Holistic brand strategy, recycled paper tactile boxes, custom geometric iconography, and an editorial product field guide.',
    image: '/images/aura.webp',
    cta: 'View Identity System',
    modal: {
      category: 'Sustainable Brand Architecture & Packaging',
      metrics: 'Dieline System 100% Recyclable · 12 Product Lines · Global Distribution',
      description:
        "Aura's visual system pairs warm, natural beige paper stocks with sharp geometric emblems and crisp typography. The work spanned tactile packaging boxes, amber droplet bottles, an editorial ritual manual, and sustainable tote bags.",
      tags: ['Art Direction', 'Packaging Dielines', 'Editorial System', 'Iconography', 'Luxury Print'],
    },
  },
  {
    id: 'nova',
    category: 'web',
    title: 'Nova: Async Creative Workspace',
    client: 'Nova Labs',
    year: '2023',
    status: 'SaaS Platform',
    tag: 'Tablet & SaaS UX',
    summary:
      'Cross-device multi-user workspace featuring micro-calendars, kanban tracking, contextual commenting, and low-latency canvas synchronization.',
    image: '/images/nova.webp',
    cta: 'View Productivity Dashboard',
    modal: {
      category: 'SaaS Productivity & Interactive Canvas',
      metrics: '99.99% Uptime · Multi-Region WebSockets · 60fps Canvas Render',
      description:
        'Nova simplifies the chaos of creative project management on tablets and desktops. Featuring a distraction-free modular sidebar, card-based sprint visualization, and real-time team feedback cursors.',
      tags: ['Tablet UX', 'Productivity Design', 'Design Tokens', 'SaaS Dashboard', 'Micro-Interactions'],
    },
  },
]

export const filters = [
  { id: 'all', label: 'All (4)' },
  { id: 'web', label: 'Web & 3D' },
  { id: 'mobile', label: 'Fintech' },
  { id: 'brand', label: 'Brand & System' },
] as const

export const scopeOptions = [
  'Full Product Design & System',
  'Creative Engineering / Next.js',
  'Brand Direction & Packaging',
  'Multi-Disciplinary Retainer',
]

export const budgetOptions = ['$10k – $25k', '$25k – $50k', '$50k+']
