
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section id="resultados" className="py-40 px-6 md:px-16 bg-white text-black border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-24">
          <h2 className="text-xs md:text-sm uppercase font-black tracking-[0.6em]">Alcance & Performance</h2>
          
          <div className="flex items-center gap-3 border border-black/10 px-6 py-3 rounded-full bg-neutral-50 shadow-sm">
            <span className="text-[10px] uppercase font-black tracking-widest opacity-80">
              CASE: NICHO NUTRIÇÃO (PERFIL {'<'} 3K SEGUIDORES)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 items-center">
          {/* Card 1: Profile Views */}
          <div className="bg-white p-12 md:py-32 flex flex-col items-center text-center group border-r border-black/5 last:border-0">
            <h3 className="text-[18vw] md:text-[14vw] font-[900] font-condensed leading-none uppercase mb-8 transition-transform duration-700 group-hover:scale-105">
              913K+
            </h3>
            <p className="max-w-sm text-xs md:text-sm font-bold uppercase tracking-tight leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity">
              Visualizações orgânicas em 30 dias de posicionamento estratégico.
            </p>
          </div>

          {/* Card 2: Single Post Views */}
          <div className="bg-white p-12 md:py-32 flex flex-col items-center text-center group">
            <h3 className="text-[18vw] md:text-[14vw] font-[900] font-condensed leading-none uppercase mb-8 transition-transform duration-700 group-hover:scale-105">
              615K+
            </h3>
            <p className="max-w-sm text-xs md:text-sm font-bold uppercase tracking-tight leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity">
              Visualizações em um único conteúdo focado em autoridade e retenção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
