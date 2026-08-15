import React from 'react';
import { CLIENTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-32 gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#7a7a7a] mb-4">Cases Selecionados</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-condensed uppercase leading-[0.82] tracking-tighter text-[#f0f0f0]">
              Projetos gerenciados<br />pela P7
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#f0f0f0] to-transparent mt-6" />
          </div>
          <p className="max-w-xs text-sm text-[#7a7a7a] leading-relaxed font-light hidden md:block text-right">
            Marcas e profissionais que confiaram sua presença digital à P7.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CLIENTS.map((client) => (
            <a
              key={client.id}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-10 md:p-12 min-h-[280px] flex flex-col justify-between hover:bg-[#f0f0f0] cursor-pointer transition-colors duration-500 text-[#f0f0f0] hover:text-[#0a0a0a] bg-[#111111]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#f0f0f0]/20 group-hover:text-[#0a0a0a]/30 transition-colors">{client.id}</span>
                <div className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-condensed uppercase tracking-tighter leading-tight mb-4">
                  {client.name}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-[#0a0a0a]/15 transition-all duration-600 mb-4" />
                <p className="text-xs font-light leading-relaxed text-[#f0f0f0]/40 group-hover:text-[#0a0a0a]/60 transition-colors duration-400 line-clamp-2">
                  {client.role}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-20 md:mt-24 flex flex-col items-center gap-4">
          <div className="h-12 w-px bg-[#f0f0f0]/10" />
          <p className="text-[9px] uppercase font-black tracking-[0.5em] text-[#f0f0f0]/15 text-center">
            Exploração contínua de novas fronteiras digitais
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
