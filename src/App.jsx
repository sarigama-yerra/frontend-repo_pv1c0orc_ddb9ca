import React from 'react'
import Hero from './components/Hero'
import LinksGrid from './components/LinksGrid'

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Hero with animated Spline background */}
      <Hero />

      {/* Links grid with hover glow and subtle motion */}
      <LinksGrid />

      {/* Bottom section with soft animated background accents */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold text-blue-100/90">Thanks for visiting</h2>
          <p className="mt-3 text-blue-200/70">Tap a card to connect. More vibes coming soon.</p>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-5xl h-72 rounded-full bg-[radial-gradient(closest-side,rgba(0,114,255,0.18),transparent_70%)] blur-2xl" />
        </div>
      </section>
    </div>
  )
}

export default App
