import React from 'react';

const deliverables = [
  {
    id: "01",
    title: "No Posicionamento",
    items: [
      "Clareza de proposta de valor",
      "Definição de persona e diferenciais",
      "Estrutura de comunicação, narrativa e pilares da marca"
    ]
  },
  {
    id: "02",
    title: "No Conteúdo",
    items: [
      "Linha editorial definida",
      "Roteiros e estrutura de conteúdo",
      "Edição, postagens e análise de métricas"
    ]
  },
  {
    id: "03",
    title: "No Branding",
    items: [
      "Identidade visual alinhada",
      "Direção criativa de imagem e vídeos",
      "Padrão estético da marca"
    ]
  },
  {
    id: "04",
    title: "Nos Produtos / Ofertas",
    items: [
      "Estrutura de ofertas organizada",
      "Clareza na proposta de valor",
      "Argumentos de venda definidos"
    ]
  },
  {
    id: "05",
    title: "No Funil de Vendas",
    items: [
      "Jornada do cliente estruturada",
      "Processo de conversão definido",
      "Base para aumento de vendas"
    ]
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="entregas" className="py-24 md:py-40 px-6 md:px-16 bg-black text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32">
          <h2 className="text-5xl md:text-8xl font-condensed uppercase tracking-tighter leading-[0.85] max-w-4xl">
            O QUE VOCÊ VAI RECEBER COM NOSSO TRABALHO?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {deliverables.map((item, index) => (
            <div 
              key={index} 
              className={`group border border-white/10 p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-700 cursor-default flex flex-col ${
                index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              } ${index === 4 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="text-xl font-mono opacity-20 group-hover:opacity-100 transition-opacity">[{item.id}]</span>
                <h3 className="text-3xl font-condensed uppercase tracking-tight">{item.title}</h3>
              </div>
              <ul className="space-y-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex-1">
                {item.items.map((bullet, idx) => (
                  <li key={idx} className="text-sm font-medium leading-relaxed flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50 flex-shrink-0"></span>
                    <span>{bullet}</span>
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