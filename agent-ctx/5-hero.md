# Task 5-hero: Hero Section Component

## Status: ✅ Complete

## File Created
- `src/components/sections/HeroSection.tsx`

## Implementation Details

### Structure
- Full-screen hero section (`min-h-screen`) with `id="home"` for navigation anchoring
- Client component (`'use client'`) for Framer Motion animations
- Data sourced from `@/data/site-data` (`siteData.hero`)

### Background
- Uses `/images/hero-bg.png` as background image
- CSS `background-image` with `linear-gradient` overlay: transparent at top → `#081A2B` (dark navy) at bottom for text readability
- `backgroundSize: 'cover'`, `backgroundPosition: 'center'`

### Content (centered in max-w-6xl container)
1. **Eyebrow**: "SINCE 1952" — uppercase, tracking-widest, corporate red (#C8102E), font-semibold
2. **Headline**: "Building Bahrain. Building The Future." — text-5xl → xl:text-8xl responsive, white, Manrope (font-heading), font-bold, tight leading
3. **Supporting statement**: text-lg/md:text-xl, text-white/80, max-w-2xl centered
4. **CTA Buttons** (flex row with gap-4, stack on mobile):
   - Primary: corporate red bg, white text, rounded-md, px-8 py-4, hover:bg-red-700, links to #companies
   - Secondary: transparent + border-white/30, white text, rounded-md, px-8 py-4, hover:bg-white/10, Play icon, links to #about

### Framer Motion Animations
- Shared `fadeUp` config: `{ opacity: 0, y: 30 }` → `{ opacity: 1, y: 0 }`, duration 0.7s, easeOut
- Staggered delays: eyebrow 0.2s, headline 0.4s, supporting 0.6s, CTAs 0.8s, scroll indicator 1.2s
- Scroll indicator ChevronDown bounces with `repeat: Infinity` (y: [0, 8, 0], duration 1.8s)

### Components Used
- `framer-motion` for animations
- `lucide-react` for ChevronDown and Play icons
- `@/components/ui/button` (shadcn) for CTA buttons

### Lint
- Passes clean: 0 errors, 0 warnings
