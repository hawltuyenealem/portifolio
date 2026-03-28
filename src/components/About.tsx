import { profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 -translate-y-1/2 bg-gradient-to-b from-cyan-500/[0.07] to-transparent blur-3xl"
        aria-hidden
      />
      <SectionHeading kicker="About" title="Building products end to end">
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">{profile.summary}</p>
      </SectionHeading>
    </section>
  )
}
