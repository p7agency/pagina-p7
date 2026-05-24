import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="produtos" className="py-24 md:py-40 px-6 md:px-16 border-b border-[#f0f0f0]/10 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-condensed uppercase leading-[0.8]">Produtos &<br />Soluções</h2>
            <div className="h-1 w-24 bg-[#f0f0f0]"></div>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-sm text-[#7a7a7a] leading-relaxed font-medium">
              Ecossistemas completos de posicionamento desenhados para marcas inesquecíveis.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`group relative border-b border-[#f0f0f0]/10 py-12 md:py-20 cursor-default overflow-hidden`}
            >
              {/* Background Reveal effect */}
              <div className={`absolute inset-0 ${service.highlight ? 'bg-[#f0f0f0]' : 'bg-[#f0f0f0]'} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group-hover:px-8 transition-all duration-700">
                <div className="flex items-center gap-12 md:gap-20">
                  <span className="text-xl font-mono opacity-30 group-hover:text-[#0a0a0a] group-hover:opacity-100 transition-all">[{service.code}]</span>
                  <h3 className={`text-3xl md:text-6xl font-condensed uppercase tracking-tighter group-hover:text-[#0a0a0a] transition-colors duration-500 ${service.highlight ? '' : ''}`}>
                    {service.highlight ? (
                      <>
                        <span>P7 </span>
                        <span className="text-[#c8a97e]">CLUB</span>
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                </div>

                <div className="md:max-w-md opacity-40 group-hover:opacity-100 group-hover:text-[#0a0a0a] transition-all duration-500">
                  <p className="text-sm md:text-base font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${service.highlight ? 'border-[#c8a97e]/30 group-hover:border-[#0a0a0a]' : 'border-[#f0f0f0]/20 group-hover:border-[#0a0a0a]'}`}>
                  <div className={`w-2 h-2 rounded-full transition-all ${service.highlight ? 'bg-[#c8a97e] group-hover:bg-[#0a0a0a]' : 'bg-[#f0f0f0] group-hover:bg-[#0a0a0a]'}`}></div>
                </div>
              </div>

              {/* Subtle accent line for P7 CLUB */}
              {service.highlight && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c8a97e]/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <a 
            href="https://forms.gle/JBhzytiUhuHGVzNz7" 
            target="_blank" 
            className="group flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full border border-[#f0f0f0]/10 flex items-center justify-center group-hover:bg-[#f0f0f0] transition-all duration-500">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:text-[#0a0a0a] transition-colors">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#7a7a7a] group-hover:text-[#f0f0f0] transition-colors">Quero construir meu posicionamento</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;