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
  Users,
  Scale,
  type LucideIcon,
} from 'lucide-react'
import { siteData } from '@/data/site-data'

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

const esgPillars = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="w-full bg-[#F8F9FA] py-12 sm:py-20 lg:py-32 overflow-hidden text-[#081A2B]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─────────────────────────────────────────────────────────────
            PART 1: WHY HAJI HASSAN GROUP (2-Row 3-Column Grid)
           ───────────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 text-center lg:mb-16"
        >
          <span
            className="mb-3 block text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: '#C8102E' }}
          >
            WHY HAJI HASSAN GROUP
          </span>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081A2B] tracking-tight leading-[1.15]">
            Engineering Excellence,{' '}
            <span style={{ color: '#C8102E' }} className="font-black">
              Trusted Delivery
            </span>
          </h2>
        </motion.div>

        {/* 6 Feature Cards Grid (2-Row Grid: 3 columns x 2 rows) */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-24"
        >
          {siteData.whyUs.map((feature) => {
            const Icon = getIcon(feature.icon)

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-50 text-red-600 group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#081A2B] mb-2 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 font-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


