import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const qa = [
  {
    q: 'Is my data secure and HIPAA compliant?',
    a: 'Yes. We use encryption in transit and at rest, role-based access controls, and maintain detailed audit logs. Our infrastructure aligns with HIPAA best practices.'
  },
  {
    q: 'Can I migrate from my existing system?',
    a: 'Absolutely. Our team assists with secure imports of patients, appointments, and billing history. Most practices are fully migrated in a few days.'
  },
  {
    q: 'How does the free trial work?',
    a: 'You get 14 days with all features enabled. No credit card is required. You can invite teammates and test automations without limits.'
  },
  {
    q: 'Do you offer support and training?',
    a: 'Yes. Live chat and email support is included on all plans. Growth and Scale plans include onboarding sessions and priority support.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Everything you need to know before getting started.</p>
        </div>

        <div className="mt-10 divide-y divide-white/70 rounded-2xl border border-white/70 bg-white/70 backdrop-blur">
          {qa.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="p-5 sm:p-6">
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-slate-800 pr-6">{item.q}</span>
                  <span className="shrink-0 rounded-lg border border-white/70 bg-white/70 p-1.5 text-slate-700">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
