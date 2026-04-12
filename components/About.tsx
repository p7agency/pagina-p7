import React, { useState } from 'react';
import Logo from '../Logo';

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="sobre" className="py-24 md:py-48 px-6 md:px-16 border-b border-white/10 bg-black relative overflow-hidden group/section">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-white opacity-[0.02] blur-[120px] rounded-full group-hover/section:opacity-[0.05] transition-opacity duration-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 md:gap-y-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40">
              <div className="mb-8 md:mb-12 group/logo transition-transform duration-700 hover:scale-105 inline-block">
                <Logo size="lg" />
              </div>
              <div className="h-[2px] w-12 bg-white/20 mb-8 md:mb-12 group-hover/section:w-24 transition-all duration-700"></div>
              <p className="text-[10px] md:text-xs leading-relaxed text-white/40 max-w-[280px] font-bold uppercase tracking-[0.4em] italic transition-colors hover:text-white/80">
                A P7 AGENCY NASCEU PARA ESTRUTURAR O POSICIONAMENTO DE QUEM NÃO ACEITA SER APENAS MAIS UM NO DIGITAL.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6 space-y-12 md:space-y-16">
            <div 
              className="space-y-8 md:space-y-12 cursor-default"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-light leading-[1.1] md:leading-[1.05] text-white tracking-tight transition-all duration-700">
                <span className={`inline-block transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-100'}`}>
                  Nossa missão é solucionar
                </span> <br />
                <span className={`inline-block transition-all duration-500 ${isHovered ? 'translate-x-4' : ''}`}>
                  o maior gargalo do
                </span> <br />
                <span className={`inline-block transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-100'}`}>
                  mercado moderno:
                </span> <br />
                <span className={`block font-[900] mt-4 md:mt-6 transition-all duration-700 ${isHovered ? 'text-white scale-[1.02]' : 'text-white/90'}`}>
                  <span className="relative">
                    a falta de percepção de valor.
                    <span className={`absolute bottom-[-6px] md:bottom-[-10px] left-0 h-[4px] md:h-[6px] bg-white transition-all duration-1000 ${isHovered ? 'w-full opacity-100' : 'w-1/4 opacity-20'}`}></span>
                  </span>
                </span>
              </h2>
              
              <div className="max-w-xl space-y-8 md:space-y-10 pt-8 md:pt-12">
                <p className="text-base md:text-xl leading-relaxed text-white/50 font-light hover:text-white/80 transition-colors">
                  Muitas empresas possuem produtos ou serviços excelentes, mas falham em comunicar essa excelência no ambiente digital. Nós preenchemos essa lacuna projetando autoridade real.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
                  <a 
                    href="https://forms.gle/JBhzytiUhuHGVzNz7" 
                    target="_blank" 
                    className="group/btn relative inline-flex items-center gap-6 bg-transparent border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-700 ease-out overflow-hidden"
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