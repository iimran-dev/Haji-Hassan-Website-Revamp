'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/data/site-data'

function CountUpNumber({
  target,
  inView,
}: {
  target: number
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  const animate = useCallback(() => {
    const duration = 2000 // ms
    const startTime = performance.now()

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [target])

  useEffect(() => {
    if (inView) {
      animate()
    }
  }, [inView, animate])

  return <>{count}</>
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="-mt-20 relative z-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-8 lg:p-12"
      >
        <div className="flex flex-row gap-4 lg:gap-0 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {siteData.stats.map((stat, index) => {
            const numericValue = parseInt(stat.value, 10)
            const isLast = index === siteData.stats.length - 1

            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`flex-1 min-w-[140px] lg:min-w-0 flex flex-col items-center text-center snap-center ${
                  !isLast ? 'lg:border-r lg:border-gray-200' : ''
                }`}
              >
                <div className="flex items-baseline justify-center">
                  <span
                    className="font-heading text-4xl lg:text-5xl font-extrabold"
                    style={{ color: '#081A2B' }}
                  >
                    <CountUpNumber
                      target={numericValue}
                      inView={isInView}
                    />
                  </span>
                  {stat.suffix && (
                    <span
                      className="font-heading text-4xl lg:text-5xl font-extrabold"
                      style={{ color: '#081A2B' }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500 uppercase tracking-wide mt-2">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
