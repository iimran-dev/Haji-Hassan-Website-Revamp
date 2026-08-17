'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CORPORATE_RED = '#C8102E'
const DARK_NAVY = '#081A2B'

interface StructureNode {
  label: string
  row: number
  col: number
}

const ROW2_NODES: StructureNode[] = [
  { label: 'Construction', row: 2, col: 0 },
  { label: 'Infrastructure', row: 2, col: 1 },
  { label: 'Ready Mix', row: 2, col: 2 },
]

const ROW3_NODES: StructureNode[] = [
  { label: 'Trading', row: 3, col: 0 },
  { label: 'Manufacturing', row: 3, col: 1 },
  { label: 'Services', row: 3, col: 2 },
]

function VerticalLine({
  delay,
  isInView,
}: {
  delay: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="mx-auto h-8 w-px origin-top bg-gray-300"
    />
  )
}

function HorizontalBranchLine({
  delay,
  isInView,
}: {
  delay: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="relative h-px origin-center bg-gray-300"
    />
  )
}

function NodeCard({
  label,
  delay,
  isInView,
  variant = 'default',
}: {
  label: string
  delay: number
  isInView: boolean
  variant?: 'default' | 'parent'
}) {
  const isParent = variant === 'parent'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={
        isParent
          ? 'flex w-full sm:w-auto items-center justify-center rounded-xl px-8 py-4 text-white shadow-lg'
          : 'flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:scale-[1.02] sm:hover:scale-105 hover:border-red-500/40 hover:shadow-md'
      }
      style={
        isParent
          ? {
              backgroundColor: DARK_NAVY,
              border: `2px solid ${CORPORATE_RED}`,
            }
          : undefined
      }
    >
      {isParent ? (
        <>
          <span className="font-heading text-lg font-bold">Haji Hassan</span>{' '}
          <span className="font-heading text-lg font-bold">Group</span>
        </>
      ) : (
        label
      )}
    </motion.div>
  )
}

export function GroupStructureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="structure" className="w-full bg-white py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest"
            style={{ color: CORPORATE_RED }}
          >
            Group Structure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-bold md:text-4xl"
            style={{ color: DARK_NAVY }}
          >
            An Integrated Business Ecosystem
          </motion.h2>
        </div>

        {/* ── Hierarchy Diagram ── */}
        <div ref={ref} className="flex flex-col items-center">
          {/* Row 1 — Parent Node */}
          <NodeCard label="Haji Hassan Group" delay={0.15} isInView={isInView} variant="parent" />

          {/* Vertical line from parent */}
          <VerticalLine delay={0.3} isInView={isInView} />

          {/* ── Desktop: Side-by-side rows ── */}
          {/* Row 2 — First 3 subsidiaries */}
          <div className="flex w-full flex-col items-center gap-0 md:gap-0">
            {/* Horizontal connector for row 2 */}
            <div className="hidden w-full md:block">
              <HorizontalBranchLine delay={0.45} isInView={isInView} />
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:mt-0 md:grid-cols-3 md:gap-6">
              {ROW2_NODES.map((node, i) => (
                <div key={node.label} className="flex flex-col items-center">
                  {/* Desktop: vertical drop from horizontal line */}
                  <div className="hidden h-8 md:block">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + i * 0.08,
                        ease: 'easeOut',
                      }}
                      className="h-full w-px origin-top bg-gray-300"
                    />
                  </div>
                  <NodeCard
                    label={node.label}
                    delay={0.5 + i * 0.1}
                    isInView={isInView}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vertical line between row 2 and row 3 */}
          <VerticalLine delay={0.7} isInView={isInView} />

          {/* Row 3 — Second 3 subsidiaries */}
          <div className="flex w-full flex-col items-center gap-0">
            <div className="hidden w-full md:block">
              <HorizontalBranchLine delay={0.85} isInView={isInView} />
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:mt-0 md:grid-cols-3 md:gap-6">
              {ROW3_NODES.map((node, i) => (
                <div key={node.label} className="flex flex-col items-center">
                  <div className="hidden h-8 md:block">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.9 + i * 0.08,
                        ease: 'easeOut',
                      }}
                      className="h-full w-px origin-top bg-gray-300"
                    />
                  </div>
                  <NodeCard
                    label={node.label}
                    delay={0.9 + i * 0.1}
                    isInView={isInView}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
