import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14 max-w-3xl">
          <div className="eyebrow mb-3">{eyebrow}</div>
          <h2 className="section-title">{title}</h2>
          {intro && <p className="mt-4 text-slate-400 text-base sm:text-lg">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
