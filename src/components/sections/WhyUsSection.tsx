'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Clock,
  Layers,
  ShieldCheck,
  HardHat,
  MapPin,
  Leaf,
  type LucideIcon,
} from 'lucide-react'
import { siteData } from '@/data/site-data'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Layers,
  ShieldCheck,
  HardHat,
  MapPin,
  Leaf,
}

function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Layers
}

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="bg-white py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-16 text-center lg:mb-20">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase"
            style={{ color: CORPORATE_RED }}
          >
            WHY HAJI HASSAN
          </span>
          <h2
            className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: DARK_NAVY }}
          >
            Engineering Excellence, Trusted Delivery
          </h2>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {siteData.whyUs.map((feature, index) => {
            const Icon = getIcon(feature.icon)

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="group cursor-default rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {/* Icon Container */}
                <div
                  className="flex size-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: '#F8F9FB' }}
                >
                  <Icon className="size-5" style={{ color: CORPORATE_RED }} />
                </div>

                {/* Title */}
                <h3
                  className="mt-4 font-heading text-xl font-bold"
                  style={{ color: DARK_NAVY }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
