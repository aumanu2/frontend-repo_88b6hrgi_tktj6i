import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tooth, Menu, X } from 'lucide-react'

const glowPulse = {
  animate: { opacity: [0.15, 0.5, 0.15], scale: [1, 1.03, 1] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = 'px-2 py-1 hover:text-slate-900'

  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-white/60 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <motion.span className="absolute -inset-2 rounded-full bg-sky-200/60 blur-xl" {...glowPulse} />
            <Tooth className="relative z-10 w-7 h-7 text-sky-700" />
          </div>
          <span className="text-lg font-semibold">SmilesCloud</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className={linkClasses}>Features</a>
          <a href="#pricing" className={linkClasses}>Pricing</a>
          <a href="#testimonials" className={linkClasses}>Testimonials</a>
          <a href="#contact" className={linkClasses}>Contact</a>
          <button className="rounded-full bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-white/70 ring-1 ring-white/60"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/60 bg-white/80 backdrop-blur"
          >
            <div className="px-4 py-3 grid gap-2 text-sm">
              <a href="#features" className="py-2" onClick={() => setOpen(false)}>Features</a>
              <a href="#pricing" className="py-2" onClick={() => setOpen(false)}>Pricing</a>
              <a href="#testimonials" className="py-2" onClick={() => setOpen(false)}>Testimonials</a>
              <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
              <button className="mt-2 w-full rounded-xl bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800" onClick={() => setOpen(false)}>
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
