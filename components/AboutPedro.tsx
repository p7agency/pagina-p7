import React from 'react';

const AboutPedro: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-36 px-6 md:px-16 bg-[#DEDACF] text-[#000000] border-b border-[#000000]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Coluna da foto */}
          <div className="lg:col-span-5 flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#7A756F] mb-4">Fundador</p>
            <h2 className="text-6xl md:text-8xl font-condensed uppercase leading-[0.82] tracking-tighter">
              Pedro<br />Poubel
            </h2>
            <div className="h-[3px] w-20 bg-[#000000] mt-6 mb-10" />
            <div className="relative overflow-hidden flex-1 min-h-[420px]">
              <img
                src="/P7-1.JPG"
                alt="Pedro Poubel, fundador da P7"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#DEDACF] to-transparent" />
            </div>
          </div>

          {/* Coluna do texto — ocupa toda a altura */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-14 lg:pt-28">
            {/* Abertura */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.5em] text-[#7A756F] mb-8">01 — Origem</span>
              <p className="text-2xl md:text-4xl font-light leading-[1.2] tracking-tight">
                A P7 nasce para ser uma <span className="font-extrabold">extensão da vida de Pedro Poubel</span>: sua visão de mundo e seus princípios, aplicados em diferentes setores.
              </p>
            </div>

            {/* Corpo em duas colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 border-t border-[#000000]/15 pt-10">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.5em] text-[#7A756F] mb-5">02 — Atuação</span>
                <p className="text-sm md:text-base leading-relaxed text-[#201F1B]/80">
                  Atua estruturando marcas e projetos que desejam se comunicar com clareza e estratégia no ambiente digital, usando o espaço como ferramenta de escala em seu negócio.
                </p>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.5em] text-[#7A756F] mb-5">03 — Método</span>
                <p className="text-sm md:text-base leading-relaxed text-[#201F1B]/80">
                  Seu trabalho integra estratégia, conteúdo e modelo de negócio, com uma metodologia que transforma conhecimento técnico em narrativa e traduz a excelência do cliente em posicionamento no digital.
                </p>
              </div>
            </div>

            {/* Rodapé da coluna */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 border-t border-[#000000]/15 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#7A756F] mb-2">Fundador da</p>
                <p className="text-3xl font-extrabold tracking-tight">P7 Club</p>
              </div>
              <a
                href="https://www.instagram.com/poubel7/"
                id="about-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-6 bg-[#000000] text-[#DEDACF] pl-8 pr-3 py-3 hover:bg-[#201F1B] transition-colors duration-500"
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Seguir no Instagram</span>
                <span className="w-10 h-10 bg-[#DEDACF] text-[#000000] flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-transform duration-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPedro;
