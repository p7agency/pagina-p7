
import React from 'react';

const ForWhom: React.FC = () => {
  const items = [
    {
      code: "01",
      title: "Valor Invisível",
      problem: "Tem um serviço de elite, mas o digital parece amador.",
      solution: "Alinhamos sua imagem à qualidade real da sua entrega."
    },
    {
      code: "02",
      title: "Diferenciação",
      problem: "Cansado de ser comparado por preço e não por valor.",
      solution: "Construímos uma autoridade que torna a comparação impossível."
    },
    {
      code: "03",
      title: "Escala com Direção",
      problem: "Está crescendo, mas sente que falta um método sólido.",
      solution: "Aceleramos seu posicionamento com estratégia de grandes experts."
    },
    {
      code: "04",
      title: "Legado Digital",
      problem: "Já tem resultados, mas sua presença digital é obsoleta.",
      solution: "Criamos um ecossistema à altura do seu faturamento e história."
    },
    {
      code: "05",
      title: "Tailor Made",
      problem: "Fórmulas genéricas não funcionam para o seu negócio.",
      solution: "Estratégia artesanal pensada exclusivamente para o seu nicho."
    },
    {
      code: "06",
      title: "Liderança de Nicho",
      problem: "Quer ser a primeira opção na mente do seu cliente.",
      solution: "Posicionamento dominante através de clareza e estética de elite."
    }
  ];

  return (
    <section className="py-40 px-6 md:px-16 bg-white text-black border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase font-bold text-black/40 tracking-[0.5em]">Target Audience</p>
            <h2 className="text-7xl md:text-9xl font-condensed uppercase leading-[0.8] mb-4">
              Público<br />de Elite
            </h2>
            <div className="h-1 w-24 bg-black"></div>
          </div>
          <div className="max-w-sm">
            <p className="text-sm font-medium uppercase tracking-widest leading-relaxed opacity-60">
              A P7 não é para todos. É para quem entende que o digital é o palco principal do seu negócio.
            </p>
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
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[10px] uppercase font-bold tracking-widest group-hover:text-white/40 mb-2">Cenário Atual</p>
                    <p className="text-sm font-medium leading-relaxed group-hover:text-white">
                      {item.problem}
                    </p>
                  </div>
                  
                  <div className="h-px w-0 group-hover:w-full bg-white/20 transition-all duration-700"></div>
                  
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Solução P7</p>
                    <p className="text-sm italic text-white leading-relaxed">
                      {item.solution}
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
