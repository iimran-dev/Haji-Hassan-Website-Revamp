'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Building2, Coins } from 'lucide-react'
import Image from 'next/image'
import { siteData } from '@/data/site-data'

const FILTERS = [
  'All Projects',
  'Infrastructure',
  'Buildings',
  'Industrial',
  'Roads',
] as const
type Filter = (typeof FILTERS)[number]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All Projects')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filteredProjects =
    selectedFilter === 'All Projects'
      ? siteData.projects
      : siteData.projects.filter(
          (p) => p.industry.toLowerCase() === selectedFilter.toLowerCase()
        )

  return (
    <section
      id="projects"
      className="w-full py-12 sm:py-20 lg:py-32 bg-[#F8F9FA] overflow-hidden"
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
              FEATURED PROJECTS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081A2B] tracking-tight leading-[1.1]">
              Building Landmarks.
              <br />
              Delivering{' '}
              <span style={{ color: '#C8102E' }} className="font-black">
                Excellence.
              </span>
            </h2>
          </div>

          {/* Right Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FILTERS.map((filter) => {
              const isActive = selectedFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-[#C8102E] text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── 4 Project Cards Grid ── */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6"
        >
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group relative aspect-[3/3.8] sm:aspect-[3/4.2] w-full rounded-2xl overflow-hidden bg-[#0F1E33] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-3.5 sm:p-6"
            >
              {/* Unsplash Background Image */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110 brightness-95 group-hover:brightness-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
              />

              {/* Multi-stop Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/95 via-[#0B1528]/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Bottom Content Area */}
              <div className="relative z-20 flex flex-col justify-end w-full pt-16">
                {/* Title & Subtitle */}
                <h3 className="font-heading font-bold text-white text-lg sm:text-xl leading-tight group-hover:text-red-400 transition-colors mb-0.5">
                  {project.name}
                </h3>
                {project.subtitle && (
                  <p className="text-slate-300 text-xs sm:text-sm font-normal mb-4">
                    {project.subtitle}
                  </p>
                )}

                {/* Bottom Meta Badges */}
                <div className="flex items-center justify-between gap-2 border-t border-white/15 pt-3 mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Building2 className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                    <span>{project.industry}</span>
                  </div>

                  {project.value && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <Coins className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                      <span>{project.value}</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

