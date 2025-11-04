import ProfileCard from "../components/ProfileCard"

export default function About() {
  return (
    <section id="about" className="section-y container-px">
      <div className="grid md:grid-cols-2 gap-50 items-center">
        <div>
          <h2 className="text-2xl font-bold">Sobre mim</h2>
          <p className="mt-2 opacity-80">
            Breve bio com foco no que você resolve: performance, acessibilidade, produtos.
          </p>
        </div>
        <ProfileCard></ProfileCard>
      </div>
    </section>
  )
}