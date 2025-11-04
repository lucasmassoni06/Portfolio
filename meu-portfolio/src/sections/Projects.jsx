import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-y container-px">
      <h2 className="text-2xl font-bold">Projetos</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
      </div>
    </section>
  )
}