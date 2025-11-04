import ProfileCard from "../components/ProfileCard"

export default function About() {
  return (
    <section id="about" className="section-y container-px">
      <div className="grid md:grid-cols-2 gap-50 items-center">
        <div>
          <h2 className="text-2xl font-bold">Sobre mim</h2>
          <br></br>
          <p className="mt-2 opacity-80">
            Sou estudante de Engenharia de Software na FIAP e tenho me dedicado a transformar ideias em 
            soluções tecnológicas com propósito e impacto. Apesar de estar no início da minha trajetória 
            como desenvolvedor júnior, já tive contato com diversos projetos e desafios que reforçaram 
            minha paixão pela área. 
            Tenho experiência prática com linguagens como Python, HTML5, CSS3, TailWind CSS,  
            JavaScript, React, Vine, Github, Arduino (C++), IoT, Node-Red, SQL, Oracle. o que me 
            proporcionou uma base sólida tanto em desenvolvimento web quanto em soluções embarcadas. 
            Gosto de aprender, de me desafiar e de trabalhar em equipe para construir soluções que 
            realmente façam a diferença. Acredito que com curiosidade, dedicação e criatividade, é possível 
            ir cada vez mais longe. 
            Atualmente, estou em busca de oportunidades nas áreas que envolvam tecnologia, onde eu 
            possa aplicar meus conhecimentos, crescer profissionalmente e contribuir com inovação. 
          </p>
        </div>
        <ProfileCard></ProfileCard>
      </div>
    </section>
  )
}