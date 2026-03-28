import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOut } from '../lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 28,
      filter: reduce ? 'blur(0px)' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: reduce ? 0.2 : 0.58,
        delay: reduce ? 0 : delay,
        ease: easeOut,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px', amount: 0.15 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
