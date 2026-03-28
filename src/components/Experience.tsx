import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Experience" title="Professional experience" />

      <div className="relative mt-16 md:pl-4">
        <div
          className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-cyan-500/70 via-white/15 to-transparent md:left-[15px]"
          aria-hidden
        />
        <ol className="relative space-y-0">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.07}>
              <li className="relative pb-16 pl-10 last:pb-0 md:pl-12">
                <motion.span
                  className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400/90 bg-[#06060a] shadow-[0_0_16px_-2px_rgba(34,211,238,0.6)] md:left-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22, delay: i * 0.05 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </motion.span>
                <p className="text-sm font-semibold text-cyan-400/95">{job.period}</p>
                <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white">
                  {job.role}
                  <span className="font-normal text-zinc-500"> · </span>
                  <span>{job.company}</span>
                </h3>
                <ul className="mt-4 max-w-2xl space-y-2.5 text-zinc-400">
                  {job.bullets.map((line) => (
                    <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
