'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Target,
  Building2,
  Users,
  Briefcase,
  Coins,
  Layers,
} from 'lucide-react'
import { siteData } from '@/data/site-data'

const STAT_ICONS = [
  <Target key="target" className="h-4 w-4 text-red-500" />,
  <Building2 key="building" className="h-4 w-4 text-red-500" />,
  <Users key="users" className="h-4 w-4 text-red-500" />,
  <Briefcase key="briefcase" className="h-4 w-4 text-red-500" />,
  <Coins key="coins" className="h-4 w-4 text-red-500" />,
  <Layers key="layers" className="h-4 w-4 text-red-500" />,
]

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

  return <>{count >= 1000 ? count.toLocaleString() : count}</>
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="-mt-24 sm:-mt-28 md:-mt-32 relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="rounded-2xl p-6 sm:p-7 lg:p-8 shadow-2xl border border-white/20 overflow-hidden"
        style={{
          backgroundColor: 'rgba(11, 21, 40, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 items-center">
          {siteData.stats.map((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/,/g, ''), 10)

            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex flex-col items-start justify-center"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 text-red-500 flex-shrink-0 shadow-inner">
                    {STAT_ICONS[index % STAT_ICONS.length]}
                  </div>
                  <div className="flex items-baseline">
                    <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      <CountUpNumber
                        target={numericValue}
                        inView={isInView}
                      />
                    </span>
                    {stat.suffix && (
                      <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-slate-300/80 font-medium tracking-wide mt-1.5 line-clamp-1">
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

