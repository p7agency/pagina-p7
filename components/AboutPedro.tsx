import React from 'react';

const AboutPedro: React.FC = () => {
  return (
    <section id="liderança" className="py-24 md:py-40 px-6 md:px-16 bg-black text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Coluna de Título e Perfil */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <div>
              <p className="text-[10px] uppercase font-bold text-white/40 mb-8 tracking-[0.5em] flex items-center gap-4">
                <span className="w-8 h-px bg-white/20"></span> Liderança Estratégica
              </p>
              <h2 className="text-6xl md:text-9xl font-condensed uppercase leading-[0.8] tracking-tighter">
                Pedro<br />Poubel
              </h2>
            </div>
            
            <img src="/P7-1.JPG" alt="Pedro Poubel" className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover border border-white/10" />

            
            <div className="relative group p-6 md:p-0">
              <div className="absolute -inset-4 border border-white/5 md:group-hover:border-white/20 transition-colors duration-700 rounded-lg md:rounded-none"></div>
              <p className="relative z-10 text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-white/40 leading-relaxed">
                FUNDADOR DA P7 AGENCY
              </p>
            </div>
          </div>
          
          {/* Coluna de Texto Integral */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-8 md:pt-12">
            <div className="space-y-8 md:space-y-10">

              
              <div className="space-y-6 md:space-y-8 text-white/50 leading-relaxed text-base md:text-lg max-w-2xl font-light">
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPedro;