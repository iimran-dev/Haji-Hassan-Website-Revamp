'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { siteData } from '@/data/site-data'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
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
      className="bg-white py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between lg:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div>
            <span
              className="mb-2 block text-sm font-semibold uppercase tracking-widest"
              style={{ color: CORPORATE_RED }}
            >
              LATEST NEWS
            </span>
            <h2
              className="font-heading text-3xl font-bold md:text-4xl"
              style={{ color: DARK_NAVY }}
            >
              News &amp; Insights
            </h2>
          </div>

          <a
            href="#"
            className="mt-2 text-sm font-semibold hover:underline sm:mt-0"
            style={{ color: CORPORATE_RED }}
            onClick={(e) => e.preventDefault()}
          >
            View All
          </a>
        </motion.div>

        {/* ── News Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={cardContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {siteData.news.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function NewsCard({
  title,
  category,
  date,
  image,
}: {
  title: string
  category: string
  date: string
  excerpt: string
  image: string
}) {
  return (
    <motion.article
      variants={cardVariants}
      className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Category Badge */}
        <span
          className="inline-block rounded-full bg-[#F8F9FB] px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
        >
          {category}
        </span>

        {/* Headline */}
        <h3
          className="mt-3 mb-3 line-clamp-2 text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-corporate-red"
          style={{
            color: DARK_NAVY,
            fontFamily: 'var(--font-manrope), system-ui, sans-serif',
          }}
        >
          {title}
        </h3>

        {/* Date */}
        <div className="mb-4 flex items-center gap-1.5 text-sm text-gray-400">
          <Calendar className="size-3.5" strokeWidth={2} />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>

        {/* Read More */}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200"
          style={{ color: CORPORATE_RED }}
          onClick={(e) => e.preventDefault()}
        >
          Read More
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  )
}
