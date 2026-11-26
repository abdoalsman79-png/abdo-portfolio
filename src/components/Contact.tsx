import { useEffect, useRef, useState } from 'react'
import { Send, GitBranch, Link2, MessageCircle, BarChart3 } from 'lucide-react'
import Section from './Section'
import { profile, terminalResponses } from '../portfolioData'

function Terminal() {
  const [lines, setLines] = useState<string[]>(['Welcome to abdo-os v1.0. Type "help" to begin.'])
  const [val, setVal] = useState('')
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => { box.current?.scrollTo({ top: box.current.scrollHeight }) }, [lines])
  const run = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = val.trim().toLowerCase(); setVal('')
    if (!cmd) return
    if (cmd === 'clear') return setLines([])
    const out = terminalResponses[cmd] ?? [`command not found: ${cmd}. Type "help".`]
    setLines((l) => [...l, `visitor@abdo:~$ ${cmd}`, ...out])
  }
  return (
    <div className="glass overflow-hidden flex flex-col h-full min-h-[360px]" onClick={() => (document.getElementById('term-input') as HTMLInputElement)?.focus({ preventScroll: true })}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10"><span className="w-2.5 h-2.5 rounded-full bg-red-400/80" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-alert" /><span className="ml-2 font-mono text-[11px] text-slate-400">terminal</span></div>
      <div ref={box} data-testid="term-out" className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-[13px] leading-relaxed text-emerald-alert whitespace-pre-wrap break-words max-h-[320px]">
        {lines.map((l, i) => <div key={i} className={l.startsWith('visitor@') ? 'text-cyan-neon' : ''}>{l}</div>)}
      </div>
      <form onSubmit={run} className="flex items-center gap-2 px-4 py-3 border-t border-white/10 font-mono text-xs sm:text-[13px]">
        <span className="text-cyan-neon">visitor@abdo:~$</span>
        <input id="term-input" data-testid="term-input" value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off" autoCapitalize="off" spellCheck={false} aria-label="Terminal command" className="flex-1 min-w-0 bg-transparent outline-none text-white text-base sm:text-[13px]" placeholder="try: help" />
      </form>
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio message from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\n${f.get('name')} <${f.get('email')}>`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  const field = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-neon focus:shadow-[0_0_18px_rgba(0,240,255,.25)] transition-all text-base'
  return (
    <Section id="contact" eyebrow="// 05 · open channel" title="Let's build something intelligent.">
      <div className="grid lg:grid-cols-2 gap-6">
        <form onSubmit={submit} className="glass p-6 sm:p-8 grid gap-4">
          <input name="name" required placeholder="Your name" className={field} aria-label="Your name" />
          <input name="email" required type="email" placeholder="Your email" className={field} aria-label="Your email" />
          <textarea name="message" required rows={5} placeholder="What are we building?" className={field} aria-label="Message" />
          <button className="btn-primary" type="submit"><Send size={18} /> {sent ? 'Opening your mail app...' : 'Transmit message'}</button>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-glass !py-2.5 text-sm"><GitBranch size={16} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-glass !py-2.5 text-sm"><Link2 size={16} /> LinkedIn</a>
            <a href={profile.kaggle} target="_blank" rel="noreferrer" className="btn-glass !py-2.5 text-sm"><BarChart3 size={16} /> Kaggle</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="btn-glass !py-2.5 text-sm"><MessageCircle size={16} /> WhatsApp</a>
          </div>
        </form>
        <Terminal />
      </div>
      <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-slate-500">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span><span>Built with React, TypeScript, Three.js & Framer Motion</span>
      </footer>
    </Section>
  )
}
