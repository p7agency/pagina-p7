import React from 'react';

const AboutPedro: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-40 px-6 md:px-16 bg-[#f0f0f0] text-[#0a0a0a] border-b border-[#0a0a0a]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#0a0a0a]/30 mb-4">Fundador</p>
              <h2 className="text-6xl md:text-8xl font-condensed uppercase leading-[0.82] tracking-tighter">
                Pedro<br />Poubel
              </h2>
              <div className="h-[3px] w-20 bg-[#0a0a0a] mt-6 mb-8" />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/P7-1.JPG"
                alt="Pedro Poubel"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f0f0] to-transparent" />
            </div>
            <p className="text-[10px] uppercase font-black tracking-[0.4em] text-[#0a0a0a]/30">
              FUNDADOR DA P7
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center pt-0 lg:pt-32 space-y-10">
            <div className="space-y-6 text-[#0a0a0a]/60 leading-relaxed text-base md:text-lg font-light">
              <p>
                Pedro Poubel é o fundador da marca P7.<br />
                A P7 nasce para ser uma extensão da vida de Pedro Poubel. Ela é feita para trazer ao mercado sua visão de mundo e seus princípios, aplicados em diferentes setores.
              </p>
              <p>
                Atua estruturando marcas e projetos que desejam se comunicar com clareza e estratégia no ambiente digital, usando o espaço como ferramenta de escala em seu negócio.
              </p>
              <p>
                Seu trabalho integra estratégia, conteúdo e modelo de negócio, com uma metodologia que foca em transformar conhecimento técnico em narrativa, garantindo que a excelência do cliente seja traduzida em posicionamento de excelência no mercado digital.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="https://www.instagram.com/poubel7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 border border-[#0a0a0a]/20 px-8 py-4 group/btn hover:bg-[#0a0a0a] hover:text-[#f0f0f0] hover:border-[#0a0a0a] transition-all duration-500"
              >
                <span className="text-[10px] uppercase font-black tracking-[0.3em]">Seguir no Instagram</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/btn:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPedro;
