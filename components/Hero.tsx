import React, { useEffect, useRef, useState } from 'react';
import Logo from '../Logo';

const MARQUEE_ITEMS = [
  'Posicionamento Digital',
  'Autoridade Construída',
  'Audiência Qualificada',
  'Ativo de Negócio',
  'Crescimento com Estratégia',
  'Um Level Acima',
];

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const px = mousePos.x * 6;
  const py = mousePos.y * 4;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center bg-[#050505] text-[#f0f0f0] overflow-hidden"
    >
      {/* Orb top-left */}
      <div
        className="absolute pointer-events-none"
        style={{ transform: `translate(${px * 1.2}px, ${py}px)`, transition: 'transform 0.8s ease-out' }}
      >
        <div
          className="absolute -top-80 -left-80 w-[1000px] h-[1000px]"
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.022) 0%, transparent 60%)' }}
        />
      </div>

      {/* Orb bottom-right */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div
          className="w-[700px] h-[700px]"
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.012) 0%, transparent 60%)' }}
        />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Linhas verticais decorativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.025 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-[#f0f0f0]"
            style={{ left: `${(i + 1) * 11.11}%` }}
          />
        ))}
      </div>

      {/* ── CONTEÚDO ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-20">

        {/* Topo — logo + tag */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16 md:mb-20">
          <div style={{ transform: `translate(${px * 0.8}px, ${py * 0.5}px)`, transition: 'transform 0.6s ease-out' }}>
            <Logo size="md" />
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-1.5 h-1.5 bg-[#f0f0f0]"
              style={{ animation: 'heroPulse 2.5s ease-in-out infinite', opacity: 0.6 }}
            />
            <span className="text-[9px] uppercase font-black tracking-[0.45em] opacity-25">
              Posicionamento Digital · 2025
            </span>
          </div>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-8 mb-14 md:mb-18">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(240,240,240,0.12))' }} />
          <span className="text-[8px] font-black uppercase tracking-[0.5em] whitespace-nowrap" style={{ opacity: 0.15 }}>
            POSICIONAMENTO DIGITAL COMO ATIVO DE NEGÓCIO
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(240,240,240,0.12))' }} />
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-start">

          {/* Headline — 8 colunas */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[9px] font-black tracking-[0.5em] uppercase opacity-15">001</span>
              <div className="w-8 h-px bg-[#f0f0f0] opacity-15" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase opacity-15">Manifesto</span>
            </div>

            <h1
              className="font-black uppercase leading-[0.88] tracking-[-0.02em] select-none text-[#f0f0f0]"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 8rem)',
                transform: `translate(${px * 1.5}px, ${py * 0.8}px)`,
                transition: 'transform 0.4s ease-out',
              }}
            >
              Você entrega valor.{' '}
              <span
                className="italic font-light"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(240,240,240,0.35)',
                }}
              >
                Agora o mercado vai reconhecer isso.
              </span>
            </h1>
          </div>

          {/* Coluna direita — 4 colunas */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:pt-20">
            {/* Subheadline */}
            <div style={{ borderLeft: '2px solid rgba(240,240,240,0.12)', paddingLeft: '1.25rem' }}>
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: 'rgba(240,240,240,0.55)' }}>
                A P7 transforma o seu digital em um ativo real do seu negócio. Posicionamento claro, autoridade construída e uma audiência que te escolhe, não apenas te segue.
              </p>
            </div>

            {/* Linha de apoio */}
            <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(240,240,240,0.3)' }}>
              Cada etapa constrói mais do que presença. Constrói reconhecimento, valorização e escala, te levando um level acima de onde você está hoje.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-2">
              <a
                href="#levels"
                className="group relative inline-flex items-center justify-between w-full bg-[#f0f0f0] text-[#0a0a0a] px-7 py-5 font-black uppercase text-[10px] tracking-[0.35em] overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Descobrir meu Level</span>
                <div className="relative z-10 w-8 h-8 bg-[#0a0a0a] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="#f0f0f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
              </a>

              <a
                href="https://wa.me/5527999572486"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[9px] uppercase font-black tracking-[0.4em] opacity-30 hover:opacity-70 transition-opacity"
              >
                <span>Falar no WhatsApp</span>
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-20 md:mt-28 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(240,240,240,0.06)' }}
        >
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/p7.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[9px] uppercase font-black tracking-[0.4em] opacity-25 hover:opacity-60 transition-opacity"
            >
              @p7.club <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </a>
            <span className="opacity-10 text-[9px]">|</span>
            <a
              href="https://www.linkedin.com/in/pedropoubel7/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[9px] uppercase font-black tracking-[0.4em] opacity-25 hover:opacity-60 transition-opacity"
            >
              LinkedIn <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </a>
          </div>
          <div className="flex items-center gap-3" style={{ opacity: 0.15 }}>
            <div className="w-px h-5 bg-[#f0f0f0]" />
            <span className="text-[9px] uppercase font-black tracking-[0.5em]">Scroll</span>
          </div>
        </div>
      </div>

      {/* Marquee fixo no rodapé — sem sumir no scroll */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-3"
        style={{ borderTop: '1px solid rgba(240,240,240,0.04)' }}
      >
        <div className="flex" style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-5 px-6 text-[9px] uppercase font-black tracking-[0.4em] whitespace-nowrap"
              style={{ opacity: 0.12 }}
            >
              {item}
              <span className="w-1 h-1 bg-[#f0f0f0]" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
