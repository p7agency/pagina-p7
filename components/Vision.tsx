import React, { useState } from 'react';

const Vision: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const words = [
    { text: "AUTORIDADE.", desc: "A FUNDAÇÃO PARA ESCALAR RESULTADOS DE ELITE." },
    { text: "CLAREZA.", desc: "A ARQUITETURA QUE ELIMINA A CONFUSÃO DO MERCADO." },
    { text: "VALOR.", desc: "A PERCEPÇÃO QUE TORNA O PREÇO IRRELEVANTE." }
  ];

  return (
    <section className="py-32 md:py-60 px-6 md:px-16 border-b border-white/10 relative overflow-hidden bg-white text-black group/vision">
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[10px] uppercase font-bold mb-12 md:mb-16 opacity-40 tracking-[0.5em] flex items-center gap-4">
          <span className="w-8 h-px bg-black/20"></span> Visão Estratégica
        </p>
        
        <div className="flex flex-col gap-6 md:gap-4">
          {words.map((word, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative cursor-default flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 group/word"
            >
              <h2 className={`
                text-[15vw] md:text-[13vw] font-[900] font-condensed leading-[0.8] uppercase transition-all duration-700 select-none
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-10 scale-[0.98] blur-[2px]' : 'opacity-100'}
                ${hoveredIndex === index ? 'tracking-normal' : 'tracking-tighter'}
              `}>
                <span className={`
                  transition-all duration-500
                  ${hoveredIndex === index ? 'lg:text-transparent lg:[-webkit-text-stroke:1px_black]' : 'text-black'}
                `}>
                  {word.text}
                </span>
              </h2>

              {/* Descrição mobile: sempre visível abaixo | Descrição desktop: aparece no hover */}
              <div className={`
                transition-all duration-700 overflow-hidden
                ${hoveredIndex === index ? 'lg:max-w-[1200px] lg:opacity-100 lg:translate-x-0' : 'lg:max-w-0 lg:opacity-0 lg:-translate-x-10'}
              `}>
                <p className="text-[9px] md:text-[11px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] border-l-2 md:border-l-4 border-black pl-4 md:pl-8 pr-6 md:pr-12 leading-relaxed opacity-60 lg:opacity-100">
                  <span className="hidden lg:inline mr-4 opacity-20">|</span> {word.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="rotate-90 origin-center">
          <span className="text-[10px] font-black uppercase tracking-[1em] opacity-10 whitespace-nowrap">
            2026 • P7 STRATEGIC FRAMEWORK • POSITIONING ELITE
          </span>
        </div>
      </div>
    </section>
  );
};

export default Vision;