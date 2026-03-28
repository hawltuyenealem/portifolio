import { motion, useReducedMotion } from 'framer-motion'
import { profile, socialLinks } from '../data/portfolio'
import { easeOut } from '../lib/motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-28 pt-14 md:flex-row md:items-center md:justify-between md:pb-36 md:pt-20"
    >
      <motion.div
        className="max-w-xl space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400/95 shadow-[0_0_24px_-8px_rgba(34,211,238,0.35)] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Available for opportunities
        </motion.p>
        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]"
        >
          {profile.name}
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent animate-gradient-text">
            {profile.role}
          </span>
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-md text-lg leading-relaxed text-zinc-400"
        >
          {profile.headline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-3">
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25"
            whileHover={reduce ? {} : { scale: 1.03, boxShadow: '0 12px 40px -12px rgba(34, 211, 238, 0.45)' }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          >
            View work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm"
            whileHover={reduce ? {} : { scale: 1.03, borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(255,255,255,0.06)' }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          >
            Contact
          </motion.a>
        </motion.div>
        <motion.div variants={item} className="flex flex-wrap gap-5 pt-1">
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-cyan-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.55 + i * 0.06, duration: 0.4, ease: easeOut }}
            >
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mx-auto shrink-0 md:mx-0"
        initial={{ opacity: 0, scale: 0.94, rotate: reduce ? 0 : 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.75, delay: 0.15, ease: easeOut }}
      >
        <motion.div
          className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/25 via-transparent to-violet-600/25 blur-2xl"
          aria-hidden
          animate={
            reduce
              ? {}
              : {
                  opacity: [0.5, 0.85, 0.5],
                  scale: [1, 1.03, 1],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-zinc-900/50 shadow-2xl shadow-black/40 ring-1 ring-white/[0.06]"
          whileHover={reduce ? {} : { y: -6 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          <motion.img
            src={profile.portraitUrl}
            alt=""
            width={400}
            height={480}
            className="aspect-[5/6] w-[min(100%,380px)] object-cover"
            animate={reduce ? {} : { scale: [1, 1.02, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060a]/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 mix-blend-soft-light" />
          <p className="absolute bottom-4 left-4 right-4 font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white drop-shadow-md">
            {profile.location}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
