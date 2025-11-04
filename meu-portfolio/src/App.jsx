import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'


export default function App() {
  return (
    <div className="min-h-dvh bg-gray-100 text-gray-900">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      <footer className="container-px py-10 text-sm opacity-70">
        © {new Date().getFullYear()} Seu Nome • Feito com React + Tailwind
      </footer>
    </div>
  )
}
