import React from 'react';
import { CLIENTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 md:py-40 px-6 md:px-16 border-b border-white/10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20 md:mb-32">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-condensed uppercase leading-[0.85] max-w-4xl">Projetos já gerenciados pela P7</h2>
            <div className="h-1 w-24 bg-white mt-8"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CLIENTS.map((client) => (
            <a 
              key={client.id} 
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-white/10 aspect-square p-8 md:p-12 flex flex-col justify-between hover:bg-white cursor-pointer transition-colors duration-700 overflow-hidden text-white hover:text-black"
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                  {client.id}
                </span>
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl md:text-5xl font-condensed uppercase tracking-tighter leading-[0.85] mb-6">
                  {client.name}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-black/20 transition-all duration-700 mb-6"></div>
                <p className="text-xs md:text-sm font-medium leading-relaxed italic opacity-60 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {client.role}
                </p>
              </div>
            </a>
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