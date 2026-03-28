/** Shared easing & springs for consistent motion across the site */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const springSoft = { type: 'spring' as const, stiffness: 320, damping: 28, mass: 0.8 }
export const springSnappy = { type: 'spring' as const, stiffness: 420, damping: 32 }
