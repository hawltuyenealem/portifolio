import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOut } from '../lib/motion'

type SectionHeadingProps = {
  kicker: string
  title: string
  children?: ReactNode
  className?: string
}

export function SectionHeading({ kicker, title, children, className = '' }: SectionHeadingProps) {
  const reduce = useReducedMotion()

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="mb-3 inline-flex items-center gap-3"
        initial={{ opacity: 0, x: reduce ? 0 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: reduce ? 0.15 : 0.5, ease: easeOut }}
      >
        <span className="h-px w-8 bg-gradient-to-r from-cyan-500/80 to-transparent" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/95">{kicker}</p>
      </motion.div>
      <motion.h2
        className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl md:leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: reduce ? 0.15 : 0.55, delay: reduce ? 0 : 0.05, ease: easeOut }}
      >
        {title}
      </motion.h2>
      {children ? (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.15 : 0.5, delay: reduce ? 0 : 0.12, ease: easeOut }}
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  )
}
