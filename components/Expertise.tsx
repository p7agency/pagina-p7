import React from 'react';

const steps = [
  {
    code: "01",
    title: "Arquitetura de Marca",
    desc: "Análise profunda de essência para construir pilares de autoridade inquestionáveis.",
    tags: ["CLAREZA", "DNA", "VOZ"]
  },
  {
    code: "02",
    title: "DESIGN DE PERCEPÇÃO",
    desc: "Transformamos estratégia em visual de elite que comunica valor antes da primeira palavra.",
    tags: ["ESTÉTICA", "RITMO", "SOFISTICAÇÃO"]
  },
  {
    code: "03",
    title: "ECOSSISTEMA DE CONVERSÃO",
    desc: "A união entre tráfego qualificado e conteúdo magnético para gerar desejo real.",
    tags: ["ESCALA", "RETENÇÃO", "ROI"]
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 md:py-40 px-6 md:px-16 bg-black text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <p className="text-[10px] uppercase font-bold text-white/40 mb-6 md:mb-8 tracking-[0.5em]">NOSSA METODOLOGIA</p>
            <h2 className="text-4xl md:text-8xl font-[900] font-condensed uppercase leading-[0.9] md:leading-[0.8] mb-8 lg:mb-12">
              O RESULTADO<br />É FRUTO DA<br />
              <span className="text-white/20">ESTRATÉGIA.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative border border-white/10 p-8 md:p-16 hover:border-white transition-all duration-700 bg-white/0 hover:bg-white/5 cursor-default"
              >
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-4 md:space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] md:text-xs font-mono text-white/20 group-hover:text-white">{step.code}</span>
                      <h3 className="text-2xl md:text-4xl font-[900] font-condensed uppercase tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/40 group-hover:text-white transition-colors text-base md:text-lg leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap md:flex-col gap-2 md:gap-3 justify-start md:justify-center md:items-end">
                    {step.tags.map(tag => (
                      <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full opacity-30 group-hover:opacity-100 group-hover:border-white/40 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;