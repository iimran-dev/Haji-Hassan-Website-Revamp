'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building2, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const details = [
  { icon: MapPin, label: 'Location', value: 'Muharraq, Bahrain' },
  { icon: Building2, label: 'Client', value: 'Bahrain Airport Company' },
  { icon: Layers, label: 'Scope', value: 'Civil & Infrastructure' },
  { icon: CheckCircle2, label: 'Status', value: 'Completed (BHD 120M+)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function MegaProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0B1528] py-12 sm:py-20 lg:py-32 overflow-hidden relative"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0F1E33] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-12"
        >
          {/* ── Left Column: Cinematic Unsplash Image Showcase (55%) ── */}
          <div className="relative lg:col-span-7 h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden group shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=85"
              alt="Bahrain International Airport Expansion Project"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-95"
              unoptimized
            />
            {/* Dark Gradient Edge Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E33]/80 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Badge overlay on image */}
            <div className="absolute top-5 left-5 z-20 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>FLAGSHIP LANDMARK</span>
            </div>
          </div>

          {/* ── Right Column: Content & Specs (45%) ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <span
              className="mb-3 block text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: '#C8102E' }}
            >
              FEATURED MEGA PROJECT
            </span>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Bahrain International Airport{' '}
              <span style={{ color: '#C8102E' }} className="font-black">
                Expansion
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              A landmark infrastructure mega-project that expanded Bahrain&apos;s primary international gateway, enhancing passenger capacity and operational efficiency to power the Kingdom&apos;s economic growth.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {details.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {item.value}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-[#A80D25] w-fit"
                style={{ backgroundColor: '#C8102E' }}
              >
                <span>Explore Landmark Details</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

