# Codiac Labs Design Guidelines

## Design Approach
**Reference-Based:** Drawing from modern edtech platforms like Duolingo, Khan Academy, and tech-forward educational sites. Combining engaging visual storytelling with clear educational content presentation. Focus on making STEM education feel exciting and accessible.

## Core Design Principles
- **Tech-forward but approachable**: Modern without being intimidating
- **Energy and motion**: Reflecting the dynamic nature of drone programming
- **Clear hierarchy**: Educational content must be scannable and digestible
- **Youth appeal**: Engaging for 10-18 age group while maintaining credibility for institutions

## Typography System
- **Headers**: Bold, geometric sans-serif (Google Fonts: Poppins Bold 700)
  - H1: 3.5rem (desktop), 2.5rem (mobile)
  - H2: 2.5rem (desktop), 2rem (mobile)
  - H3: 1.75rem
- **Body**: Clean, readable sans-serif (Google Fonts: Inter Regular 400)
  - Base: 1rem (16px), line-height 1.6
  - Large body: 1.125rem for hero/intro sections
- **Accents**: Poppins SemiBold 600 for CTAs and emphasis

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Component gaps: gap-6 to gap-8
- Max widths: Container at max-w-7xl, content sections at max-w-6xl

## Component Library

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Logo left, navigation center, language switcher + CTA right
- Dropdown menus for Activities and About with smooth animations
- Mobile: Hamburger menu with slide-in panel

### Hero Section
- Full-width hero at 85vh with drone imagery background
- Diagonal split design: left side content, right side image blend
- Headline + subheading + dual CTA buttons (primary + secondary)
- Subtle parallax effect on background image

### Course/Workshop Cards
- Grid layout: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Card structure: image top, content below with icon, title, duration, description, CTA
- Hover: subtle lift (translate-y-2) and shadow increase
- Rounded corners: rounded-xl (12px)

### Team Building Section
- Asymmetric layout: staggered image gallery left, content right
- Feature grid showing key benefits with icons
- Split background treatment (colored section transition)

### About Sections ("Who is a Codiac?", "The Program")
- Alternating image/content layouts
- Stat counters for achievements
- Timeline component for program progression
- Icon-driven feature lists with generous spacing

### Contact Section
- Split layout: contact form left (60%), information card right (40%)
- Information includes: address with map icon, phone, email, office hours
- Embedded map placeholder below
- Form fields with floating labels

### Footer
- Three-column layout: Brand/description, Quick links, Policies + Contact
- Newsletter signup with inline form
- Social media icons (if applicable)
- Multi-language footer with language indicators

## Visual Elements

### Icons
**Font Awesome (CDN)** for all icons
- Drone, code, lightbulb, users, target icons throughout
- Icon size: text-2xl to text-4xl for features
- Consistent stroke-width appearance

### Buttons
- Primary: Solid with backdrop-blur for hero overlay buttons
- Secondary: Outlined style
- Sizes: px-8 py-3 (large), px-6 py-2.5 (medium)
- Border-radius: rounded-lg
- All buttons include built-in hover/active states

### Cards & Containers
- Subtle shadows: shadow-lg for elevation
- Border-radius: rounded-xl for major cards, rounded-lg for smaller components
- Background treatments: backdrop-blur for overlays, subtle gradients for sections

## Images Strategy
- **Hero**: Large drone in flight image, high-energy, tech-focused (backdrop for hero section)
- **Course cards**: Drone close-ups, students coding, workshop scenes
- **About sections**: Team photos, classroom environments, drone equipment
- **Team building**: Group activities, collaborative work scenes
- All images should convey energy, technology, and learning

## Responsive Strategy
- Breakpoints: Mobile-first, md: 768px, lg: 1024px, xl: 1280px
- Grid transitions: 1 col → 2 col → 3 col
- Typography scales down 1-2 sizes on mobile
- Stacked layouts for complex components on mobile
- Touch-friendly target sizes (minimum 44px)

## Multilingual Considerations
- Language switcher as dropdown in header (flag icons + language codes)
- RTL support structure (though not needed for current languages)
- Consistent spacing across all languages
- Font sizing accommodates longer Dutch/Turkish translations

## Animation Guidelines
**Minimal, purposeful motion:**
- Scroll-triggered fade-ups for section entries (once)
- Hover states on cards and buttons only
- Smooth transitions for navigation dropdowns (200ms)
- NO continuous animations, parallax effects used sparingly in hero only