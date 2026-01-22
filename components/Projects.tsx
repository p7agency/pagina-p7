import React from 'react';
import { CLIENTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 md:py-40 px-6 md:px-16 border-b border-white/10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase font-bold text-white/40 tracking-[0.5em]">Selected Works</p>
            <h2 className="text-6xl md:text-9xl font-condensed uppercase leading-[0.8]">Projetos<br />P7</h2>
            <div className="h-1 w-24 bg-white"></div>
          </div>
          <div className="max-w-xs text-right hidden lg:block">
            <p className="text-sm text-white/40 leading-relaxed italic">
              "A percepção de valor não é um acidente, é o resultado de um posicionamento construído com intenção estratégica."
            </p>
          </div>
        </div>
        
        <div className="flex flex-col">
          {CLIENTS.map((client) => (
            <div 
              key={client.id} 
              className="group relative border-b border-white/10 py-8 md:py-16 cursor-pointer transition-all duration-700 md:hover:px-12"
            >
              {/* Overlay Background on Hover - Only Desktop */}
              <div className="absolute inset-0 bg-white translate-x-full md:group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                <div className="flex items-center gap-6 md:gap-16 md:flex-1">
                  <span className="text-xl md:text-4xl font-condensed opacity-20 md:group-hover:opacity-100 md:group-hover:text-black transition-all duration-500 min-w-[2.5rem] md:min-w-[3rem]">
                    {client.id}
                  </span>
                  <h3 className="text-3xl md:text-6xl lg:text-7xl font-condensed uppercase tracking-tighter md:group-hover:text-black transition-colors duration-500 lg:max-w-[400px] leading-[0.85]">
                    {client.name}
                  </h3>
                </div>

                {/* Descrição sempre visível no mobile, ou com hover no desktop */}
                <div className="md:flex-1 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-150">
                  <p className="text-sm md:text-base md:text-black font-medium leading-relaxed italic lg:max-w-md md:ml-auto lg:mr-12">
                    {client.role}
                  </p>
                </div>

                <div className="hidden lg:flex opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-8 group-hover:translate-x-0">
                  <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 flex flex-col items-center">
          <div className="h-16 md:h-20 w-px bg-white/10 mb-8 animate-bounce"></div>
          <p className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-20 text-center">Exploração contínua de novas fronteiras digitais</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;