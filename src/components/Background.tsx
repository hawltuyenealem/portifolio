import { motion } from 'framer-motion'

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <motion.div
        className="absolute -left-32 top-0 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-cyan-500/18 blur-[100px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.52, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-1/4 h-[min(380px,45vw)] w-[min(380px,45vw)] rounded-full bg-violet-600/14 blur-[100px]"
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.28, 0.46, 0.28] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[min(320px,40vw)] w-[min(320px,40vw)] rounded-full bg-fuchsia-500/10 blur-[90px]"
        animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-emerald-500/8 blur-[80px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
