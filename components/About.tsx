import React from 'react';
import Logo from '../Logo';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-48 px-6 md:px-16 border-b border-[#f0f0f0]/10 bg-[#0a0a0a] relative overflow-hidden group/section">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#f0f0f0] opacity-[0.02] blur-[120px] rounded-full group-hover/section:opacity-[0.05] transition-opacity duration-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 md:gap-y-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40">
              <div className="mb-8 md:mb-12 group/logo transition-transform duration-700 hover:scale-105 inline-block">
                <Logo size="lg" />
              </div>
              <div className="h-[2px] w-12 bg-[#f0f0f0]/20 mb-8 md:mb-12 group-hover/section:w-24 transition-all duration-700"></div>
              <p className="text-[11px] uppercase font-bold text-[#7a7a7a] tracking-[0.5em] mb-4">Missão</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6 space-y-12 md:space-y-16">
            <div className="space-y-8 md:space-y-12 cursor-default">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-[1.1] md:leading-[1.05] text-[#f0f0f0] tracking-tight">
                A P7 nasceu para quem <span className="font-[900]">não aceita ser apenas mais um</span> no digital.
              </h2>
              
              <div className="max-w-xl space-y-8 md:space-y-10 pt-4">
                <p className="text-base md:text-xl leading-relaxed text-[#7a7a7a] font-light hover:text-[#f0f0f0]/80 transition-colors">
                  Muitos profissionais têm um projeto excelente e são percebidos como mediocres. Não por falta de competência — <span className="text-[#f0f0f0] font-medium">por falta de posicionamento.</span>
                </p>
                <p className="text-lg md:text-2xl text-[#f0f0f0]/90 font-medium italic">
                  A P7 existe para mudar isso.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
                  <a 
                    href="https://forms.gle/JBhzytiUhuHGVzNz7" 
                    target="_blank" 
                    className="group/btn relative inline-flex items-center gap-6 bg-transparent border border-[#f0f0f0]/20 text-[#f0f0f0] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:bg-[#f0f0f0] hover:text-[#0a0a0a] transition-all duration-700 ease-out overflow-hidden"
                  >
                    <span className="relative z-10">ELEVE SEU VALOR AGORA</span>
                    <div className="relative z-10 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-2 transition-transform">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;