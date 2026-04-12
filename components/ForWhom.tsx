import React from 'react';

const ForWhom: React.FC = () => {
  const items = [
    {
      code: "01",
      title: "Estratégia",
      desc: "Entender onde você quer chegar e organizar cada ação para que faça sentido dentro de um objetivo maior."
    },
    {
      code: "02",
      title: "Humanização",
      desc: "Sair da comunicação fria e se posicionar de forma que as pessoas reconheçam verdade no que você diz. Quando existe identificação, a venda deixa de ser esforço e passa a ser consequência."
    },
    {
      code: "03",
      title: "Autenticidade",
      desc: "Comunicar sem distorcer quem você é para agradar ou seguir padrão. É isso que diferencia, gera autoridade e constrói confiança no longo prazo."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-white text-black border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between items-start mb-32 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-condensed uppercase leading-[0.8] mb-4">
              Como<br />Fazemos
            </h2>
            <div className="h-1 w-24 bg-black"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/5">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative border-r border-b border-black/5 p-12 min-h-[400px] flex flex-col justify-between hover:bg-black transition-colors duration-700 ease-in-out cursor-default"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono opacity-30 group-hover:text-white transition-colors">[{item.code}]</span>
                <div className="w-2 h-2 rounded-full border border-black group-hover:bg-white group-hover:border-white transition-all"></div>
              </div>

              <div>
                <h4 className="text-3xl md:text-4xl font-condensed uppercase mb-8 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h4>
                
                <div className="space-y-6">
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm font-medium leading-relaxed group-hover:text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
