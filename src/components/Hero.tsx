import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileBarChart2, MapPin, Gauge, Cpu, MoveHorizontal } from 'lucide-react'
import { profile } from '../portfolioData'

const NeuralField = lazy(() => import('./NeuralField'))

function useTyped(text: string, speed = 38) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= text.length) return
    const t = setTimeout(() => setN(n + 1), speed)
    return () => clearTimeout(t)
  }, [n, text, speed])
  return text.slice(0, n)
}

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const robot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const beam = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const [touchMode, setTouchMode] = useState(false)
  const [interacted, setInteracted] = useState(false)
  const typed = useTyped(profile.headline)
  const done = typed.length === profile.headline.length

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse), (max-width: 767px)')
    const upd = () => setTouchMode(mq.matches)
    upd(); mq.addEventListener('change', upd)
    return () => mq.removeEventListener('change', upd)
  }, [])

  // Desktop spotlight with spring interpolation
  useEffect(() => {
    if (touchMode) return
    const el = root.current!, rb = robot.current!, rg = ring.current!
    const target = { x: el.clientWidth * 0.62, y: el.clientHeight * 0.4 }
    const cur = { x: target.x, y: target.y, vx: 0, vy: 0, r: 0 }
    let active = false, raf = 0, last = performance.now()
    const onMove = (e: PointerEvent) => {
      const b = el.getBoundingClientRect()
      target.x = e.clientX - b.left; target.y = e.clientY - b.top
      pointer.current = { x: (target.x / b.width - 0.5) * 2, y: -((target.y / b.height - 0.5) * 2) }
      active = true
    }
    const onLeave = () => { active = false }
    const loop = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t
      const k = 160, c = 22
      cur.vx += ((target.x - cur.x) * k - cur.vx * c) * dt; cur.x += cur.vx * dt
      cur.vy += ((target.y - cur.y) * k - cur.vy * c) * dt; cur.y += cur.vy * dt
      const rT = active ? 190 : 0
      cur.r += (rT - cur.r) * Math.min(1, dt * 8)
      const r = Math.max(cur.r, 0.01)
      const mask = `radial-gradient(circle ${r}px at ${cur.x.toFixed(1)}px ${cur.y.toFixed(1)}px, #000 0%, #000 55%, rgba(0,0,0,.55) 78%, transparent 100%)`
      rb.style.maskImage = mask; rb.style.webkitMaskImage = mask
      rg.style.transform = `translate3d(${cur.x - 190}px, ${cur.y - 190}px, 0) scale(${(cur.r / 190).toFixed(3)})`
      rg.style.opacity = String(Math.min(1, cur.r / 120))
      rb.dataset.mask = `${Math.round(cur.x)},${Math.round(cur.y)},${Math.round(cur.r)}`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    el.addEventListener('pointermove', onMove); el.addEventListener('pointerleave', onLeave)
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave) }
  }, [touchMode])

  // Touch: auto-scanning beam until the user drags, then a draggable slider
  const pos = useRef(50)
  const userCtl = useRef(false)
  const applyBeam = (p: number) => {
    pos.current = p
    const rb = robot.current, bm = beam.current; if (!rb || !bm) return
    const m = `linear-gradient(90deg, #000 ${p - 4}%, transparent ${p + 6}%)`
    rb.style.maskImage = m; rb.style.webkitMaskImage = m
    bm.style.left = `${p}%`
    rb.dataset.mask = `beam,${Math.round(p)}`
  }
  useEffect(() => {
    if (!touchMode) { const rb = robot.current; if (rb) { rb.style.maskImage = ''; rb.style.webkitMaskImage = '' } return }
    let raf = 0; const t0 = performance.now()
    const loop = (t: number) => {
      if (!userCtl.current) applyBeam(50 + 50 * Math.sin((t - t0) / 1800 - Math.PI / 2) * 0.98)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [touchMode])
  const dragging = useRef(false)
  const setFromEvent = (e: React.PointerEvent) => {
    const b = root.current!.getBoundingClientRect()
    userCtl.current = true; setInteracted(true)
    applyBeam(Math.max(2, Math.min(98, ((e.clientX - b.left) / b.width) * 100)))
  }

  return (
    <section ref={root} id="top" className="relative w-full overflow-hidden bg-obsidian" style={{ height: '100svh', minHeight: 560 }}>
      <img src="/human-bg.jpg" alt="Portrait of Abdo, engineer" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '62% 30%' }} draggable={false} />
      <div ref={robot} data-testid="robot-layer" className="absolute inset-0 scanlines" style={{ willChange: 'mask-image', maskImage: 'radial-gradient(circle 0.01px at 50% 50%, #000, transparent)', WebkitMaskImage: 'radial-gradient(circle 0.01px at 50% 50%, #000, transparent)' }}>
        <img src="/robot-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '62% 30%', filter: 'saturate(1.2) contrast(1.05)' }} draggable={false} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/45 to-transparent md:from-obsidian/85 md:via-obsidian/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50" />
      <Suspense fallback={null}><NeuralField pointer={pointer} /></Suspense>

      {!touchMode && <div ref={ring} data-testid="hud-ring" className="absolute left-0 top-0 w-[380px] h-[380px] pointer-events-none rounded-full opacity-0" style={{ border: '1.5px solid rgba(0,240,255,.8)', boxShadow: '0 0 30px rgba(0,240,255,.5), inset 0 0 30px rgba(0,240,255,.25)', willChange: 'transform' }}>
        <div className="absolute inset-4 rounded-full border border-dashed border-cyan-neon/50 animate-[spin_12s_linear_infinite]" />
        <div className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-neon" />
      </div>}

      {touchMode && (
        <>
          <div ref={beam} data-testid="scan-beam" className="absolute top-0 bottom-0 w-[2px] pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent, #00F0FF, transparent)', boxShadow: '0 0 22px 4px rgba(0,240,255,.7)' }}>
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass grid place-items-center text-cyan-neon"><MoveHorizontal size={16} /></div>
          </div>
          <div
            data-testid="beam-drag"
            className="absolute inset-x-0 z-20 bottom-0 h-[38%]"
            style={{ touchAction: 'pan-y' }}
            onPointerDown={(e) => { dragging.current = true; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); setFromEvent(e) }}
            onPointerMove={(e) => { if (dragging.current) setFromEvent(e) }}
            onPointerUp={() => { dragging.current = false }}
            onPointerCancel={() => { dragging.current = false }}
          />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-24 z-10 font-mono text-[10px] tracking-widest text-cyan-neon/80 pointer-events-none whitespace-nowrap">
            {interacted ? '// DRAG TO SCAN' : '// SCANNING... DRAG TO CONTROL'}
          </div>
        </>
      )}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-28 md:justify-center md:pb-0 pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 self-start glass px-3 py-1.5 mb-5 font-mono text-[10px] sm:text-xs text-emerald-alert">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-alert opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-alert" /></span>
          {profile.status}
        </motion.div>
        <h1 className="font-display font-bold leading-[1.05] tracking-tight text-[2rem] sm:text-5xl lg:text-[3.4rem] max-w-[16ch] sm:max-w-xl lg:max-w-[600px]" aria-label={profile.headline}>
          <span aria-hidden className={done ? 'glitch' : ''} data-text={profile.headline}>{typed}<span className="caret text-cyan-neon">|</span></span>
        </h1>
        <p className="mt-5 max-w-md lg:max-w-[460px] text-slate-300 text-sm sm:text-lg">{profile.subtitle}</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 pointer-events-auto self-start w-full sm:w-auto">
          <a href="#projects" className="btn-primary">Explore Neural Projects <ArrowRight size={18} /></a>
          <a href={profile.cvUrl} className="btn-glass"><FileBarChart2 size={18} className="text-cyan-neon" /> Inspect Live Data CV</a>
        </div>
      </div>

      <div className="hidden md:flex absolute top-24 right-8 flex-col gap-3 z-10 pointer-events-none">
        <Telemetry icon={<Cpu size={14} />} label="Model Accuracy" value={profile.telemetry.accuracy} color="#10B981" />
        <Telemetry icon={<Gauge size={14} />} label="UI FPS" value={profile.telemetry.fps} color="#00F0FF" />
      </div>
      <div className="absolute bottom-6 right-4 sm:right-8 z-10 pointer-events-none">
        <Telemetry icon={<MapPin size={14} />} label="Location" value={profile.telemetry.location} color="#8B5CF6" />
      </div>
      <div className="hidden md:block absolute bottom-6 left-8 z-10 font-mono text-xs text-slate-400">{'// move your cursor to scan the human layer'}</div>
    </section>
  )
}

function Telemetry({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="glass px-3 py-2 font-mono text-[11px] sm:text-xs flex items-center gap-2" style={{ borderColor: color + '55' }}>
      <span style={{ color }}>{icon}</span><span className="text-slate-400">{label}:</span><span className="font-bold" style={{ color }}>{value}</span>
    </div>
  )
}
