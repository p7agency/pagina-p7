import React, { useEffect, useRef, useState } from 'react';

// Para adicionar um vídeo: copie o ID do Shorts (o código depois de /shorts/) e acrescente aqui.
const videos = [
  {
    id: '1d0OnqjaGBg',
    name: 'Gustavo Staniscia',
    role: 'Fundador da Escola Beach Tennis e autor do livro 13 Golpes.',
  },
  {
    id: 'by3ytbWO3VE',
    name: 'Martina Bugs',
    role: 'Mentora de marcas, +30 anos no mercado do luxo.',
  },
  {
    id: 'WcE1RhD55Bc',
    name: 'Rolê com Rapha',
    role: 'Comunidade capixaba de entretenimento e conexão.',
  },
];

const VideoCard: React.FC<{ v: typeof videos[number]; index: number }> = ({ v, index }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="snap-center shrink-0 w-[72vw] sm:w-[280px] md:w-[300px] group">
      <div
        className="relative overflow-hidden rounded-[20px] bg-[#201F1B] ring-1 ring-[#DEDACF]/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
        style={{ aspectRatio: '9 / 16' }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`Depoimento ${v.name}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            id={`video-play-${v.id}`}
            onClick={() => setPlaying(true)}
            aria-label={`Assistir depoimento de ${v.name}`}
            className="absolute inset-0 w-full h-full text-left"
          >
            <img
              src={`https://i.ytimg.com/vi/${v.id}/oardefault.jpg`}
              onError={(e) => ((e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`)}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale-[40%] scale-[1.02] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#000000]/10 to-[#000000]/30" />
            <span className="absolute top-5 left-5 text-[10px] tracking-[0.4em] font-semibold text-[#DEDACF]/70">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative w-16 h-16 rounded-full border border-[#DEDACF]/50 backdrop-blur-md bg-[#DEDACF]/10 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-[#DEDACF]">
                <span className="absolute inset-0 rounded-full border border-[#DEDACF]/30" style={{ animation: 'vRing 2.8s ease-out infinite' }} />
                <svg width="14" height="16" viewBox="0 0 14 16" className="ml-1 fill-[#DEDACF] group-hover:fill-[#000000] transition-colors duration-500">
                  <path d="M0 0l14 8-14 8z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-5 left-5 right-5 text-[10px] uppercase tracking-[0.35em] text-[#DEDACF]/60">
              Assistir
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-5 pl-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-6 bg-[#DEDACF]/40" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#DEDACF]">{v.name}</span>
        </div>
        <p className="text-[11px] leading-relaxed text-[#7A756F] max-w-[260px]">{v.role}</p>
      </figcaption>
    </figure>
  );
};

const VideoCarousel: React.FC = () => {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || videos.length < 2) return;
    const id = setInterval(() => {
      const el = track.current;
      if (!el) return;
      const card = el.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 24 : 320;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const scrollBy = (dir: number) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    el?.scrollBy({ left: dir * (card ? card.offsetWidth + 24 : 320), behavior: 'smooth' });
  };

  return (
    <div
      className="relative mb-16 md:mb-24 bg-[#000000] text-[#DEDACF] overflow-hidden rounded-[28px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(700px circle at 85% 20%, rgba(222,218,207,0.07), transparent 60%)' }} />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 p-8 md:p-14 lg:p-16 items-center">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#7A756F] mb-6">Em vídeo</p>
          <h3 className="text-3xl md:text-5xl font-light leading-[1.05] tracking-tight">
            Quem viveu,
            <br />
            <span className="font-extrabold">conta.</span>
          </h3>
          <div className="h-px w-16 bg-[#DEDACF]/30 my-8" />
          {videos.length > 1 && (
            <div className="flex gap-3">
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  id={d < 0 ? 'videos-prev' : 'videos-next'}
                  onClick={() => scrollBy(d)}
                  aria-label={d < 0 ? 'Anterior' : 'Próximo'}
                  className="w-12 h-12 rounded-full border border-[#DEDACF]/20 flex items-center justify-center hover:bg-[#DEDACF] hover:text-[#000000] transition-colors duration-500"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={d < 0 ? 'rotate-180' : ''}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-7">
          <div
            ref={track}
            className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 ${videos.length === 1 ? 'justify-center lg:justify-end' : ''}`}
            style={{ scrollbarWidth: 'none' }}
          >
            {videos.map((v, i) => (
              <VideoCard key={v.id} v={v} index={i} />
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes vRing { 0% { transform: scale(1); opacity: .6 } 100% { transform: scale(1.7); opacity: 0 } }`}</style>
    </div>
  );
};

const beforeAfter = [
  { client: 'Rauan Pablo', before: '/cases/rauan-antes.jpg', after: '/cases/rauan-depois.png' },
  { client: 'Rolê com Rapha', before: '/cases/rcr-antes.png', after: '/cases/rcr-depois.png' },
];

const results = [
  {
    client: 'Rauan Pablo',
    value: 4533,
    prefix: '+',
    suffix: '',
    label: 'seguidores em 3 meses',
    detail: 'De 65 mil para 345 mil visualizações.',
  },
  {
    client: 'Susana Oliveira',
    value: 582,
    prefix: '+',
    suffix: '%',
    label: 'em visualizações em 3 meses',
    detail: '7x mais alcance: de 122,8 mil para 838 mil visualizações.',
  },
  {
    client: 'Rolê com Rapha',
    value: 10,
    prefix: '',
    suffix: ' mil',
    label: 'seguidores em 1 ano',
    detail: 'Do zero a uma comunidade engajada.',
  },
];

const CountUp: React.FC<{ end: number }> = ({ end }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n.toLocaleString('pt-BR')}</span>;
};


const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-40 px-6 md:px-16 bg-[#DEDACF] text-[#000000] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase font-black text-[#000000]/30 mb-4 tracking-[0.5em]">Reconhecimento de Mercado</p>
            <h2 className="text-4xl md:text-6xl font-condensed uppercase leading-[0.85] tracking-tighter">
              O que dizem<br />sobre a P7
            </h2>
            <div className="h-[3px] w-20 bg-[#000000] mt-6" />
          </div>
        </div>
        <VideoCarousel />
        {/* Resultados */}
        <div>
          <p className="text-[10px] uppercase font-black text-[#000000]/30 mb-8 tracking-[0.5em]">Resultados · Sem tráfego pago</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {results.map((r) => (
              <div
                key={r.client}
                className="group p-8 md:p-10 bg-[#000000] text-[#DEDACF] flex flex-col justify-between min-h-[300px] transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#DEDACF]/40">{r.client}</span>
                <div>
                  <div className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-3">
                    {r.prefix}<CountUp end={r.value} />{r.suffix}
                  </div>
                  <p className="text-sm uppercase font-bold tracking-[0.15em] mb-6">{r.label}</p>
                  <div className="h-px w-full bg-[#DEDACF]/10 mb-4" />
                  <p className="text-sm font-light text-[#DEDACF]/50 leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Antes x Depois */}
        <div>
          <p className="text-[10px] uppercase font-black text-[#000000]/30 mb-8 tracking-[0.5em]">Antes x Depois da P7</p>
          <div className="flex flex-col gap-3">
            {beforeAfter.map((c) => (
              <div key={c.client} className="bg-[#000000] p-6 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#DEDACF]/60">{c.client}</span>
                  <span className="w-1.5 h-1.5 bg-[#DEDACF]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.6fr] gap-4 md:gap-6 items-center">
                  <figure className="group">
                    <div className="bg-[#201F1B] p-2 overflow-hidden">
                      <img src={c.before} alt={`${c.client} antes da P7`} loading="lazy" className="w-full h-auto opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <figcaption className="mt-3 text-[10px] uppercase font-bold tracking-[0.4em] text-[#7A756F]">Antes</figcaption>
                  </figure>
                  <div className="flex md:flex-col items-center justify-center gap-2 text-[#DEDACF]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="rotate-90 md:rotate-0">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                  <figure className="group">
                    <div className="bg-[#201F1B] p-2 overflow-hidden ring-1 ring-[#DEDACF]/20">
                      <img src={c.after} alt={`${c.client} depois da P7`} loading="lazy" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700" />
                    </div>
                    <figcaption className="mt-3 text-[10px] uppercase font-bold tracking-[0.4em] text-[#DEDACF]">Depois</figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
