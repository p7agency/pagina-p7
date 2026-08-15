import React, { useState } from 'react';
import { SERVICES } from '../constants';

const APPLICATION_LINK = 'https://forms.gle/iVxp54KpnEM3TCXa9';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mentoriaService = SERVICES.find(s => s.isMentoria);
  const otherServices = SERVICES.filter(s => !s.isMentoria);

  return (
    <section id="produtos" className="py-24 md:py-40 px-6 md:px-16 border-b border-[#f0f0f0]/10 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#7a7a7a]">O que oferecemos</p>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-condensed uppercase leading-[0.82] tracking-tighter">
              Produtos &<br />Soluções
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#f0f0f0] to-transparent" />
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-sm text-[#7a7a7a] leading-relaxed font-light">
              Ecossistemas completos de posicionamento desenhados para marcas inesquecíveis.
            </p>
          </div>
        </div>

        {/* MENTORIA P7 */}
        {mentoriaService && (
          <div className="mb-6 border border-[#f0f0f0]/10 relative overflow-hidden group/mentoria">

            <div className="absolute inset-0 opacity-0 group-hover/mentoria:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-[#f0f0f0]/[0.02] to-transparent" />

            <div className="p-8 md:p-12 lg:p-16 border-b border-[#f0f0f0]/10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.55em] text-[#7a7a7a] font-mono">[{mentoriaService.code}]</span>
                    <div className="h-px w-8 bg-[#f0f0f0]/20" />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#f0f0f0]/20">Existem dois formatos</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-condensed uppercase tracking-tighter mb-0 leading-[0.85]">
                    {mentoriaService.title}
                  </h3>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-base md:text-lg text-[#7a7a7a] leading-relaxed font-light">
                    {mentoriaService.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex border-b border-[#f0f0f0]/10">
              {mentoriaService.subItems?.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 px-6 md:px-10 py-5 text-left text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-300 border-r last:border-r-0 border-[#f0f0f0]/10 relative overflow-hidden ${
                    activeTab === idx
                      ? 'bg-[#f0f0f0] text-[#0a0a0a]'
                      : 'text-[#7a7a7a] hover:text-[#f0f0f0] hover:bg-[#f0f0f0]/5'
                  }`}
                >
                  {activeTab === idx && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0a0a0a]" />
                  )}
                  <span className="relative z-10">{sub.title}</span>
                </button>
              ))}
            </div>

            {mentoriaService.subItems?.map((sub, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${activeTab === idx ? 'block' : 'hidden'}`}
              >
                <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                  <div className="flex-1 max-w-2xl">
                    <h4 className="text-2xl md:text-3xl font-condensed uppercase tracking-tighter mb-6 text-[#f0f0f0]">
                      {sub.title}
                    </h4>
                    <p className="text-base md:text-lg text-[#7a7a7a] leading-relaxed font-light">
                      {sub.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={APPLICATION_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-5 border border-[#f0f0f0]/20 px-8 py-4 text-[10px] font-black uppercase tracking-[0.35em] text-[#f0f0f0] hover:bg-[#f0f0f0] hover:text-[#0a0a0a] hover:border-[#f0f0f0] transition-all duration-500 rounded-full whitespace-nowrap"
                    >
                      Formulário de Aplicação
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MOV7 e P7 CLUB */}
        <div className="flex flex-col">
          {otherServices.map((service) => (
            <div
              key={service.id}
              className="group relative border-b border-[#f0f0f0]/10 py-10 md:py-16 cursor-default overflow-hidden first:border-t first:border-[#f0f0f0]/10"
            >
              <div className="absolute inset-0 bg-[#f0f0f0] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group-hover:px-8 transition-all duration-700">
                <div className="flex items-center gap-10 md:gap-16">
                  <span className="text-base font-mono opacity-25 group-hover:text-[#0a0a0a] group-hover:opacity-100 transition-all whitespace-nowrap">
                    [{service.code}]
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-condensed uppercase tracking-tighter group-hover:text-[#0a0a0a] transition-colors duration-500">
                    {service.highlight ? (
                      <>
                        <span>P7 </span>
                        <span className="text-[#c8a97e] group-hover:text-[#0a0a0a] transition-colors duration-500">CLUB</span>
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                </div>

                <div className="md:max-w-md opacity-40 group-hover:opacity-100 group-hover:text-[#0a0a0a] transition-all duration-500">
                  <p className="text-sm md:text-base font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${service.highlight ? 'border-[#c8a97e]/40 group-hover:border-[#0a0a0a]' : 'border-[#f0f0f0]/15 group-hover:border-[#0a0a0a]'}`}>
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 ${service.highlight ? 'bg-[#c8a97e] group-hover:bg-[#0a0a0a]' : 'bg-[#f0f0f0] group-hover:bg-[#0a0a0a]'}`} />
                </div>
              </div>

              {service.highlight && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a97e]/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-24 md:mt-32 flex justify-center">
          <a
            href="https://wa.me/5527999572486"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full border border-[#f0f0f0]/10 flex items-center justify-center group-hover:bg-[#f0f0f0] transition-all duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:text-[#0a0a0a] transition-colors">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#7a7a7a] group-hover:text-[#f0f0f0] transition-colors">
              Quero construir meu posicionamento
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
