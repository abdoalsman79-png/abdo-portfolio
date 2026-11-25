import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Section from './Section'
import { datasets } from '../portfolioData'
import { useCountUp } from '../hooks/useCountUp'

function Kpi({ label, value, suffix, k }: { label: string; value: number; suffix: string; k: string }) {
  const v = useCountUp(value, k)
  return (
    <div className="glass p-4"><div className="font-mono text-[11px] text-slate-400">{label}</div>
      <div className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">{value % 1 === 0 ? Math.round(v).toLocaleString() : v.toFixed(1)}<span className="text-cyan-neon text-lg">{suffix}</span></div></div>
  )
}

export default function Sandbox() {
  const [id, setId] = useState(datasets[0].id)
  const [ai, setAi] = useState(false)
  const d = datasets.find((x) => x.id === id)!
  const W = 640, H = 260, pad = 28
  const { path, area, pts } = useMemo(() => {
    const max = Math.max(...d.series) * 1.1, min = Math.min(...d.series) * 0.8
    const p = d.series.map((v, i) => [pad + (i * (W - pad * 2)) / (d.series.length - 1), H - pad - ((v - min) / (max - min)) * (H - pad * 2)] as const)
    const line = p.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
    return { path: line, area: `${line} L${p[p.length - 1][0]},${H - pad} L${p[0][0]},${H - pad} Z`, pts: p }
  }, [d])
  return (
    <Section id="sandbox" eyebrow="// 02 · live data sandbox" title="Interactive analytics & AI sandbox." intro="Switch datasets, then switch on the AI Insight Generator to flag anomalies in real time.">
      <div className="flex flex-wrap gap-2 mb-6" role="tablist">
        {datasets.map((x) => (
          <button key={x.id} role="tab" aria-selected={id === x.id} onClick={() => setId(x.id)} className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all ${id === x.id ? 'text-obsidian font-bold' : 'text-slate-300 border-white/10 glass'}`} style={id === x.id ? { background: x.color, borderColor: x.color, boxShadow: `0 0 20px ${x.color}66` } : undefined}>{x.label}</button>
        ))}
      </div>
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="glass p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono text-xs text-slate-400">{d.label.toUpperCase()}</div>
            <button data-testid="ai-toggle" role="switch" aria-checked={ai} onClick={() => setAi(!ai)} className={`flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-lg border transition-all ${ai ? 'border-emerald-alert text-emerald-alert bg-emerald-alert/10' : 'border-white/15 text-slate-300'}`}>
              <Sparkles size={14} /> AI Insight Generator: {ai ? 'ON' : 'OFF'}
            </button>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={d.label}>
            <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={d.color} stopOpacity=".4" /><stop offset="100%" stopColor={d.color} stopOpacity="0" /></linearGradient></defs>
            {[0, 1, 2, 3].map((i) => <line key={i} x1={pad} x2={W - pad} y1={pad + (i * (H - pad * 2)) / 3} y2={pad + (i * (H - pad * 2)) / 3} stroke="rgba(56,189,248,.1)" />)}
            <motion.path key={id + 'a'} d={area} fill="url(#ag)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
            <motion.path key={id} data-testid="chart-line" d={path} fill="none" stroke={d.color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: 'easeInOut' }} />
            {pts.map(([x, y], i) => {
              const an = d.anomalies.includes(i)
              return (<g key={id + i}>
                <circle cx={x} cy={y} r={3} fill={d.color} />
                {ai && an && (<g data-testid="anomaly"><circle cx={x} cy={y} r={14} fill="none" stroke="#10B981" strokeWidth={2}><animate attributeName="r" values="8;18;8" dur="1.6s" repeatCount="indefinite" /></circle><circle cx={x} cy={y} r={5} fill="#10B981" /></g>)}
              </g>)
            })}
          </svg>
          <AnimatePresence>{ai && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div data-testid="insight" className="mt-3 p-3 rounded-lg border border-emerald-alert/40 bg-emerald-alert/10 font-mono text-xs text-emerald-alert"><Sparkles size={12} className="inline mr-1" />{d.insight}</div>
            </motion.div>)}</AnimatePresence>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 content-start">
          {d.kpis.map((k) => <Kpi key={k.label} {...k} k={id} />)}
        </div>
      </div>
    </Section>
  )
}
