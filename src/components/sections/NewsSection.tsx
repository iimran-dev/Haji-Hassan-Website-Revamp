'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="media"
      ref={sectionRef}
      className="w-full bg-[#F8F9FA] py-12 sm:py-20 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* ── Left Column: Careers Banner Card (6 Cols) ── */}
          <div className="relative lg:col-span-6 rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 lg:p-12 shadow-2xl group cursor-pointer border border-slate-200/50">
            {/* Unsplash Engineers Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
              alt="Build Your Future With Haji Hassan Group"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 brightness-90"
              unoptimized
            />

            {/* Dark Multi-stop Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081A2B]/95 via-[#081A2B]/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-95" />

            {/* Content Area */}
            <div className="relative z-20 flex flex-col justify-end w-full">
              <span
                className="mb-3 block text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: '#C8102E' }}
              >
                CAREERS
              </span>

              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
                Build Your Future
                <br />
                With Us
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                Join a team of passionate professionals and be part of a legacy that continues to build the future.
              </p>

              <div>
                <a
                  href="#careers"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#081A2B] group-hover:border-white shadow-lg w-fit"
                >
                  <span>Explore Careers</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right Column: Latest News & Announcements (6 Cols) ── */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            {/* Header */}
            <div>
              <span
                className="mb-2 block text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: '#C8102E' }}
              >
                LATEST NEWS
              </span>

              <h2 className="font-heading font-extrabold text-[#081A2B] text-3xl sm:text-4xl leading-tight tracking-tight mb-3">
                Latest Updates
                <br />
                &amp; Announcements
              </h2>

              <a
                href="#media"
                className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-200 mb-8 group cursor-pointer"
                style={{ color: '#C8102E' }}
              >
                <span className="hover:underline">View All News</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Compact Vertical News Rows */}
            <div className="space-y-4 sm:space-y-5">
              {siteData.news.map((item) => (
                <article
                  key={item.title}
                  className="group flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl border border-transparent hover:border-slate-200/80 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-20 w-24 sm:h-24 sm:w-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 96px, 112px"
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-[#081A2B] text-sm sm:text-base leading-snug group-hover:text-red-600 transition-colors line-clamp-2 mb-1.5">
                      {item.title}
                    </h3>
                    <time
                      dateTime={item.date}
                      className="text-xs text-slate-400 font-medium block"
                    >
                      {formatDate(item.date)}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

