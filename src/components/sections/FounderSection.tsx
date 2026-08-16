'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { siteData } from '@/data/site-data'

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const timelineContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const timelineItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const timelineRef = useRef<HTMLDivElement>(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      className="py-20 lg:py-32"
      style={{ backgroundColor: '#F8F9FB' }}
    >
      {/* Editorial Split */}
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left Column — Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full lg:w-[40%] min-h-[400px] lg:min-h-[520px] relative rounded-lg overflow-hidden group"
          >
            <Image
              src="/images/founder-portrait.jpg"
              alt="Haji Hassan Group founder portrait"
              fill
              className="object-cover h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={false}
            />
          </motion.div>

          {/* Right Column — Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full lg:w-[60%] flex flex-col justify-center"
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#C8102E' }}
            >
              Our Heritage
            </span>

            <h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: '#081A2B' }}
            >
              {siteData.founder.headline}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {siteData.founder.description}
            </p>

            {/* Signature with decorative line */}
            <div className="mt-8">
              <div
                className="w-12 h-0.5 mb-4"
                style={{ backgroundColor: '#C8102E' }}
              />
              <span className="font-heading italic text-gray-400">
                {siteData.founder.signature}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="mt-24 lg:mt-32">
          <h3
            className="font-heading text-2xl md:text-3xl font-bold mb-12"
            style={{ color: '#081A2B' }}
          >
            Our Journey
          </h3>

          <motion.div
            variants={timelineContainerVariants}
            initial="hidden"
            animate={isTimelineInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Vertical connecting line */}
            <div
              className="absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-px"
              style={{ backgroundColor: '#E5E7EB' }}
            />

            <div className="flex flex-col gap-10">
              {siteData.timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={timelineItemVariants}
                  className="relative flex gap-6 lg:gap-8 items-start"
                >
                  {/* Year badge — red circle */}
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white text-xs lg:text-sm font-bold font-heading"
                    style={{ backgroundColor: '#C8102E' }}
                  >
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="pt-1 lg:pt-2">
                    <h4
                      className="font-heading text-lg lg:text-xl font-semibold mb-1"
                      style={{ color: '#081A2B' }}
                    >
                      {milestone.title}
                    </h4>
                    <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xl">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
