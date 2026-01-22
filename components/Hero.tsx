import React from 'react';
import Logo from '../Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 md:px-16 py-24 md:py-32 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[80vw] md:h-[80vw] bg-white opacity-[0.01] blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-20 md:mb-32 animate-fade-in transition-all duration-1000 scale-90 md:scale-95 hover:scale-100">
          <Logo size="xl" />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 border-t border-white/10 pt-12 md:pt-16 items-start">
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-condensed uppercase leading-[0.9] tracking-tighter">
              Elevamos marcas através de <br />
              <span className="text-white/40 italic font-light tracking-normal">clareza</span>, valor e autoridade.
            </h1>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0" 
                target="_blank" 
                className="group relative inline-flex items-center gap-6 bg-white text-black px-10 py-5 md:px-12 md:py-6 rounded-full font-black uppercase text-[10px] md:text-[11px] tracking-[0.3em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <span>Iniciar Posicionamento</span>
                <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col lg:text-right space-y-6 md:space-y-8 group/side">
            <p className="text-base md:text-lg text-white/50 group-hover/side:text-white transition-colors duration-700 leading-relaxed font-light">
              A P7 Agency é focada em transformar a percepção digital de empresas e profissionais que buscam o <span className="text-white font-medium italic underline decoration-white/20 underline-offset-4">topo absoluto</span> do mercado.
            </p>
            <div className="pt-6 border-t border-white/5 w-full flex lg:justify-end">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">POSICIONAMENTO DE EXCELÊNCIA</span>
                <div className="w-2 h-2 rounded-full bg-white group-hover/side:animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10">
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-white"></div>
      </div>
    </section>
  );
};

export default Hero;