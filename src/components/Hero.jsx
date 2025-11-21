import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ppI7eAudW7IbKhKs/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#050510]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.35),transparent)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(40%_30%_at_80%_10%,rgba(168,85,247,0.25),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-5xl px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]"
        >
          Flames.Blue
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-lg md:text-xl text-blue-100/90"
        >
          Welcome to my portal
        </motion.p>

        {/* Floating glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/4 top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-1/5 bottom-16 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl"
            animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
