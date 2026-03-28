import { motion } from 'framer-motion'
import { profile, socialLinks } from '../data/portfolio'

export function Footer() {
  return (
    <motion.footer
      className="border-t border-white/[0.06] bg-[#06060a]/80 py-12 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 md:flex-row">
        <p className="text-center text-sm text-zinc-500 md:text-left">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-cyan-400"
              whileHover={{ y: -2 }}
            >
              {s.label}
            </motion.a>
          ))}
        </div>
        <a
          href="#top"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-cyan-400"
        >
          Back to top ↑
        </a>
      </div>
    </motion.footer>
  )
}
