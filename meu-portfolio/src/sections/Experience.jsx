import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Experience() {
  return (
        <section id="experience" className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4 container-px">
            <h2 className="text-gray-800 dark:text-gray-100 mb-12 text-2xl font-bold">
              Formação Acadêmica
            </h2>
            <div className="flex items-start relative">
              {/* Linha vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>

              {/* Esquerda */}
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold text-gray-800 ">Engenharia de Software - FIAP</h3>
                <p className="text-sm text-gray-500">01/2025 - Presente</p>
              </div>

              {/* Ícone central */}
              <div className="relative z-10 flex items-center justify-center bg-[#022C2D] text-white w-10 h-10 rounded-full shadow-lg">
                <i className="fa fa-briefcase"></i>
              </div>

              {/* Direita */}
              <div className="w-1/2 pl-8 text-left">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Bacharelado</h4>
                <div className="w-10 h-[2px] bg-gray-300 mb-4"></div>
                <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                  Durante minha trajetória na FIAP, participei de diversos projetos desafiadores no programa Global Solution, que fortaleceram minha capacidade de trabalhar em equipe e aplicar soluções criativas a problemas reais.
                  Desenvolvi habilidades sólidas em Python, HTML5, CSS3 e Tailwind CSS, além de atuar com JavaScript, React, Vite e GitHub para o versionamento e deploy de aplicações.
                  Também explorei o universo de IoT, utilizando Arduino (C++) e Node-RED para criar protótipos inteligentes e integrados.
                  Essa combinação de experiências me tornou um desenvolvedor versátil, com foco em inovação, boas práticas e aprendizado constante.
                </p>
              </div>
            </div>
            <div className="flex items-start relative">
              {/* Linha vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>

              {/* Esquerda */}
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold text-gray-800 ">Análise e Desenvolvimento de Sistemas - FAM</h3>
                <p className="text-sm text-gray-500">06/2025 - Presente</p>
              </div>

              {/* Ícone central */}
              <div className="relative z-10 flex items-center justify-center bg-[#022C2D] text-white w-10 h-10 rounded-full shadow-lg">
                <i className="fa fa-briefcase"></i>
              </div>

              {/* Direita */}
              <div className="w-1/2 pl-8 text-left ">
                <h4 className="text-lg font-semibold text-gray-800 mb-1 mt-5">Tecnólogo</h4>
                <div className="w-10 h-2px bg-gray-300 mb-4"></div>
                <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                  Durante meus estudos na FAM (Faculdade das Américas), aprimorei meus conhecimentos em bancos de dados, aprendendo a projetar, manipular e gerenciar informações com SQL e Oracle.
                  Além disso, tive contato com fundamentos de redes de computadores, infraestrutura e diversas áreas da tecnologia da informação, o que ampliou minha compreensão sobre como sistemas e aplicações se conectam e funcionam de forma integrada.
                  Essa base sólida me ajudou a desenvolver uma visão mais completa do ecossistema tecnológico, unindo desenvolvimento, dados e redes em um mesmo propósito.
                </p>
              </div>
            </div>
          </div>
        </section>

  )
}