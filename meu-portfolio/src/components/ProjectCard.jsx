import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard(p) {
  return (
    <article className="rounded-2xl border p-6 bg-white hover:shadow-2xl hover:-translate-y-1 transition-transform">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-1 text-sm opacity-80">{p.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => (
          <li key={t} className="text-xs bg-brand-100 text-brand-800 px-2 py-1 rounded-full">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        {p.demo && (
          <a className="inline-flex items-center gap-1 text-sm underline" href={p.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={16}/> demo
          </a>
        )}
        {p.repo && (
          <a className="inline-flex items-center gap-1 text-sm underline" href={p.repo} target="_blank" rel="noreferrer">
            <Github size={16}/> código
          </a>
        )}
      </div>
    </article>
  )
}