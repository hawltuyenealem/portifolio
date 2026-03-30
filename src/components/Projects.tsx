import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/portfolio'
import { springSoft } from '../lib/motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false)
  const reduce = useReducedMotion()

  if (failed) {
    return (
      <div className="flex h-full min-h-[12rem] flex-col items-center justify-center gap-2 bg-zinc-800/80 px-4 text-center">
        <p className="text-sm font-medium text-zinc-300">{title}</p>
        <p className="text-xs text-zinc-500">
          Image missing — add the file under <code className="text-cyan-500/90">public/projects/</code>
        </p>
      </div>
    )
  }

  return (
    <motion.img
      src={src}
      alt={title}
      width={900}
      height={675}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-center"
      whileHover={reduce ? {} : { scale: 1.06 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onError={() => setFailed(true)}
    />
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="Projects" title="Selected work">
        <p className="max-w-xl text-zinc-400">
          A selection of product work across mobile and web, focused on performance, maintainability, and user
          experience.
        </p>
      </SectionHeading>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-zinc-900/35 shadow-xl shadow-black/35 ring-1 ring-white/[0.05] backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-cyan-500/10"
              whileHover={{ y: -8 }}
              transition={springSoft}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <ProjectImage src={p.imageUrl} title={p.title} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/20 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-300">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-300/15 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-100/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link !== '#' ? (
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    Open project
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </motion.a>
                ) : (
                  <p className="mt-6 text-sm text-zinc-500">Link available on request.</p>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
