import React from 'react';
import Logo from '../Logo';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-48 px-6 md:px-16 border-b border-[#f0f0f0]/10 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] h-[50vw] pointer-events-none"
        style={{ background: 'radial-gradient(circle at right center, rgba(240,240,240,0.025) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 items-start">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <Logo size="lg" className="mb-12" />
              <div className="h-[2px] w-12 bg-[#f0f0f0]/20 mb-8" />
              <p className="text-[10px] uppercase font-black text-[#7a7a7a] tracking-[0.5em]">Missão</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-12">
            <div className="space-y-8 cursor-default">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-[1.1] text-[#f0f0f0] tracking-tight">
                A P7 nasceu para quem <span className="font-black">não aceita ser apenas mais um</span> no digital.
              </h2>
              <div className="max-w-xl space-y-8 pt-4">
                <p className="text-base md:text-xl leading-relaxed text-[#7a7a7a] font-light">
                  Muitos profissionais têm um projeto excelente e são percebidos como mediocres. Não por falta de competência — <span className="text-[#f0f0f0] font-medium">por falta de posicionamento.</span>
                </p>
                <p className="text-lg md:text-2xl text-[#f0f0f0]/90 font-medium italic">
                  A P7 existe para mudar isso.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
                  <a
                    href="https://wa.me/5527999572486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-6 border border-[#f0f0f0]/20 px-8 py-4 font-black uppercase text-[9px] tracking-[0.3em] text-[#f0f0f0] hover:bg-[#f0f0f0] hover:text-[#0a0a0a] hover:border-[#f0f0f0] transition-all duration-500"
                  >
                    ELEVE SEU VALOR AGORA
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
