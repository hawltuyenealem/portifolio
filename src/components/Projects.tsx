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
          Screenshots use JPG, PNG, or WebP in{' '}
          <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-sm text-cyan-200/95">
            public/projects/
          </code>{' '}
          — reference as{' '}
          <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-sm text-cyan-200/95">
            /projects/filename.jpg
          </code>{' '}
          in <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-sm text-cyan-200/95">portfolio.ts</code>.
        </p>
      </SectionHeading>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/35 shadow-xl shadow-black/30 ring-1 ring-white/[0.04]"
              whileHover={{ y: -8 }}
              transition={springSoft}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-600/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <ProjectImage src={p.imageUrl} title={p.title} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/20 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-xs text-zinc-400"
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
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400"
                    whileHover={{ x: 4, color: '#67e8f9' }}
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
