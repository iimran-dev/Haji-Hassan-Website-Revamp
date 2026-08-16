'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { siteData } from '@/data/site-data'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

const FILTERS = ['All', 'Infrastructure', 'Roads', 'Industrial', 'Commercial'] as const
type Filter = (typeof FILTERS)[number]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
  exit: { opacity: 0, y: -15, transition: { duration: 0.25 } },
}

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All')

  const filteredProjects =
    selectedFilter === 'All'
      ? siteData.projects
      : siteData.projects.filter((p) => p.industry === selectedFilter)

  return (
    <section
      id="projects"
      className="w-full py-20 lg:py-32"
      style={{ backgroundColor: '#F8F9FB' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: CORPORATE_RED }}
          >
            Our Projects
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif', color: DARK_NAVY }}
          >
            Building Landmarks. Delivering Excellence.
          </h2>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10"
        >
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-none">
            {FILTERS.map((filter) => {
              const isActive = selectedFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={
                    'relative flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer'
                  }
                  style={{
                    backgroundColor: isActive ? CORPORATE_RED : 'transparent',
                    color: isActive ? '#FFFFFF' : '#111827',
                    border: isActive
                      ? `1px solid ${CORPORATE_RED}`
                      : '1px solid #D1D5DB',
                  }}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className={
                  'group relative overflow-hidden rounded-lg bg-white transition-shadow duration-300'
                }
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                }}
                whileHover={{
                  boxShadow:
                    '0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05)',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Industry Badge */}
                  <span
                    className={
                      'inline-block rounded-full px-3 py-0.5 text-xs font-semibold mb-3'
                    }
                    style={{
                      backgroundColor:
                        project.industry === 'Infrastructure'
                          ? CORPORATE_RED
                          : '#F3F4F6',
                      color:
                        project.industry === 'Infrastructure'
                          ? '#FFFFFF'
                          : '#4B5563',
                    }}
                  >
                    {project.industry}
                  </span>

                  {/* Project Name */}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                      color: DARK_NAVY,
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                    <MapPin className="size-3.5 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  {/* Year */}
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>

                {/* Hover accent border-bottom */}
                <span
                  className={
                    'absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100'
                  }
                  style={{ backgroundColor: CORPORATE_RED }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
