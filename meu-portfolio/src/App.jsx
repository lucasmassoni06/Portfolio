import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Projects from './sections/Projects'


export default function App() {
  return (
    <div className="min-h-dvh bg-gray-100 text-gray-900">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <footer className="container-px py-10 text-sm opacity-70">
        © {new Date().getFullYear()} Lucas Massoni • (11) 94550-9987
      </footer>
    </div>
  )
}
