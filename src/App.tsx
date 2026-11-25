import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Sandbox from './components/Sandbox'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative bg-obsidian">
      <Nav />
      <main>
        <Hero />
        <div className="grid-bg">
          <About /><Sandbox /><Projects /><Experience /><Contact />
        </div>
      </main>
    </div>
  )
}
