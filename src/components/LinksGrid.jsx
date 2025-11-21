import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: 'https://discord.com', label: 'Discord', icon: 'fa-brands fa-discord' },
  { href: 'https://twitter.com', label: 'Twitter', icon: 'fa-brands fa-x-twitter' },
  { href: 'https://github.com', label: 'GitHub', icon: 'fa-brands fa-github' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { href: 'https://steamcommunity.com', label: 'Steam', icon: 'fa-brands fa-steam' },
  { href: 'mailto:contact@flames.blue', label: 'Contact', icon: 'fa-solid fa-envelope' },
]

export default function LinksGrid() {
  return (
    <section className="relative py-14 md:py-20 bg-[#050510]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {links.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative h-36 rounded-2xl border border-indigo-500/20 bg-[#0b0b18]/80 backdrop-blur-sm flex flex-col items-center justify-center text-center text-white overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'radial-gradient(120px 120px at 50% -10%, rgba(0, 188, 255, 0.35), transparent 70%)'
              }} />

              {/* Animated edge highlight */}
              <span className="pointer-events-none absolute -inset-px rounded-2xl bg-[linear-gradient(120deg,rgba(0,114,255,0.25),transparent_30%_70%,rgba(168,85,247,0.25))] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <i className={`${item.icon} text-4xl mb-3 text-cyan-300 group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(0,188,255,0.35)]`}></i>
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Background shimmer lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent"
          animate={{ x: ['10%', '-10%', '10%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
