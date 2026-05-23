import React, { useState, useEffect, useRef } from 'react';

const levelsData = [
  {
    num: 0,
    title: "O Início da Jornada",
    desc: "Você é um profissional com desejo de construir uma marca que transmita autoridade, valor e autenticidade. Acumula conhecimento, mas ainda não construiu o que deseja."
  },
  {
    num: 1,
    title: "Clareza no Posicionamento",
    desc: "Você construiu clareza no posicionamento e agora sabe o que entrega e para quem entrega. Isso está claro para você e para seu cliente. Dessa forma, você atrai o cliente certo e se torna autêntico no mercado."
  },
  {
    num: 2,
    title: "Digital como Ativo",
    desc: "O digital está se tornando um ativo em seu negócio. Você está aparecendo mais para seu cliente ideal e está construindo um relacionamento de conexão com ele. Agora, você se torna a primeira opção na mente dele. Esse cliente sabe que precisa de você."
  },
  {
    num: 3,
    title: "Consolidação Digital",
    desc: "Seu projeto se consolidou no digital. Agora você está construindo produtos que resolvam a dor e o desejo real do seu cliente, porque agora você aprendeu a ouvir ele. Você o entende e sabe o que ele realmente precisa."
  },
  {
    num: 4,
    title: "Escala",
    desc: "Chegou a hora de escalar. Seus produtos já foram validados e muitas pessoas estão sendo transformadas através dele. Você precisa entender formas de atingir mais pessoas para gerar mais resultado."
  },
  {
    num: 5,
    title: "Comunidade",
    desc: "Seu cliente merece o melhor. Aqui ele está apaixonado em seu projeto e você começa a construir uma comunidade fiel aos princípios, valores e rituais da sua marca. Você está trabalhando para que ele se sinta pertencente a esse movimento e nunca mais queira sair."
  },
  {
    num: 6,
    title: "Gestão & Solidez",
    desc: "Você precisa administrar melhor o crescimento do seu negócio. Aqui você está entendendo como melhorar a gestão, reduzir custos, aumentar a qualidade, elevar ROI e construir um negócio com solidez."
  },
  {
    num: 7,
    title: "Excelência Máxima",
    desc: "Em toda cultura, em toda tradição, o 7 representa o ciclo completo. A perfeição. O que foi levado até o fim com excelência. Você atingiu o nível máximo de seu negócio e agora construiu uma marca com excelência, autenticidade e valor."
  }
];

