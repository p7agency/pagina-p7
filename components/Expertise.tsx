import React from 'react';

const deliverables = [
  {
    id: '01',
    title: 'Posicionamento',
    items: ['Clareza de proposta de valor', 'Definição de persona e diferenciais', 'Estrutura de comunicação e pilares da marca'],
  },
  {
    id: '02',
    title: 'Conteúdo',
    items: ['Linha editorial definida', 'Roteiros e estrutura de conteúdo', 'Edição, postagens e análise de métricas'],
  },
  {
    id: '03',
    title: 'Branding',
    items: ['Identidade visual alinhada', 'Direção criativa de imagem e vídeos', 'Padrão estético da marca'],
  },
  {
    id: '04',
    title: 'Produtos & Ofertas',
    items: ['Estrutura de ofertas organizada', 'Clareza na proposta de valor', 'Argumentos de venda definidos'],
  },
  {
    id: '05',
    title: 'Funil de Vendas',
    items: ['Jornada do cliente estruturada', 'Processo de conversão definido', 'Base para aumento de vendas'],
  },
];

const Expertise: React.FC = () => {
  return (
    <section id="entregas" className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a] text-[#f0f0f0] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#7a7a7a] mb-4">O que entregamos</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-condensed uppercase tracking-tighter leading-[0.82]">
              O que você vai receber com nosso trabalho
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#f0f0f0] to-transparent mt-6" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="group p-10 md:p-14 flex flex-col gap-10 hover:bg-[#f0f0f0] hover:text-[#0a0a0a] transition-all duration-700 cursor-default bg-[#111111]"
            >
              <div className="flex items-center gap-5">
                <span className="text-[10px] font-mono text-[#f0f0f0]/20 group-hover:text-[#0a0a0a]/30 transition-colors">[{item.id}]</span>
                <div className="h-px flex-1 bg-[#f0f0f0]/10 group-hover:bg-[#0a0a0a]/15 transition-colors" />
              </div>
              <h3 className="text-3xl md:text-4xl font-condensed uppercase tracking-tighter">{item.title}</h3>
              <ul className="space-y-4 flex-1">
                {item.items.map((bullet, idx) => (
                  <li key={idx} className="text-sm font-light leading-relaxed flex items-start gap-3 text-[#f0f0f0]/50 group-hover:text-[#0a0a0a]/60 transition-colors duration-500">
                    <span className="mt-2 w-1 h-1 bg-current flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
