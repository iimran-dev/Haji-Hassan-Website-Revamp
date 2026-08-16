'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { siteData } from '@/data/site-data'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'
const CARD_BG = '#0F2A42'

export function CompaniesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="companies"
      className="w-full py-20 lg:py-32"
      style={{ backgroundColor: DARK_NAVY }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-14 text-center lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest"
            style={{ color: CORPORATE_RED }}
          >
            Our Businesses
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading mx-auto max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Powering Progress Across Industries
          </motion.h2>
        </div>

        {/* ── Cards Grid ── */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteData.companies.map((company, idx) => (
            <motion.article
              key={company.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/30"
              style={{ backgroundColor: CARD_BG }}
            >
              {/* Red accent line on hover */}
              <span
                className="absolute inset-x-0 top-0 z-10 h-[3px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: CORPORATE_RED }}
              />

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${CORPORATE_RED}18`,
                    color: CORPORATE_RED,
                  }}
                >
                  {company.industry}
                </span>

                <h3 className="font-heading mb-2 text-xl font-bold text-white">
                  {company.name}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                  {company.description}
                </p>

                <a
                  href={`#companies`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-200 hover:translate-x-1"
                  style={{ color: CORPORATE_RED }}
                  onClick={(e) => e.preventDefault()}
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
