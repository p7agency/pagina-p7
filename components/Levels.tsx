import React from 'react';

const levelsCompact = [
  { num: 0, text: "você acumula conhecimento mas não constrói." },
  { num: 1, text: "você sabe o que entrega e para quem." },
  { num: 2, text: "o digital vira um ativo do seu negócio." },
  { num: 3, text: "seu projeto se consolida." },
  { num: 4, text: "você escala o que já funciona." },
  { num: 5, text: "você constrói comunidade." },
  { num: 6, text: "você administra o crescimento." },
  { num: 7, text: "você chegou. Excelência, autenticidade e valor." }
];

const Levels: React.FC = () => {
  return (
    <section
      id="levels"
      className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a] text-[#f0f0f0] border-b border-[#f0f0f0]/10 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#f0f0f0] opacity-[0.01] blur-[200px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-[7vw] font-condensed uppercase leading-[0.85] tracking-tighter mb-12">
            O que muda quando você<br />
            <span className="italic font-light text-[#7a7a7a]">sobe de level?</span>
          </h2>
        </div>

        {/* Levels List */}
        <div className="max-w-4xl mx-auto space-y-1">
          {levelsCompact.map((level) => {
            const isLast = level.num === 7;
            return (
              <div 
                key={level.num}
                className={`group flex items-start gap-6 md:gap-8 py-5 md:py-6 border-b border-[#f0f0f0]/5 hover:border-[#f0f0f0]/20 transition-all duration-500 hover:pl-4 cursor-default ${isLast ? 'border-b-0' : ''}`}
              >
                <span className={`flex-shrink-0 font-montserrat font-[900] text-lg md:text-xl transition-colors duration-500 ${isLast ? 'text-[#f0f0f0]' : 'text-[#7a7a7a]/50 group-hover:text-[#f0f0f0]'}`}>
                  {level.num}
                </span>
                <p className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${isLast ? 'text-[#f0f0f0] font-medium' : 'text-[#7a7a7a] group-hover:text-[#f0f0f0]'}`}>
                  <span className="text-[#f0f0f0]/60 font-medium">No Level {level.num}</span>{' '}
                  {level.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Question */}
        <div className="text-center mt-16 mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-condensed uppercase tracking-tighter text-[#7a7a7a]">
            Em qual Level você está hoje?
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://forms.gle/JBhzytiUhuHGVzNz7"
            target="_blank"
            className="inline-flex items-center gap-8 bg-[#f0f0f0] text-[#0a0a0a] px-12 md:px-16 py-6 md:py-7 rounded-full font-black uppercase text-[11px] md:text-[12px] tracking-[0.4em] transition-all duration-700 hover:scale-105 active:scale-95 group shadow-[0_0_30px_rgba(240,240,240,0.08)]"
          >
            <span>QUERO SUBIR DE LEVEL</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Levels;
