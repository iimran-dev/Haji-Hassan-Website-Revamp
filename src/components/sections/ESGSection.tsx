'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Users, Scale, type LucideIcon } from 'lucide-react'
import { siteData } from '@/data/site-data'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

const pillars: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Leaf,
    title: 'Environment',
    description: siteData.esg.environment,
  },
  {
    icon: Users,
    title: 'Social',
    description: siteData.esg.social,
  },
  {
    icon: Scale,
    title: 'Governance',
    description: siteData.esg.governance,
  },
]

export function ESGSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="esg"
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: DARK_NAVY }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-16 text-center lg:mb-20">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase"
            style={{ color: CORPORATE_RED }}
          >
            ESG COMMITMENT
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Building Sustainably. Governing Responsibly.
          </h2>
        </div>

        {/* ── Three Pillars ── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.08]"
              >
                {/* Icon with subtle glow on hover */}
                <div className="transition-shadow duration-300 group">
                  <Icon
                    className="size-8 transition-all duration-300"
                    style={{ color: CORPORATE_RED }}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-heading text-2xl font-bold text-white">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
