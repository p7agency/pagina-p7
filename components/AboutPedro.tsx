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
            
            <div className="relative group p-6 md:p-0">
              <div className="absolute -inset-4 border border-white/5 md:group-hover:border-white/20 transition-colors duration-700 rounded-lg md:rounded-none"></div>
              <p className="relative z-10 text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-white/40 leading-relaxed">
                CEO P7 AGENCY <br />
                ESTRATEGISTA DE POSICIONAMENTO <br />
                ESPECIALISTA EM PERCEPÇÃO DE VALOR
              </p>
            </div>
          </div>
          
          {/* Coluna de Texto Integral */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-8 md:pt-12">
            <div className="space-y-8 md:space-y-10">
              <p className="text-xl md:text-4xl font-light leading-tight text-white italic">
                "Não construímos apenas perfis. Projetamos autoridade que converte atenção em desejo inquestionável."
              </p>
              
              <div className="space-y-6 md:space-y-8 text-white/50 leading-relaxed text-base md:text-lg max-w-2xl font-light">
                <p>
                  Pedro Poubel é estrategista digital e CEO da P7 Agency. Atua desenvolvendo o posicionamento de empresas, marcas pessoais e profissionais que buscam escalar sua autoridade e valor no ambiente digital. Com olhar apurado para comunicação, clareza de mensagem e construção de percepção, Pedro lidera projetos que unem visão estratégica, sofisticação e resultado.
                </p>
                <p>
                  Com passagens por projetos que movimentaram múltiplos 7 dígitos, ele consolidou a P7 como o porto seguro para profissionais que dominam o "offline", mas ainda não são percebidos como elite no "online". Sua metodologia foca em transformar conhecimento técnico em narrativa de poder, garantindo que a excelência do cliente seja traduzida em valor financeiro e prestígio de mercado.
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