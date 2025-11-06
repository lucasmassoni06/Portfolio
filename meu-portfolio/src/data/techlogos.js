import { SiReact, SiHtml5, SiTypescript, SiTailwindcss, SiCss3, SiNodedotjs, SiPython} from 'react-icons/si';
import { createElement } from 'react';

export const techLogos = [
  { node: createElement(SiReact), title: "React", href: "https://react.dev" },
  { node: createElement(SiHtml5), title: "HTML5", href: "https://html5.com" },
  { node: createElement(SiTypescript), title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: createElement(SiTailwindcss), title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: createElement(SiCss3), title: "CSS3", href: "https://css3.com" },
  { node: createElement(SiNodedotjs), title: "NodeJs", href: "https://nodejs.org" },
  { node: createElement(SiPython), title: "Python", href: "https://python.org" },
];