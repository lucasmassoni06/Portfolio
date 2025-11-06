import { skills } from '../data/skills'
import LogoLoop from '../components/LogoLoop'
import { techLogos } from '../data/techlogos';



export default function Skills() {
  return (
    <section id="skills" className="section-y container-px">
      <h2 className="text-2xl font-bold">Habilidades</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map(s => (
          <li key={s.name} className="px-3 py-1 rounded-full border text-sm">
            {s.name} · {s.level}
          </li>
        ))}
      </ul>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginTop:'70px'}}>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  )
}