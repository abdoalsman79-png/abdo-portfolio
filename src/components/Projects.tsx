import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitBranch, X } from 'lucide-react'
import Section from './Section'
import { projects, type Category, type Project } from '../portfolioData'

const filters: ('All' | Category)[] = ['All', 'AI & ML', 'Data Analytics', 'Creative Front-End']

function Card({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return
    const el = ref.current!, b = el.getBoundingClientRect()
    const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`); el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)' }
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
      <button ref={ref} data-testid="project-card" onClick={onOpen} onPointerMove={onMove} onPointerLeave={reset} className="glass relative w-full h-full text-left p-6 overflow-hidden block" style={{ transition: 'transform .15s ease-out', willChange: 'transform', transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: `radial-gradient(260px circle at var(--gx,50%) var(--gy,0%), ${p.accent}22, transparent 60%)` }} />
        <div className="relative">
          {p.image && <img src={p.image} alt={p.title + ' preview'} loading="lazy" className="w-full h-36 object-cover rounded-lg mb-4 border border-white/10" />}
          <div className="font-mono text-[11px] mb-3" style={{ color: p.accent }}>{p.category.toUpperCase()}</div>
          <h3 className="font-display font-bold text-2xl mb-2">{p.title}</h3>
          <p className="text-slate-400 text-sm mb-4">{p.summary}</p>
          <div className="flex flex-wrap gap-2 mb-5">{p.stack.map((s) => <span key={s} className="pill">{s}</span>)}</div>
          <div className="flex gap-6 flex-wrap">{p.metrics.map((m) => (
            <div key={m.label}><div className="font-mono font-bold text-xl" style={{ color: p.accent }}>{m.value}</div><div className="font-mono text-[10px] text-slate-500">{m.label}</div></div>))}</div>
        </div>
      </button>
    </motion.div>
  )
}

export default function Projects() {
  const [f, setF] = useState<'All' | Category>('All')
  const [open, setOpen] = useState<Project | null>(null)
  useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [open])
  const list = projects.filter((p) => f === 'All' || p.category === f)
  return (
    <Section id="projects" eyebrow="// 03 · featured projects" title="Neural projects, case by case." intro="Machine learning and analytics work from my Kaggle notebooks, plus the sites I have built and shipped.">
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((x) => (
          <button key={x} data-testid="filter" onClick={() => setF(x)} className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all ${f === x ? 'bg-cyan-neon text-obsidian border-cyan-neon font-bold' : 'glass text-slate-300'}`}>{x}</button>))}
      </div>
      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">{list.map((p) => <Card key={p.id} p={p} onOpen={() => setOpen(p)} />)}</AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <motion.aside data-testid="drawer" role="dialog" aria-modal="true" aria-label={open.title} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 260 }} className="relative w-full max-w-lg h-full overflow-y-auto p-6 sm:p-8 border-l border-cyan-neon/20" style={{ background: 'rgba(8,12,26,.97)' }}>
              <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-4 right-4 p-2 rounded-lg glass"><X size={18} /></button>
              <div className="font-mono text-xs mb-2" style={{ color: open.accent }}>{open.category.toUpperCase()} · CASE STUDY</div>
              {open.image && <img src={open.image} alt={open.title + ' preview'} className="w-full rounded-xl mb-5 border border-white/10" />}
              <h3 className="font-display font-bold text-3xl mb-3">{open.title}</h3>
              <p className="text-slate-300 mb-6">{open.summary}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">{open.metrics.map((m) => <div key={m.label} className="glass p-4"><div className="font-mono font-bold text-2xl" style={{ color: open.accent }}>{m.value}</div><div className="font-mono text-[11px] text-slate-400">{m.label}</div></div>)}</div>
              <h4 className="font-mono text-xs text-slate-400 mb-3">ARCHITECTURE BREAKDOWN</h4>
              <ol className="space-y-3 mb-6">{open.architecture.map((a, i) => <li key={i} className="flex gap-3 text-sm text-slate-300"><span className="font-mono text-cyan-neon">0{i + 1}</span>{a}</li>)}</ol>
              <div className="flex flex-wrap gap-2 mb-8">{open.stack.map((s) => <span key={s} className="pill">{s}</span>)}</div>
              <div className="flex gap-3">{open.demo && <a href={open.demo} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 text-sm"><ExternalLink size={16} /> {open.demoLabel ?? "Live demo"}</a>}{open.repo && <a href={open.repo} target="_blank" rel="noreferrer" className="btn-glass !py-2.5 text-sm"><GitBranch size={16} /> GitHub</a>}</div>
            </motion.aside>
          </motion.div>)}
      </AnimatePresence>
    </Section>
  )
}