const Levels: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [visibleLevels, setVisibleLevels] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt((entry.target as HTMLElement).dataset.level || '0');
            setVisibleLevels(prev => {
              if (!prev.includes(idx)) return [...prev, idx];
              return prev;
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.level-observe');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="levels"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a] text-[#f0f0f0] border-b border-[#f0f0f0]/10 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#f0f0f0] opacity-[0.01] blur-[200px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#f0f0f0] opacity-[0.01] blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-40">
          <p className="text-[11px] uppercase font-bold text-[#7a7a7a] mb-8 tracking-[0.5em]">Metodologia P7</p>
          <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-condensed uppercase leading-[0.82] tracking-tighter mb-12">
            Em qual <span className="italic font-light text-[#7a7a7a]">level</span><br />você está?
          </h2>
          <p className="text-lg md:text-xl text-[#7a7a7a] max-w-3xl mx-auto font-light leading-relaxed">
            Cada nível representa um estágio real do seu negócio no digital. Descubra onde você está hoje — e até onde você pode chegar.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="hidden lg:flex items-center justify-between mb-20 px-4">
          <div className="relative w-full h-[2px] bg-[#f0f0f0]/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7a7a7a] to-[#f0f0f0] rounded-full transition-all duration-1000 ease-out"
              style={{ width: activeLevel !== null ? `${(activeLevel / 7) * 100}%` : '0%' }}
            ></div>
            {levelsData.map((level) => (
              <button
                key={level.num}
                onClick={() => setActiveLevel(activeLevel === level.num ? null : level.num)}
                className={`absolute top-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black transition-all duration-500 cursor-pointer ${
                  activeLevel === level.num
                    ? 'bg-[#f0f0f0] text-[#0a0a0a] border-[#f0f0f0] scale-125'
                    : activeLevel !== null && level.num <= activeLevel
                      ? 'bg-[#7a7a7a] text-[#0a0a0a] border-[#7a7a7a]'
                      : 'bg-[#0a0a0a] text-[#7a7a7a] border-[#7a7a7a]/30 hover:border-[#f0f0f0]/50 hover:scale-110'
                }`}
                style={{
                  left: `${(level.num / 7) * 100}%`,
                  transform: `translateX(-50%) translateY(-50%) ${activeLevel === level.num ? 'scale(1.25)' : ''}`
                }}
              >
                {level.num}
              </button>
            ))}
          </div>
        </div>

        {/* Level Cards */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] md:left-[23px] lg:left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#f0f0f0]/10 to-transparent pointer-events-none"></div>

          <div className="space-y-4 md:space-y-6">
            {levelsData.map((level, index) => {
              const isVisible = visibleLevels.includes(index);
              const isActive = activeLevel === level.num;
              const isLast = level.num === 7;

              return (
                <div
                  key={level.num}
                  data-level={index}
                  className={`level-observe flex items-start gap-6 md:gap-10 cursor-pointer transition-all duration-700 ${isActive ? '' : ''}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.08}s`
                  }}
                  onClick={() => setActiveLevel(isActive ? null : level.num)}
                >
                  {/* Level Number */}
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center font-montserrat font-[900] text-sm md:text-base lg:text-lg relative z-10 transition-all duration-500 ${
                    isActive
                      ? 'bg-[#f0f0f0] text-[#0a0a0a] border-[#f0f0f0]'
                      : isLast
                        ? 'border-[#f0f0f0]/40 text-[#f0f0f0]/60'
                        : 'border-[#7a7a7a]/30 text-[#7a7a7a]'
                  }`}>
                    {level.num}
                  </div>

                  {/* Level Content */}
                  <div className={`flex-1 border ${isActive ? 'border-[#f0f0f0]/20 bg-[#f0f0f0]/[0.03]' : isLast ? 'border-[#f0f0f0]/10' : 'border-[#f0f0f0]/5'} p-6 md:p-8 lg:p-10 relative overflow-hidden group transition-all duration-500 hover:translate-x-3`}>
                    {/* Decorative corner for Level 7 */}
                    {isLast && (
                      <div className="absolute top-0 right-0 w-16 h-16">
                        <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[#f0f0f0]/20"></div>
                        <div className="absolute top-2 right-2 text-[8px] font-black tracking-[0.3em] text-[#f0f0f0]/20 uppercase">Max</div>
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#7a7a7a]">Level {level.num}</span>
                          <div className={`h-[1px] transition-all duration-700 ${isActive ? 'w-20 bg-[#f0f0f0]' : 'w-10 bg-[#7a7a7a]/30'}`}></div>
                          {isLast && <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#f0f0f0]/30 border border-[#f0f0f0]/10 px-3 py-1">Ciclo Completo</span>}
                        </div>
                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-condensed uppercase tracking-tighter mb-4 transition-colors duration-500 ${isActive ? 'text-[#f0f0f0]' : isLast ? 'text-[#f0f0f0]/80' : 'text-[#f0f0f0]/70'}`}>
                          {level.title}
                        </h3>
                      </div>
                    </div>

                    {/* Expandable description */}
                    <div
                      className="overflow-hidden"
                      style={{
                        maxHeight: isActive ? '300px' : '0px',
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? '16px' : '0px',
                        transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
                      }}
                    >
                      <div className="border-t border-[#f0f0f0]/10 pt-6">
                        <p className="text-base md:text-lg text-[#7a7a7a] leading-relaxed font-light max-w-3xl">
                          {level.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-24 md:mt-40 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#7a7a7a] font-light leading-relaxed">
              Independente do level em que você está — existe um <span className="text-[#f0f0f0] font-medium">próximo passo</span>. E a P7 foi construída para te levar até ele.
            </p>
          </div>
          <a
            href="https://forms.gle/JBhzytiUhuHGVzNz7"
            target="_blank"
            className="inline-flex items-center gap-8 bg-[#f0f0f0] text-[#0a0a0a] px-12 md:px-16 py-6 md:py-7 rounded-full font-black uppercase text-[11px] md:text-[12px] tracking-[0.4em] transition-all duration-700 hover:scale-105 active:scale-95 group shadow-[0_0_30px_rgba(240,240,240,0.08)]"
          >
            <span>QUERO SUBIR DE LEVEL</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Levels;
