import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import { experience, techStack } from '../portfolioData'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const h = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return (
    <Section id="experience" eyebrow="// 04 · experience & tech orbit" title="The path so far, and the toolkit.">
      <div className="grid lg:grid-cols-2 gap-12">
        <div ref={ref} className="relative pl-8">
          <div className="absolute left-[7px] top-1 bottom-1 w-[2px] bg-white/10" />
          <motion.div className="absolute left-[7px] top-1 bottom-1 w-[2px] origin-top" style={{ scaleY: h, background: 'linear-gradient(#00F0FF,#8B5CF6)', boxShadow: '0 0 12px #00F0FF' }} />
          {experience.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} className="relative mb-9 last:mb-0">
              <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-obsidian border-2 border-cyan-neon" style={{ boxShadow: '0 0 12px #00F0FF' }} />
              <div className="font-mono text-xs text-violet-data">{e.period}</div>
              <h3 className="font-display font-semibold text-xl">{e.title}</h3>
              <div className="font-mono text-xs text-cyan-neon mb-1">{e.org}</div>
              <p className="text-slate-400 text-sm">{e.text}</p>
            </motion.div>))}
        </div>
        <div className="grid gap-5 content-start">
          {techStack.map((g, gi) => (
            <div key={g.cat} className="glass p-5">
              <div className="font-mono text-xs text-slate-400 mb-3">{g.cat.toUpperCase()}</div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((t, i) => (
                  <motion.span key={t} whileHover={{ scale: 1.12, y: -3 }} animate={{ y: [0, -3, 0] }} transition={{ y: { duration: 3 + ((i + gi) % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 } }} className="px-4 py-2 rounded-xl font-mono text-sm border border-cyan-neon/25 bg-cyan-neon/5 hover:border-cyan-neon hover:shadow-[0_0_18px_rgba(0,240,255,.4)] cursor-default">{t}</motion.span>))}
              </div>
            </div>))}
        </div>
      </div>
    </Section>
  )
}
