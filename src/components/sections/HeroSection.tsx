'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { siteData } from '@/data/site-data'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
}

export function HeroSection() {
  const { hero } = siteData

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex-col justify-between overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36 lg:pt-40 lg:pb-44 bg-[#081A2B]"
    >
      {/* Background Image + Premium Dark Corporate Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 35%, rgba(200, 16, 46, 0.22) 0%, transparent 45%),
            linear-gradient(to right, rgba(8, 26, 43, 0.90) 0%, rgba(8, 26, 43, 0.7) 45%, rgba(8, 26, 43, 0.3) 80%, rgba(8, 26, 43, 0.5) 100%),
            linear-gradient(to bottom, rgba(8, 26, 43, 0.25) 0%, transparent 50%, rgba(8, 26, 43, 0.95) 100%),
            url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=3840&q=95'),
            url('/images/hero-bg.png')
          `,
        }}
      />

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow with Red Accent Line */}
          <motion.div
            className="mb-4 flex items-center gap-3"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <span className="h-0.5 w-8 rounded-full bg-[#C8102E]" />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
              style={{ color: '#C8102E' }}
            >
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.06] drop-shadow-sm"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
          >
            Building{' '}
            <span style={{ color: '#C8102E' }} className="font-black drop-shadow-md">
              Bahrain.
            </span>
            <br />
            Building the Future.
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            className="mb-10 max-w-xl text-base text-slate-300 sm:text-lg lg:text-xl font-normal leading-relaxed"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
          >
            {hero.supporting}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-5 sm:gap-6"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.55 }}
          >
            {/* Primary Red Pill Button */}
            <a
              href="#companies"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-[#A80D25] hover:shadow-red-600/50"
              style={{ backgroundColor: '#C8102E' }}
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>


          </motion.div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-12 lg:h-16" />
    </section>
  )
}


