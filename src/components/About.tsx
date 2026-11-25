import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, BarChart3, Code2 } from 'lucide-react'
import Section from './Section'
import { pillars, skills } from '../portfolioData'

const icons: Record<string, React.ReactNode> = { ai: <Brain />, data: <BarChart3 />, fe: <Code2 /> }

function Radar({ active }: { active: number | null }) {
  const size = 320, c = size / 2, R = 115, n = skills.length
  const pt = (i: number, v: number) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [c + Math.cos(a) * R * v, c + Math.sin(a) * R * v] as const }
  const poly = skills.map((s, i) => pt(i, s.value / 100).join(',')).join(' ')
  return (
    <svg viewBox={`-35 0 ${size + 70} ${size}`} className="w-full max-w-[460px] mx-auto" role="img" aria-label="Skill radar chart">
      {[0.25, 0.5, 0.75, 1].map((l) => <polygon key={l} points={skills.map((_, i) => pt(i, l).join(',')).join(' ')} fill="none" stroke="rgba(56,189,248,.18)" />)}
      {skills.map((_, i) => <line key={i} x1={c} y1={c} x2={pt(i, 1)[0]} y2={pt(i, 1)[1]} stroke="rgba(56,189,248,.18)" />)}
      <motion.polygon data-testid="radar-poly" points={poly} fill="rgba(0,240,255,.18)" stroke="#00F0FF" strokeWidth={2} initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }} style={{ transformOrigin: '50% 50%' }} />
      {skills.map((s, i) => { const [x, y] = pt(i, s.value / 100); const [lx, ly] = pt(i, 1.27); return (
        <g key={s.name}>
          <circle cx={x} cy={y} r={active === i ? 6 : 4} fill={active === i ? '#8B5CF6' : '#00F0FF'} />
          <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize="9.5" fontFamily="JetBrains Mono" fill={active === i ? '#fff' : '#94a3b8'}>{s.name}</text>
        </g>) })}
    </svg>
  )
}

export default function About() {
  const [sel, setSel] = useState<string>('ai')
  const [hover, setHover] = useState<number | null>(null)
  return (
    <Section id="about" eyebrow="// 01 · hybrid dna matrix" title="Three disciplines, one pipeline." intro="Where AI engineering, data analytics and front-end craft overlap is where I do my best work.">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="grid gap-4">
          {pillars.map((p) => (
            <motion.button key={p.id} onClick={() => setSel(p.id)} whileHover={{ x: 6 }} className={`glass p-5 text-left transition-all ${sel === p.id ? 'ring-1' : 'opacity-80'}`} style={{ ['--tw-ring-color' as string]: p.color, boxShadow: sel === p.id ? `0 0 32px ${p.color}33` : undefined }}>
              <div className="flex items-center gap-3 mb-2" style={{ color: p.color }}>{icons[p.id]}<h3 className="font-display font-semibold text-xl text-white">{p.title}</h3></div>
              <p className="text-slate-400 text-sm">{p.text}</p>
              {sel === p.id && <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="pill" style={{ color: p.color }}>{t}</span>)}</div>}
            </motion.button>
          ))}
        </div>
        <div className="glass p-5 sm:p-8">
          <div className="font-mono text-xs text-slate-400 mb-2">SKILL_PROFICIENCY.radar</div>
          <Radar active={hover} />
          <ul className="mt-4 grid gap-2">
            {skills.map((s, i) => (
              <li key={s.name} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="font-mono text-xs">
                <div className="flex justify-between text-slate-300"><span>{s.name}</span><span className="text-cyan-neon">{s.value}%</span></div>
                <div className="h-1.5 rounded bg-white/5 mt-1 overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-cyan-neon to-violet-data" initial={{ width: 0 }} whileInView={{ width: `${s.value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
