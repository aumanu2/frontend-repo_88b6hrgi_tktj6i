import React from 'react'
import { motion } from 'framer-motion'
import { Tooth, CalendarDays, ShieldCheck, CreditCard, Sparkles, LineChart, MessageSquare, Wand2, CheckCircle2, Star, ArrowRight } from 'lucide-react'
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

const glowPulse = {
  animate: { opacity: [0.15, 0.5, 0.15], scale: [1, 1.03, 1] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/70 text-sky-700 ring-1 ring-sky-200 shadow-sm backdrop-blur">
      <Sparkles className="w-3.5 h-3.5" />
      {children}
    </span>
  )
}

function FeatureCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      variants={item}
      transition={{ delay }}
      className="group relative rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition-all"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-700 ring-1 ring-white">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function PricingCard({ name, price, features, highlighted }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`relative rounded-2xl border p-6 backdrop-blur-lg ${
        highlighted
          ? 'bg-white/80 border-sky-200 shadow-2xl'
          : 'bg-white/70 border-white/60 shadow-xl'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-sky-600 text-white px-3 py-1 rounded-full shadow">
          Most Popular
        </div>
      )}
      <div className="flex items-baseline gap-2">
        <h4 className="text-lg font-semibold text-slate-800">{name}</h4>
      </div>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">${price}</span>
        <span className="text-slate-500">/mo</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 className="w-4.5 h-4.5 mt-0.5 text-sky-600" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors shadow ${
        highlighted
          ? 'bg-sky-600 text-white hover:bg-sky-700'
          : 'bg-slate-900 text-white hover:bg-slate-800'
      }`}>
        Start free trial <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-white text-slate-800">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-24 -left-10 h-56 w-56 rounded-full bg-sky-200/60 blur-[60px]"
            {...glowPulse}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-cyan-200/60 blur-[70px]"
            {...glowPulse}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="relative">
            <Badge>Modern dental SaaS for growing practices</Badge>
            <motion.h1 variants={item} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Give your patients a brilliant experience
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-slate-600 text-lg">
              All-in-one platform for scheduling, reminders, billing and insights. Designed with dentists, for dentists.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3 font-semibold shadow hover:bg-sky-700">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white/70 ring-1 ring-slate-200 text-slate-900 px-5 py-3 font-semibold shadow hover:bg-white">
                See how it works
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-yellow-300'}`} />
              ))}
              <span className="text-sm text-slate-600">Loved by 1,200+ dental teams</span>
            </motion.div>
          </motion.div>

          {/* Animated mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <motion.div
                className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-sky-300/40 to-cyan-300/40 blur-2xl"
                {...glowPulse}
              />
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-gradient-to-b from-sky-50 to-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
                        <Tooth className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Today</p>
                        <p className="text-xs text-slate-500">Appointments</p>
                      </div>
                    </div>
                    <Badge>Live</Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { icon: CalendarDays, label: 'Schedule', value: '32' },
                      { icon: MessageSquare, label: 'Reminders', value: '118' },
                      { icon: CreditCard, label: 'Invoices', value: '24' },
                    ].map(({ icon: Icon, label, value }, i) => (
                      <motion.div
                        key={label}
                        whileHover={{ y: -3 }}
                        className="rounded-xl border border-white/70 bg-white/80 p-3 shadow backdrop-blur"
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-slate-500">{label}</span>
                        </div>
                        <div className="mt-2 text-2xl font-bold">{value}</div>
                        <motion.div
                          className="mt-2 h-1.5 rounded bg-sky-100"
                        >
                          <motion.div
                            className="h-1.5 rounded bg-sky-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${60 + i * 12}%` }}
                            transition={{ duration: 1, delay: 0.2 * i }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-white/70 bg-white/80 p-4 shadow">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700">
                        <LineChart className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">Revenue forecast</span>
                    </div>
                    <div className="mt-3 flex items-end gap-1 h-24">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-3 rounded bg-gradient-to-t from-sky-200 to-sky-500"
                          initial={{ height: 6 }}
                          animate={{ height: 10 + Math.abs(Math.sin(i)) * 80 }}
                          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.h2 variants={item} className="text-3xl sm:text-4xl font-bold text-center">Built for modern dental teams</motion.h2>
            <motion.p variants={item} className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
              Streamline your operations with automation and delightful patient experiences.
            </motion.p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={CalendarDays} title="Smart scheduling" desc="Auto-fill cancellations, handle waitlists, and reduce no-shows with AI reminders." />
              <FeatureCard icon={MessageSquare} title="Patient messaging" desc="Two-way SMS, confirmations, and feedback forms — all in one place." />
              <FeatureCard icon={ShieldCheck} title="HIPAA-ready security" desc="Enterprise-grade encryption and audit logs keep your data safe." />
              <FeatureCard icon={CreditCard} title="Frictionless billing" desc="Send invoices, take payments, and reconcile with a click." />
              <FeatureCard icon={LineChart} title="Realtime insights" desc="Track growth, chair utilization, and production at a glance." />
              <FeatureCard icon={Wand2} title="Automation studio" desc="Drag-and-drop workflows that work while you sleep." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-sky-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Simple pricing</h2>
            <p className="mt-3 text-slate-600">Start free, upgrade when you grow.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <PricingCard name="Starter" price={29} highlighted={false} features={[
              '1000 SMS reminders/mo',
              'Online booking',
              'Basic analytics',
            ]} />
            <PricingCard name="Growth" price={79} highlighted features={[
              'Unlimited reminders',
              'Automation studio',
              'Advanced analytics',
              'Priority support',
            ]} />
            <PricingCard name="Scale" price={149} highlighted={false} features={[
              'All Growth features',
              'Custom roles & SSO',
              'Dedicated success manager',
            ]} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Dentists love SmilesCloud</h2>
            <p className="mt-3 text-slate-600">Real stories from teams who upgraded their practice.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Our no-shows dropped 37% in two months. Patients love the reminders.',
                name: 'Dr. Patel',
                role: 'Orthodontist, BrightAlign',
              },
              {
                quote: 'Billing is painless now. The automation freed up 10 hrs/week.',
                name: 'Dr. Nguyen',
                role: 'Owner, Riverfront Dental',
              },
              {
                quote: 'We finally have clarity on production and chair time. Game-changer.',
                name: 'Dr. Lopez',
                role: 'Pediatric Dentist, HappySmiles',
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow backdrop-blur"
              >
                <div className="flex items-center gap-2 text-yellow-400">
                  {[...Array(5)].map((_, i2) => (
                    <Star key={i2} className="w-4 h-4" />
                  ))}
                </div>
                <p className="mt-3 text-slate-700">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{t.name}</span> – {t.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section id="contact" className="relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-r from-sky-600 to-cyan-500 p-8 sm:p-12 text-white shadow-2xl"
          >
            <motion.div className="absolute -inset-6 -z-10 bg-gradient-to-r from-white/10 to-transparent blur-2xl" {...glowPulse} />
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Ready to make every visit a 5-star experience?</h3>
                <p className="mt-2 text-white/90">Try the platform free for 14 days. No credit card required.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white text-sky-700 px-5 py-3 font-semibold shadow hover:bg-white/90">
                  Create account <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/40 px-5 py-3 font-semibold hover:bg-white/20">
                  Book a demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/60 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Tooth className="w-5 h-5 text-sky-700" />
            <span>SmilesCloud © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
