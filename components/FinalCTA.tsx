import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-32 md:py-60 px-6 md:px-16 bg-white text-black relative overflow-hidden flex flex-col items-center">
      {/* Elemento Visual de Fundo (Watermark) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center select-none overflow-hidden">
        <span className="text-[70vw] lg:text-[45vw] font-condensed uppercase leading-none tracking-tighter">P7</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl md:text-[10vw] font-condensed uppercase leading-[0.9] md:leading-[0.85] mb-12 md:mb-16 tracking-tighter">
          Pronto para<br />elevar seu <span className="italic font-light">valor?</span>
        </h2>
        
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <a 
            href="https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0" 
            target="_blank" 
            className="group/btn relative inline-flex items-center justify-center bg-black text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black uppercase text-[10px] md:text-[12px] tracking-[0.3em] transition-all duration-500 hover:scale-[1.05] shadow-2xl text-center"
          >
            <span>Falar com um estrategista</span>
          </a>

          <div className="flex items-center gap-3 opacity-20">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest">Aguardamos sua conexão estratégica</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;