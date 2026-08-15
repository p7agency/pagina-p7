import React, { useEffect, useRef, useState } from 'react';
import Logo from '../Logo';

const MARQUEE_ITEMS = [
  'Posicionamento Digital',
  'Branding de Valor',
  'Estratégia de Conteúdo',
  'Autoridade Real',
  'Crescimento com Propósito',
  'Marca Inesquecível',
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

  const px = mousePos.x * 8;
  const py = mousePos.y * 6;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center bg-[#050505] text-[#f0f0f0] overflow-hidden"
    >
      {/* Orbs */}
      <div className="absolute pointer-events-none" style={{ transform: `translate(${px * 1.5}px, ${py * 1.2}px)`, transition: 'transform 0.7s ease-out' }}>
        <div className="absolute -top-60 -left-60 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.025) 0%, transparent 65%)' }} />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ transform: `translate(${-px * 0.8}px, ${-py * 0.6}px)`, transition: 'transform 1s ease-out' }}>
        <div className="w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.015) 0%, transparent 65%)' }} />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.03 }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px bg-[#f0f0f0]" style={{ left: `${(i + 1) * 9.09}%` }} />
        ))}
      </div>

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          top: `${32 + scrollY * 0.05}%`,
          opacity: Math.max(0, 0.15 - scrollY / 600),
          background: 'linear-gradient(to right, transparent, rgba(240,240,240,0.4), transparent)',
        }}
      />

      {/* ── CONTEÚDO ── */}
      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20"
        style={{ transform: `translateY(${scrollY * 0.14}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
      >
        {/* Topo: logo + status */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16 md:mb-20 pt-28 md:pt-36">
          <div style={{ transform: `translate(${px * 1.2}px, ${py * 0.8}px)`, transition: 'transform 0.5s ease-out' }}>
            <Logo size="md" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-[#f0f0f0]" style={{ animation: 'heroPulse 2.5s ease-in-out infinite', opacity: 0.7 }} />
              <span className="text-[9px] uppercase font-black tracking-[0.45em] opacity-30">Disponível Agora</span>
            </div>
            <span className="hidden sm:block text-[9px] uppercase font-black tracking-[0.45em] opacity-10">—</span>
            <span className="hidden sm:block text-[9px] uppercase font-black tracking-[0.45em] opacity-25">Brasil · 2025</span>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="w-full flex items-center gap-8 mb-12 md:mb-16">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(240,240,240,0.15))' }} />
          <span className="text-[8px] font-black uppercase tracking-[0.55em] opacity-15 whitespace-nowrap">EST. MMXXV — POSICIONAMENTO DIGITAL</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(240,240,240,0.15))' }} />
        </div>

        {/* Headline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-y-14">

          {/* Headline */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <span className="text-[9px] font-black tracking-[0.55em] uppercase opacity-15">001</span>
              <div className="w-8 h-px bg-[#f0f0f0] opacity-20" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase opacity-20">Manifesto</span>
            </div>

            <h1
              className="font-black uppercase leading-[0.82] tracking-[-0.03em] select-none"
              style={{
                fontSize: 'clamp(3.5rem, 10.5vw, 10rem)',
                transform: `translate(${px * 2}px, ${py * 1.2}px)`,
                transition: 'transform 0.4s ease-out',
              }}
            >
              <span className="block text-[#f0f0f0]">Do level</span>
              <span className="block">
                <span className="italic font-light"
                  style={{ WebkitTextStroke: '1px rgba(240,240,240,0.3)', color: 'transparent', fontSize: '0.88em' }}>
                  em que você
                </span>
              </span>
              <span className="block text-[#f0f0f0] relative">
                está
                <span className="absolute -right-4 md:-right-6 bottom-2 w-3 h-3 md:w-4 md:h-4 bg-[#f0f0f0]"
                  style={{ opacity: 0.7, animation: 'heroPulse 3s ease-in-out infinite' }} />
              </span>
              <span className="block italic font-light"
                style={{ WebkitTextStroke: '1.5px rgba(240,240,240,0.15)', color: 'transparent', fontSize: '0.85em' }}>
                ao level onde
              </span>
              <span className="block text-[#f0f0f0]">você quer</span>
              <span className="block"
                style={{ background: 'linear-gradient(100deg, #f0f0f0 0%, rgba(240,240,240,0.2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                chegar.
              </span>
            </h1>
          </div>

          {/* Coluna direita */}
          <div className="lg:col-span-4 lg:pl-12 flex flex-col gap-10 lg:pb-3">
            <div className="pl-5" style={{ borderLeft: '1px solid rgba(240,240,240,0.1)' }}>
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: 'rgba(240,240,240,0.5)' }}>
                A P7 existe para quem não aceita ser apenas mais um no digital. Aqui, posicionamento é estratégia — não sorte.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-8" style={{ borderTop: '1px solid rgba(240,240,240,0.08)', borderBottom: '1px solid rgba(240,240,240,0.08)' }}>
              {[
                { val: '7+', label: 'Anos de estratégia' },
                { val: '100+', label: 'Marcas posicionadas' },
                { val: '∞', label: 'Potencial de escala' },
              ].map((s) => (
                <div key={s.val} className="flex flex-col gap-1.5">
                  <span className="text-3xl md:text-4xl font-black tracking-tight">{s.val}</span>
                  <span className="text-[9px] uppercase tracking-[0.35em] font-bold opacity-25">{s.label}</span>
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 mt-1">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#f0f0f0]" style={{ opacity: 0.15 + i * 0.18 }} />)}
                </div>
                <span className="text-[9px] uppercase tracking-[0.35em] font-bold opacity-25">Nível de excelência</span>
              </div>
            </div>

            <a href="#levels"
              className="group relative inline-flex items-center justify-between w-full bg-[#f0f0f0] text-[#0a0a0a] px-7 py-5 font-black uppercase text-[10px] tracking-[0.35em] overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10">Descobrir meu Level</span>
              <div className="relative z-10 w-8 h-8 bg-[#0a0a0a] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="#f0f0f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-24 pb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(240,240,240,0.06)', paddingTop: '2rem' }}>
          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/p7.club/" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[9px] uppercase font-black tracking-[0.4em] opacity-25 hover:opacity-70 transition-opacity">
              @p7.club <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </a>
            <span className="text-[9px] opacity-10">|</span>
            <a href="https://www.linkedin.com/in/pedropoubel7/" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[9px] uppercase font-black tracking-[0.4em] opacity-25 hover:opacity-70 transition-opacity">
              LinkedIn <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </a>
          </div>
          <div className="flex items-center gap-3 opacity-15">
            <div className="w-px h-5 bg-[#f0f0f0]" />
            <span className="text-[9px] uppercase font-black tracking-[0.5em]">Scroll</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3"
        style={{ borderTop: '1px solid rgba(240,240,240,0.05)', opacity: Math.max(0, 0.5 - scrollY / 300) }}>
        <div className="flex" style={{ animation: 'marquee 28s linear infinite', width: 'max-content' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5 text-[9px] uppercase font-black tracking-[0.4em] whitespace-nowrap" style={{ opacity: 0.15 }}>
              {item} <span className="w-1 h-1 bg-[#f0f0f0]" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
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
