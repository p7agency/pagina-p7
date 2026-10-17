import React, { useEffect, useRef, useState } from 'react';

const MARQUEE_ITEMS = [
  'Estratégia personalizada',
  'Conteúdo original',
  'Visão de mercado',
  'Marca em evolução constante',
  'P7 Club',
];

const Hero: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 40 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = heroRef.current?.getBoundingClientRect();
      if (!r) return;
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      setMouse({ x: (nx - 0.5) * 2, y: (ny - 0.5) * 2 });
      setSpot({ x: nx * 100, y: ny * 100 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#000000] text-[#FFFFFF] overflow-hidden"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      {/* Spotlight que segue o cursor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(222,218,207,0.10), transparent 60%)`,
          transition: 'background 0.15s ease-out',
        }}
      />

      {/* Grid de pontos reativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(222,218,207,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, black, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, black, transparent 70%)`,
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── CONTEÚDO CENTRALIZADO ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-32 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-12" style={{ animation: 'heroFade 1s ease both' }}>
          <div className="w-1.5 h-1.5 bg-[#DEDACF]" style={{ animation: 'heroPulse 2.5s ease-in-out infinite' }} />
          <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#7A756F]">P7 Club</span>
          <div className="w-1.5 h-1.5 bg-[#DEDACF]" style={{ animation: 'heroPulse 2.5s ease-in-out infinite 1.25s' }} />
        </div>

        {/* Logo com tilt 3D */}
        <div style={{ perspective: '1200px' }} className="w-full flex justify-center mb-14">
          <img
            src="/logos/p7-club-white.png"
            alt="P7 Club"
            draggable={false}
            className="w-full max-w-[760px] h-auto select-none"
            style={{
              transform: `rotateY(${mouse.x * 10}deg) rotateX(${-mouse.y * 8}deg)`,
              transition: 'transform 0.25s ease-out',
              opacity: 1,
              animation: 'heroLogoIn 1.2s cubic-bezier(0.16,1,0.3,1) both',
            }}
          />
        </div>

        <h1
          className="font-extrabold uppercase leading-[0.95] tracking-tight max-w-4xl"
          style={{ fontSize: 'clamp(1.8rem, 4.2vw, 3.6rem)', animation: 'heroFade 1s ease 0.3s both' }}
        >
          Você entrega valor.{' '}
          <span className="text-[#7A756F]">Agora o mercado vai reconhecer isso.</span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-base md:text-lg font-medium leading-relaxed text-[#DEDACF]/70"
          style={{ animation: 'heroFade 1s ease 0.5s both' }}
        >
          A P7 transforma o seu digital em um ativo real do seu negócio. Posicionamento claro, autoridade construída e uma audiência que te escolhe, não apenas te segue.
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          style={{ animation: 'heroFade 1s ease 0.7s both' }}
        >
          <a
            href="#levels"
            id="hero-cta-level"
            className="group relative inline-flex items-center gap-6 bg-[#DEDACF] text-[#000000] pl-8 pr-3 py-3 font-extrabold uppercase text-[11px] tracking-[0.3em] overflow-hidden transition-all duration-500 hover:bg-[#FFFFFF] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Descobrir meu Level</span>
            <span className="w-10 h-10 bg-[#000000] flex items-center justify-center transition-transform group-hover:rotate-[-45deg]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="#DEDACF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a
            href="https://wa.me/5527999572486"
            id="hero-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 border border-[#7A756F]/40 text-[11px] uppercase font-bold tracking-[0.3em] text-[#DEDACF] hover:border-[#DEDACF] hover:bg-[#201F1B] transition-all duration-500"
          >
            Falar no WhatsApp →
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7A756F]">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#7A756F]" style={{ animation: 'heroScroll 2s ease-in-out infinite' }} />
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t border-[#DEDACF]/5">
        <div className="flex" style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-6 text-[9px] uppercase font-bold tracking-[0.4em] whitespace-nowrap text-[#7A756F]/60">
              {item}
              <span className="w-1 h-1 bg-[#7A756F]" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroLogoIn { 0% { opacity: 0; scale: 0.94; } 100% { opacity: 1; scale: 1; } }
        @keyframes heroFade { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes heroPulse { 0%,100% { opacity: .4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
        @keyframes heroScroll { 0%,100% { opacity: .2; transform: scaleY(.6); } 50% { opacity: 1; transform: scaleY(1); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
      `}</style>
    </section>
  );
};

export default Hero;
