import React from 'react';

const items = [
  {
    code: '01',
    title: 'Estratégia personalizada',
    desc: 'Estratégia personalizada para cada cliente.',
  },
  {
    code: '02',
    title: 'Conteúdo original',
    desc: 'Conteúdo original e de alto impacto.',
  },
  {
    code: '03',
    title: 'Visão de mercado',
    desc: 'Visão de mercado para construção de uma marca com evolução constante.',
  },
];

const ForWhom: React.FC = () => {
  return (
    <section
      className="py-24 md:py-40 px-6 md:px-16 bg-[#DEDACF] text-[#000000] overflow-hidden"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#7A756F] mb-4">Conceito</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              Como<br />Fazemos
            </h2>
            <div className="h-[3px] w-20 bg-[#201F1B] mt-6" />
          </div>
          <p className="max-w-sm text-base md:text-lg text-[#7A756F] leading-relaxed font-medium hidden md:block">
            Três pilares que sustentam cada projeto da P7.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-10 md:p-14 min-h-[380px] flex flex-col justify-between bg-[#FFFFFF] hover:bg-[#201F1B] transition-colors duration-700 cursor-default"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-[#7A756F] group-hover:text-[#DEDACF]/60 transition-colors">[{item.code}]</span>
                <div className="w-2 h-2 bg-[#000000] group-hover:bg-[#DEDACF] transition-colors" />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-[0.95] mb-8 group-hover:text-[#FFFFFF] transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed text-[#7A756F] group-hover:text-[#DEDACF] transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
