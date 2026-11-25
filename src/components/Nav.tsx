import { useEffect, useState } from 'react'
import { profile } from '../portfolioData'
const links = [['About', '#about'], ['Sandbox', '#sandbox'], ['Projects', '#projects'], ['Journey', '#experience'], ['Contact', '#contact']]
export default function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => { const f = () => setSolid(window.scrollY > 60); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${solid ? 'glass !rounded-none border-x-0 border-t-0' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-display font-bold tracking-tight">{profile.nickname}<span className="text-cyan-neon">.</span>ai</a>
        <nav className="hidden md:flex gap-7 font-mono text-xs text-slate-300">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-cyan-neon transition-colors">{l}</a>)}
        </nav>
        <a href="#contact" className="font-mono text-[11px] sm:text-xs px-3 py-1.5 rounded-lg border border-cyan-neon/50 text-cyan-neon hover:bg-cyan-neon/10">Hire me</a>
      </div>
    </header>
  )
}
