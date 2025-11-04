import DecryptedText from '../components/DecryptedText';
import LightRays from '../components/LightRays';

export default function Hero() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
        <div style={{ marginTop: '4rem', fontSize: '70px' }}>
          <DecryptedText text="Lucas Massoni" animateOn="view" revealDirection="center" />
        </div>

        <p className="mt-3 opacity-80 max-w-2xl mx-auto text-white pointer-events-auto">
          Desenvolvedor Front-end focado em React, acessibilidade e UX.
        </p>

        <div className="mt-6 flex justify-center gap-3 pointer-events-auto">
          <a href="#projects" className="px-4 py-2 rounded-xl bg-brand-600 text-white">Ver projetos</a>
          <a href="#contact" className="px-4 py-2 rounded-xl border text-white">Contato</a>
        </div>
      </section>
    </div>
  )
}