import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'
import { easeOut } from '../lib/motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Skills" title="What I work with" />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.07}>
            <motion.div
              className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-6 shadow-lg shadow-black/20 ring-1 ring-white/[0.04] transition-colors hover:border-cyan-500/25 hover:from-white/[0.07]"
              whileHover={reduce ? {} : { y: -4 }}
              transition={{ type: 'spring', stiffness: 360, damping: 26 }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="relative font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {group.title}
              </h3>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <motion.li
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300 transition-colors group-hover:border-cyan-500/20 group-hover:text-zinc-200"
                    initial={false}
                    whileHover={reduce ? {} : { scale: 1.04 }}
                    transition={{ duration: 0.2, delay: j * 0.02, ease: easeOut }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
