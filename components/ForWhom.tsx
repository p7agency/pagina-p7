import React from 'react';

const items = [
  {
    code: '01',
    title: 'Estratégia',
    desc: 'Entender onde você quer chegar e organizar cada ação para que faça sentido dentro de um objetivo maior.',
  },
  {
    code: '02',
    title: 'Humanização',
    desc: 'Sair da comunicação fria e se posicionar de forma que as pessoas reconheçam verdade no que você diz. Quando existe identificação, a venda deixa de ser esforço e passa a ser consequência.',
  },
  {
    code: '03',
    title: 'Autenticidade',
    desc: 'Comunicar sem distorcer quem você é para agradar ou seguir padrão. É isso que diferencia, gera autoridade e constrói confiança no longo prazo.',
  },
];

const ForWhom: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-[#f0f0f0] text-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 md:mb-32 gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#0a0a0a]/40 mb-4">Metodologia</p>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-condensed uppercase leading-[0.82] tracking-tighter">
              Como<br />Fazemos
            </h2>
            <div className="h-[3px] w-20 bg-[#0a0a0a] mt-6" />
          </div>
          <p className="max-w-xs text-sm text-[#0a0a0a]/50 leading-relaxed font-light hidden md:block">
            Três pilares que sustentam cada projeto que a P7 toca.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-10 md:p-14 min-h-[380px] flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-700 cursor-default bg-[#e8e8e8]"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-[#0a0a0a]/30 group-hover:text-[#f0f0f0]/30 transition-colors">[{item.code}]</span>
                <div className="w-2 h-2 bg-[#0a0a0a] group-hover:bg-[#f0f0f0] transition-colors" />
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-condensed uppercase tracking-tighter mb-8 group-hover:text-[#f0f0f0] transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/60 group-hover:text-[#f0f0f0]/60 transition-colors duration-500">
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
