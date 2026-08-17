'use client'

import { useRef } from 'react'
import { Award, ShieldCheck } from 'lucide-react'
import { siteData } from '@/data/site-data'

const awardIcons = [Award, ShieldCheck]

export function AwardsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return
    const scrollAmount = 280
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="awards"
      className="bg-[#F8F9FB] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#C41230]">
            Recognition
          </span>
          <h2 className="font-['Manrope'] text-3xl font-bold text-[#081A2B] md:text-4xl">
            Awards &amp; Certifications
          </h2>
        </div>

        {/* Horizontal scrollable awards */}
        <div
          ref={containerRef}
          role="list"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="group flex gap-6 overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          aria-label="Awards and certifications"
        >
          {siteData.awards.map((award, index) => {
            const IconComponent = awardIcons[index % awardIcons.length]
            return (
              <div
                key={award.name}
                role="listitem"
                className="group/item flex w-64 min-w-[16rem] flex-shrink-0 flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <IconComponent className="h-8 w-8 text-[#C41230]" aria-hidden="true" />
                <h3 className="mt-3 text-center font-['Manrope'] text-lg font-bold text-[#081A2B]">
                  {award.name}
                </h3>
                <p className="mt-1 text-center text-sm text-gray-500">
                  {award.organization}
                </p>
                <span className="mt-2 text-xs uppercase text-gray-400">
                  {award.year}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
