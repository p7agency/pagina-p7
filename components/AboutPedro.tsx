import React, { useEffect, useState } from 'react';

const PRINCIPLES = [
  { k: 'Cultura', t: 'Marcas que fazem parte da conversa', d: 'Leitura de comportamento e repertório para criar conteúdo que conversa com o tempo presente.' },
  { k: 'Design', t: 'Identidade que se reconhece de longe', d: 'Estética consistente em cada ponto de contato, do feed ao produto.' },
  { k: 'Performance', t: 'Crescimento que se mede', d: 'Estratégia orientada a dados para transformar atenção em resultado real de negócio.' },
];

const AboutInteractive: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % PRINCIPLES.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const p = PRINCIPLES[active];

  return (
    <div className="pt-6 space-y-3" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid grid-cols-3 gap-px bg-[#000000]/10">
        {PRINCIPLES.map((item, i) => (
          <button
            key={item.k}
            id={`about-tab-${item.k.toLowerCase()}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative text-left px-4 md:px-6 py-5 transition-colors duration-500 ${
              active === i ? 'bg-[#000000] text-[#DEDACF]' : 'bg-[#DEDACF] text-[#000000]/50 hover:text-[#000000]'
            }`}
          >
            <span className="block text-[9px] font-bold tracking-[0.4em] opacity-50 mb-2">0{i + 1}</span>
            <span className="block text-sm md:text-base font-extrabold uppercase tracking-tight">{item.k}</span>
            {active === i && !paused && (
              <span key={active} className="absolute bottom-0 left-0 h-[2px] bg-[#DEDACF]" style={{ animation: 'aboutBar 4s linear forwards' }} />
            )}
          </button>
        ))}
      </div>

      <div className="relative bg-[#FFFFFF] p-8 md:p-10 min-h-[190px] overflow-hidden">
        <span className="absolute -right-4 -bottom-8 text-[140px] font-black leading-none text-[#000000]/[0.04] select-none pointer-events-none">
          {p.k}
        </span>
        <div key={active} style={{ animation: 'aboutIn 0.6s cubic-bezier(0.16,1,0.3,1) both' }} className="relative">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-[0.95] mb-4">{p.t}</h3>
          <p className="text-sm md:text-base text-[#7A756F] leading-relaxed max-w-md">{p.d}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-3">
        {[
          ['15+', 'marcas no portfólio'],
          ['+582%', 'maior salto em views'],
          ['0', 'tráfego pago nos cases'],
        ].map(([n, l]) => (
          <div key={l} className="group border border-[#000000]/10 p-5 hover:bg-[#201F1B] hover:border-[#201F1B] transition-colors duration-500">
            <div className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-[#DEDACF] transition-colors">{n}</div>
            <div className="mt-2 text-[10px] uppercase font-bold tracking-[0.25em] text-[#7A756F] group-hover:text-[#DEDACF]/60 transition-colors">{l}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes aboutBar { from { width: 0 } to { width: 100% } }
        @keyframes aboutIn { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
      `}</style>
    </div>
  );
};

const AboutPedro: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-40 px-6 md:px-16 bg-[#DEDACF] text-[#000000] border-b border-[#000000]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#000000]/30 mb-4">Fundador</p>
              <h2 className="text-6xl md:text-8xl font-condensed uppercase leading-[0.82] tracking-tighter">
                Pedro<br />Poubel
              </h2>
              <div className="h-[3px] w-20 bg-[#000000] mt-6 mb-8" />
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/P7-1.JPG"
                alt="Pedro Poubel"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#DEDACF] to-transparent" />
            </div>
            <p className="text-[10px] uppercase font-black tracking-[0.4em] text-[#000000]/30">
              FUNDADOR DA P7
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center pt-0 lg:pt-32 space-y-10">
            <div className="space-y-6 text-[#000000]/60 leading-relaxed text-base md:text-lg font-light">
              <p>
                Pedro Poubel é o fundador da marca P7.<br />
                A P7 nasce para ser uma extensão da vida de Pedro Poubel. Ela é feita para trazer ao mercado sua visão de mundo e seus princípios, aplicados em diferentes setores.
              </p>
              <p>
                Atua estruturando marcas e projetos que desejam se comunicar com clareza e estratégia no ambiente digital, usando o espaço como ferramenta de escala em seu negócio.
              </p>
              <p>
                Seu trabalho integra estratégia, conteúdo e modelo de negócio, com uma metodologia que foca em transformar conhecimento técnico em narrativa, garantindo que a excelência do cliente seja traduzida em posicionamento de excelência no mercado digital.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="https://www.instagram.com/poubel7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 border border-[#000000]/20 px-8 py-4 group/btn hover:bg-[#000000] hover:text-[#DEDACF] hover:border-[#000000] transition-all duration-500"
              >
                <span className="text-[10px] uppercase font-black tracking-[0.3em]">Seguir no Instagram</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/btn:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <AboutInteractive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPedro;
