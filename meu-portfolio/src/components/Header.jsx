

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70  border-b">
      <nav className="container-px h-14 flex items-center justify-between">
        <a href="#" className="font-bold">Lucas Mesquita Massoni</a>
        <ul className="hidden sm:flex items-center gap-4 text-sm">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#experience">Formações</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}