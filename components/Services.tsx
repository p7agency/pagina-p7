import React, { useState } from 'react';
import { SERVICES } from '../constants';

const APPLICATION_LINK = 'https://forms.gle/iVxp54KpnEM3TCXa9';
const WHATSAPP_LINK = 'https://wa.me/5527999572486';

interface ProductCardProps {
  code: string;
  title: string;
  description: string;
  tag?: string;
  cta?: React.ReactNode;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ code, title, description, tag, cta, children }) => (
  <div className="mb-4 border border-[#DEDACF]/10 relative overflow-hidden group/card hover:border-[#DEDACF]/20 transition-colors duration-700">
    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-[#DEDACF]/[0.02] to-transparent" />
    <div className="p-6 md:p-8 lg:p-10 border-b border-[#DEDACF]/10">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-5 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.55em] text-[#7A756F] font-mono">[{code}]</span>
            <div className="h-px w-8 bg-[#DEDACF]/20" />
            {tag && <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#DEDACF]/20">{tag}</span>}
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-condensed uppercase tracking-tighter leading-[0.85]">
            {title}
          </h3>
        </div>
        <div className="lg:max-w-md">
          <p className="text-sm md:text-base text-[#7A756F] leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
    {(children || cta) && (
      <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="flex-1">{children}</div>
        {cta && <div className="flex-shrink-0">{cta}</div>}
      </div>
    )}
  </div>
);

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mentoria = SERVICES.find(s => s.isMentoria);
  const mov7 = SERVICES.find(s => s.title === 'MOV7');
  const p7club = SERVICES.find(s => s.title === 'P7 CLUB');

  return (
    <section id="produtos" className="py-20 md:py-28 px-6 md:px-16 border-b border-[#DEDACF]/10 bg-[#000000] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#7A756F]">O que oferecemos</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-condensed uppercase leading-[0.82] tracking-tighter">
              Produtos &<br />Soluções
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#DEDACF] to-transparent" />
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-sm text-[#7A756F] leading-relaxed font-light">
              Ecossistemas completos de posicionamento desenhados para marcas inesquecíveis.
            </p>
          </div>
        </div>

        {mentoria && (
          <div className="mb-4 border border-[#DEDACF]/10 relative overflow-hidden group/mentoria hover:border-[#DEDACF]/20 transition-colors duration-700">
            <div className="absolute inset-0 opacity-0 group-hover/mentoria:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-[#DEDACF]/[0.02] to-transparent" />
            <div className="p-6 md:p-8 lg:p-10 border-b border-[#DEDACF]/10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.55em] text-[#7A756F] font-mono">[{mentoria.code}]</span>
                    <div className="h-px w-8 bg-[#DEDACF]/20" />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#DEDACF]/20">Existem dois formatos</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-condensed uppercase tracking-tighter leading-[0.85]">
                    {mentoria.title}
                  </h3>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-sm md:text-base text-[#7A756F] leading-relaxed font-light">
                    {mentoria.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-b border-[#DEDACF]/10">
              {mentoria.subItems?.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 px-5 md:px-8 py-4 text-left text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] transition-all duration-300 border-r last:border-r-0 border-[#DEDACF]/10 relative ${
                    activeTab === idx ? 'bg-[#DEDACF] text-[#000000]' : 'text-[#7A756F] hover:text-[#DEDACF] hover:bg-[#DEDACF]/5'
                  }`}
                >
                  {activeTab === idx && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#000000]" />}
                  <span className="relative z-10">{sub.title}</span>
                </button>
              ))}
            </div>
            {mentoria.subItems?.map((sub, idx) => (
              <div key={idx} className={activeTab === idx ? 'block' : 'hidden'}>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                  <div className="flex-1 max-w-2xl">
                    <h4 className="text-xl md:text-2xl font-condensed uppercase tracking-tighter mb-6 text-[#DEDACF]">{sub.title}</h4>
                    <p className="text-sm md:text-base text-[#7A756F] leading-relaxed font-light">{sub.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a href={APPLICATION_LINK} target="_blank" rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-5 border border-[#DEDACF]/20 px-6 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-[#DEDACF] hover:bg-[#DEDACF] hover:text-[#000000] hover:border-[#DEDACF] transition-all duration-500 rounded-full whitespace-nowrap">
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

        {mov7 && (
          <ProductCard
            code={mov7.code}
            title={mov7.title}
            description={mov7.description}
            tag="Assessoria completa"
            cta={
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-5 border border-[#DEDACF]/20 px-6 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-[#DEDACF] hover:bg-[#DEDACF] hover:text-[#000000] hover:border-[#DEDACF] transition-all duration-500 rounded-full whitespace-nowrap">
                Falar no WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            }
          />
        )}

        {p7club && (
          <ProductCard
            code={p7club.code}
            title={p7club.title}
            description={p7club.description}
            tag="12 meses · Alta performance"
            cta={
              <span className="inline-flex items-center gap-3 border border-[#DEDACF]/10 px-6 py-3 text-[10px] font-black uppercase tracking-[0.35em] text-[#DEDACF]/30 rounded-full cursor-not-allowed select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DEDACF]/20" />
                Em Breve
              </span>
            }
          />
        )}

        <div className="mt-16 md:mt-20 flex justify-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#DEDACF]/10 flex items-center justify-center group-hover:bg-[#DEDACF] transition-all duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:text-[#000000] transition-colors">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#7A756F] group-hover:text-[#DEDACF] transition-colors">
              Quero construir meu posicionamento
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
