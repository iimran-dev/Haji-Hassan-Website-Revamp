'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { siteData } from '@/data/site-data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function CompaniesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="companies"
      className="w-full py-12 sm:py-20 lg:py-32 bg-[#0B1528] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-6">
          {/* Left Title */}
          <div>
            <span
              className="mb-3 block text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: '#C8102E' }}
            >
              OUR BUSINESSES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              A Strong Group of
              <br />
              Diverse{' '}
              <span style={{ color: '#C8102E' }} className="font-black">
                Companies
              </span>
            </h2>
          </div>

          {/* Right Description & Action Link */}
          <div className="max-w-md lg:text-left">
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-4">
              Our group operates through 16+ companies across key sectors,
              delivering excellence and creating value for Bahrain and beyond.
            </p>
            <a
              href="#companies"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-red-400 transition-colors"
            >
              <span>View All Companies</span>
              <ArrowRight className="h-4 w-4 text-[#C8102E] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ── 6 Vertical Image Cards Grid ── */}
        <motion.div
          ref={ref}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5"
        >
          {siteData.companies.map((company) => (
            <motion.article
              key={company.slug}
              variants={fadeUp}
              className="group relative aspect-[3/3.8] sm:aspect-[3/4.2] w-full rounded-2xl overflow-hidden bg-[#0F1E33] border border-white/10 shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer flex flex-col justify-end p-3.5 sm:p-5"
            >
              {/* Unsplash Background Image */}
              <Image
                src={company.image}
                alt={company.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                unoptimized
              />

              {/* Multi-stop Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Bottom Content Area - Fixed Equalized Alignment */}
              <div className="relative z-20 flex flex-col justify-end w-full pt-16">
                <div className="flex items-end justify-between gap-2.5 w-full min-h-[3.5rem]">
                  <h3 className="font-heading font-bold text-white text-base leading-snug group-hover:text-red-400 transition-colors flex-1">
                    {company.name}
                  </h3>

                  {/* Red Arrow Circle Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 text-red-500 flex-shrink-0 group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:text-white transition-all duration-300 shadow-md">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

