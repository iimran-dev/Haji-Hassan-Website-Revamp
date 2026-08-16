# Task 12-13-why-esg — Work Record

## Agent: section-components

## Files Created

### 1. `src/components/sections/WhyUsSection.tsx`
- **Named export**: `WhyUsSection`
- **Section ID**: `id="why-us"`
- **Background**: White
- **Header**: Centered label ("WHY HAJI HASSAN" in corporate red, uppercase, tracking-widest) + headline ("Engineering Excellence, Trusted Delivery" in dark navy, responsive text sizing up to 5xl, max-w-3xl)
- **Grid**: 1/2/3 columns responsive with gap-6 lg:gap-8
- **6 Feature Cards** mapped from `siteData.whyUs`:
  - White bg, border-gray-100, rounded-xl, p-8
  - Icon container: 48x48 rounded-lg with #F8F9FB bg, Lucide icon in corporate red
  - Icon mapping: Clock→Clock, Layers→Layers, Shield→ShieldCheck, HardHat→HardHat, MapPin→MapPin, Leaf→Leaf
  - Title: text-xl Manrope Bold dark navy
  - Description: text-sm gray-500 leading-relaxed
  - Hover: -translate-y-0.5 + shadow-lg
- **Framer Motion**: Staggered fade-up on scroll (useInView), delay index * 0.1s
- **Padding**: py-20 lg:py-32

### 2. `src/components/sections/ESGSection.tsx`
- **Named export**: `ESGSection`
- **Section ID**: `id="esg"`
- **Background**: Dark navy (#081A2B)
- **Header**: Centered label ("ESG COMMITMENT" in corporate red) + headline ("Building Sustainably. Governing Responsibly" white, responsive sizing)
- **Three Pillar Cards** in 1/3 column grid, gap-8:
  - Semi-transparent bg-white/5, backdrop-blur-sm, border-white/10, rounded-xl, p-8
  - Hover: bg-white/[0.08]
  - Environment: Leaf icon (corporate red, 32px), text from siteData.esg.environment
  - Social: Users icon, text from siteData.esg.social
  - Governance: Scale icon, text from siteData.esg.governance
- **Framer Motion**: Staggered fade-up on scroll, delay index * 0.15s

## Validation
- **ESLint**: Passes clean (0 errors, 0 warnings)
- **Dev Server**: Compiles successfully, no TypeScript errors
