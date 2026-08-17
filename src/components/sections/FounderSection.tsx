'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, User } from 'lucide-react'
import { siteData } from '@/data/site-data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const { founder, timeline } = siteData

  return (
    <section
      id="about"
      className="py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column — Text & Signature */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <span
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3 block"
              style={{ color: '#C8102E' }}
            >
              WHO WE ARE
            </span>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081A2B] leading-[1.15] mb-6">
              A Legacy Built on
              <br />
              Trust and{' '}
              <span style={{ color: '#C8102E' }} className="font-black">
                Excellence
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Established in 1952,{' '}
              <strong className="text-slate-800 font-semibold">
                Haji Hassan Group
              </strong>{' '}
              has grown from a single vision into one of Bahrain&apos;s most
              respected and diversified business groups.
              <br />
              Our commitment to quality, innovation, and integrity has shaped
              the nation&apos;s progress and infrastructure.
            </p>

            {/* Signature Block */}
            <div className="mt-4 mb-8">
              <div className="font-serif italic text-3xl sm:text-4xl text-slate-800 font-normal tracking-wide mb-2 select-none">
                {founder.signature}
              </div>
              <p className="text-xs text-slate-500 font-medium leading-snug">
                The Late Haji Hassan Al-Ali
                <br />
                <span className="text-slate-400">(The Founder)</span>
              </p>
            </div>

            {/* Read Our Story Button */}
            <a
              href="#heritage"
              className="group inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition-all duration-300 hover:scale-105 hover:bg-[#A80D25] w-fit"
              style={{ backgroundColor: '#C8102E' }}
            >
              <span>Read Our Story</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Middle Column — Founder Portrait Placeholder */}
          <div className="lg:col-span-4 flex justify-center relative my-4 lg:my-0">
            <div className="relative w-full max-w-md h-[380px] sm:h-[450px] lg:h-[480px] rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100/80 flex flex-col items-center justify-center p-6 text-center shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md text-slate-400 mb-4 border border-slate-200">
                <User className="h-10 w-10 stroke-[1.5]" />
              </div>
              <span className="text-sm font-semibold text-slate-700 mb-1">
                Founder Portrait
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Image Placeholder
              </span>
            </div>
          </div>

          {/* Right Column — Our Journey Timeline Card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-100">
              <h3
                className="font-heading text-xl font-bold mb-6"
                style={{ color: '#C8102E' }}
              >
                Our Journey
              </h3>

              <div className="relative pl-6 space-y-7">
                {/* Connecting Vertical Red Line */}
                <div className="absolute left-[5px] top-2 bottom-3 w-0.5 bg-red-200" />

                {timeline.map((item) => (
                  <div key={item.year} className="relative">
                    {/* Red Dot Bullet */}
                    <div className="absolute -left-[24px] top-1 h-3 w-3 rounded-full bg-[#C8102E] border-2 border-white shadow-sm z-10" />

                    {/* Year Label */}
                    <h4
                      className="font-heading text-base font-bold mb-1"
                      style={{ color: '#C8102E' }}
                    >
                      {item.year}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-normal font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

