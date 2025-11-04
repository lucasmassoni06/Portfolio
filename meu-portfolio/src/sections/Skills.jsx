import { skills } from '../data/skills'
import LogoLoop from '../components/LogoLoop'
import { SiReact, SiHtml5, SiTypescript, SiTailwindcss, SiCss3, SiNodedotjs, SiPython} from 'react-icons/si';

export const techLogos = [
  {  node: <SiReact />, title: "React", href: "https://react.dev"},
  {  node: <SiHtml5 />, title: "HTML5", href: "https://html5.com"},
  {  node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org"},
  {  node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com"},
  {  node: <SiCss3 />, title: "CSS3", href: "https://css3.com"},
  {  node: <SiNodedotjs />, title: "NodeJs", href: "https://nodejs.or"},
  {  node: <SiPython />, title: "Python", href: "https://python.org"},
];

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