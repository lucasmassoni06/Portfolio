import { useState, useEffect } from "react"
import avatar from '../assets/linkedin-profile.jpeg'

export default function ProfileCard() {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`relative touch-none perspective:500px group`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Efeito glow */}
      <div
        className={`absolute -inset-2 rounded-[30px] transition-all duration-500 ease-in-out
        [filter:contrast(2)_saturate(2)_blur(36px)]
        [transform:scale(0.8)_translate3d(0,0,0.1px)]
        bg-gradient-to-r from-cyan-400 via-[#ffffff] to-pink-500
        opacity-0 group-hover:opacity-100 group-hover:[filter:contrast(1)_blur(40px)] group-hover:[transform:scale(0.9)]
      `}
      />

      {/* CARD PRINCIPAL */}
      <div
        className={`relative grid overflow-hidden rounded-[30px]
        transition-transform duration-1000 ease-in-out shadow-xl
        h-[80svh] max-h-[540px] [aspect-ratio:0.718]
        bg-gradient-to-b from-white via-gray-300 to-gray-500
        group-hover:[transform:rotateX(5deg)_rotateY(-5deg)]
        `}
      >
        {/* Overlay escuro */}
        <div
          className="absolute inset-[1px] rounded-[30px] bg-gray-300 backdrop-blur-sm"
        />

        {/* Conteúdo principal */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6"
        >
          <div className="mt-16 text-[min(5svh,3em)] font-semibold bg-gradient-to-b from-gray-600 to-gray-700 bg-clip-text text-transparent">
            Lucas Massoni
          </div>
          <p className="mt-2 opacity-80 text-gray-500">
            Desenvolvedor Front-end focado em React, acessibilidade e UX.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-700 text-white transition"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-800/40 transition"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Rodapé com avatar e status */}
        <div
          className="absolute bottom-5 left-5 right-5 flex items-center justify-between 
          backdrop-blur-xl bg-gray-900/10 border border-gray-900/20 rounded-xl px-3 py-2 z-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white/90 leading-none">
                @lucasmassoni
              </div>
              <div className="text-xs text-white/70 leading-none">Online</div>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/lucas-massoni-393968357/" className="border border-white/10 rounded-lg px-4 py-2 text-sm font-semibold text-white/90 
            backdrop-blur-sm hover:border-white/40 hover:-translate-y-px transition">Contato</a>
        </div>
      </div>
    </div>
  )
}
