'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(8,26,43,0.3) 0%, rgba(8,26,43,0.6) 50%, #081A2B 100%), url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 text-xs font-semibold uppercase tracking-widest md:text-sm"
          style={{ color: '#C8102E' }}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-heading mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
        >
          {hero.headline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.headline.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Supporting Statement */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.6 }}
        >
          {hero.supporting}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="rounded-md px-8 py-4 text-base font-semibold text-white hover:bg-red-700"
            style={{ backgroundColor: '#C8102E' }}
            asChild
          >
            <a href="#companies">{hero.primaryCta}</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-md border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <a href="#about">
              <Play className="mr-2 h-4 w-4 fill-current" />
              {hero.secondaryCta}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-wider text-white/50">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
