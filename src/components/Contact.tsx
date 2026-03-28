import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-cyan-500/[0.12] via-zinc-900/90 to-violet-600/[0.12] p-10 shadow-2xl shadow-black/40 ring-1 ring-white/[0.06] md:p-14">
          <motion.div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"
            animate={
              reduce
                ? {}
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.35, 0.55, 0.35],
                  }
            }
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl"
            animate={
              reduce
                ? {}
                : {
                    scale: [1.05, 1, 1.05],
                    opacity: [0.25, 0.45, 0.25],
                  }
            }
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/95">Contact</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let&apos;s build something great
            </h2>
            <p className="mt-4 max-w-lg text-zinc-400">
              Reach out for roles, collaborations, or a quick chat about your next product.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20"
                whileHover={reduce ? {} : { scale: 1.03, boxShadow: '0 12px 40px -8px rgba(255,255,255,0.35)' }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              >
                {profile.email}
              </motion.a>
              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm"
                whileHover={reduce ? {} : { scale: 1.03, borderColor: 'rgba(255,255,255,0.35)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              >
                Download résumé
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
