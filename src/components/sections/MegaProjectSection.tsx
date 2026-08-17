'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MapPin, Building2, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

const details = [
  { icon: MapPin, label: 'Location', value: 'Muharraq, Bahrain' },
  { icon: Building2, label: 'Client', value: 'Bahrain Airport Company' },
  { icon: Clock, label: 'Scope', value: 'Civil & Infrastructure Works' },
  { icon: CheckCircle, label: 'Status', value: 'Completed' },
]

export function MegaProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  const isInView = useInView(contentRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-xl overflow-hidden">
          {/* ── Left Column: Cinematic Image (55%) ── */}
          <div className="relative lg:col-span-7 min-h-96 lg:min-h-[600px] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY }}
            >
              <Image
                src="/images/mega-project.jpg"
                alt="Bahrain International Airport Expansion"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
            </motion.div>
            {/* Mobile: rounded top corners */}
            <div className="lg:hidden absolute inset-0 rounded-t-xl" />
          </div>

          {/* ── Right Column: Dark Content (45%) ── */}
          <div
            ref={contentRef}
            className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-16"
            style={{ backgroundColor: DARK_NAVY }}
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: CORPORATE_RED }}
            >
              Featured Project
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif' }}
            >
              Bahrain International Airport Expansion
            </motion.h2>

            {/* Details List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-6"
            >
              {details.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon
                      className="size-4 flex-shrink-0"
                      style={{ color: CORPORATE_RED }}
                    />
                    <span className="text-sm text-gray-400 w-16 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="text-sm text-white font-medium">
                      {item.value}
                    </span>
                  </div>
                )
              })}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-400 leading-relaxed mb-8"
            >
              A landmark infrastructure project that expanded Bahrain's primary
              international gateway, enhancing passenger capacity and operational
              efficiency to serve the Kingdom's growing aviation needs.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#projects"
                className={
                  'inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/50'
                }
              >
                View All Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
