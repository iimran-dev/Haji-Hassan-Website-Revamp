'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="relative w-full bg-cover bg-center py-24 lg:py-36"
      style={{ backgroundImage: 'url(/images/careers-bg.jpg)' }}
    >
      {/* Dark navy overlay at 70% opacity */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(8,26,43,0.70), rgba(8,26,43,0.80))`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Label */}
        <motion.span
          variants={fadeUpVariants}
          className="mb-4 text-sm font-semibold uppercase tracking-widest"
          style={{ color: CORPORATE_RED }}
        >
          JOIN OUR TEAM
        </motion.span>

        {/* Headline */}
        <motion.h2
          variants={fadeUpVariants}
          className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Build Your Future With Us
        </motion.h2>

        {/* Supporting paragraph */}
        <motion.p
          variants={fadeUpVariants}
          className="mb-10 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          Join a team that shapes Bahrain&apos;s future. We offer challenging
          engineering roles, professional development, and a culture of
          excellence and collaboration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            className="rounded-md px-8 py-4 text-base font-semibold tracking-wide uppercase transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: CORPORATE_RED,
              color: '#FFFFFF',
            }}
            size="lg"
          >
            View Openings
          </Button>

          <Button
            className="rounded-md border border-white px-8 py-4 text-base font-semibold tracking-wide uppercase transition-colors hover:bg-white/10 cursor-pointer"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
            }}
            variant="outline"
            size="lg"
          >
            Submit Your CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
