import React from 'react';

const Crea7or: React.FC = () => {
  const features = [
    {
      title: "12 Conteúdos Completos",
      desc: "Legenda, roteiro, cenário, gancho, CTA e referências. Tudo pronto para gravação.",
      detail: "Eliminamos o bloqueio criativo entregando a estrutura exata do que dizer e como se portar."
    },
    {
      title: "Arquitetura Estratégica",
      desc: "Linha editorial e calendário mensal definindo pilares e ordem de publicação.",
      detail: "Cada post tem um objetivo: ou ele educa, ou ele eleva autoridade, ou ele vende."
    },
    {
      title: "Mentoria de Alinhamento",
      desc: "Reuniões estratégicas para ajuste fino de mensagem e análise de performance.",
      detail: "Não é apenas entrega, é acompanhamento do seu crescimento e evolução de imagem."
    }
  ];

  return (
    <section id="crea7or" className="py-40 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-24 gap-8">
          <h2 className="text-[15vw] lg:text-[10vw] font-condensed uppercase leading-[0.7] flex items-baseline select-none">
            CREA<span className="font-montserrat font-[900] text-neutral-200 tracking-tighter">7</span>OR
          </h2>
          <div className="max-w-md">
            <p className="text-sm md:text-lg font-medium uppercase tracking-widest leading-tight opacity-60">
              O acelerador de autoridade para quem não tem tempo a perder.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-12 md:p-16 min-h-[450px] flex flex-col justify-between hover:bg-black transition-colors duration-700 ease-in-out cursor-default overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-xs font-mono opacity-20 group-hover:text-white/40 block mb-12">FEATURE_0{i+1}</span>
                <h4 className="text-4xl font-condensed uppercase leading-none mb-6 group-hover:text-white transition-colors">
                  {f.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:text-white/60 group-hover:opacity-100 transition-all">
                  {f.desc}
                </p>
              </div>

              <div className="relative z-10 pt-12 border-t border-black/5 group-hover:border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <p className="text-xs italic text-white/50 leading-relaxed">
                  {f.detail}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute -bottom-10 -right-4 text-[12rem] font-condensed opacity-[0.02] group-hover:opacity-[0.05] group-hover:text-white transition-all pointer-events-none">
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-black/5 pt-12">
          <p className="text-xl md:text-2xl font-light max-w-2xl leading-tight">
            Você domina o palco. Nós construímos o cenário, o roteiro e a luz.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0" 
            target="_blank" 
            className="group relative inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Garantir meu CREA7OR</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Crea7or;