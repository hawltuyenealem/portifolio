import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/portfolio'
import { easeOut } from '../lib/motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06060a]/75 backdrop-blur-2xl backdrop-saturate-150"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <motion.a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            {profile.initials}
          </span>
        </motion.a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            className="hidden rounded-full border border-cyan-500/35 bg-cyan-500/[0.12] px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_24px_-8px_rgba(34,211,238,0.4)] sm:inline-flex"
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(34, 211, 238, 0.18)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            Let&apos;s talk
          </motion.a>
          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="border-t border-white/[0.06] bg-[#06060a]/98 px-5 py-4 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg py-2.5 pl-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 rounded-full border border-cyan-500/40 bg-cyan-500/12 py-2.5 text-center text-sm font-medium text-cyan-200"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
