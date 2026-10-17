import React, { useEffect, useRef, useState } from 'react';

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

const testimonials = [
  {
    name: 'Martina Bugs',
    role: 'Mentora de marcas, +30 anos no mercado do luxo',
    text: 'O Pedro, da agência P7, é daqueles talentos raros. Quando nos encontramos on-line, a sintonia foi imediata. Ele captou com precisão o que eu buscava para minhas redes — meu modo de expressão, minha interação e a essência do que desejo transmitir ao meu público.',
  },
  {
    name: 'Mariane Junqueira',
    role: 'Mentora de marcas, ex-diretora Fendi por 13 anos',
    text: 'Pedro, gostaria de dizer que estou muito feliz com o seu trabalho. Você soube captar a nossa história, nossos desejos e está transmitindo isso nas suas postagens de uma forma criativa e profissional.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-40 px-6 md:px-16 bg-[#f0f0f0] text-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase font-black text-[#0a0a0a]/30 mb-4 tracking-[0.5em]">Reconhecimento de Mercado</p>
            <h2 className="text-4xl md:text-6xl font-condensed uppercase leading-[0.85] tracking-tighter">
              O que dizem<br />sobre a P7
            </h2>
            <div className="h-[3px] w-20 bg-[#0a0a0a] mt-6" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-12 py-10 md:py-12 px-8 md:px-12 gap-8 transition-colors duration-500 bg-[#e8e8e8] hover:bg-[#dcdcdc]"
            >
              <div className="lg:col-span-1 flex items-start">
                <span className="text-sm font-mono text-[#0a0a0a]/20 mt-1">0{index + 1}</span>
              </div>
              <div className="lg:col-span-8">
                <blockquote className="text-base md:text-lg font-light leading-relaxed text-[#0a0a0a]/75 group-hover:text-[#0a0a0a] transition-colors">
                  "{t.text}"
                </blockquote>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-end">
                <h4 className="text-lg font-black uppercase tracking-tight mb-2">{t.name}</h4>
                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#0a0a0a]/40 leading-relaxed">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Resultados */}
        <div className="mt-20 md:mt-28">
          <p className="text-[10px] uppercase font-black text-[#0a0a0a]/30 mb-8 tracking-[0.5em]">Resultados · Sem tráfego pago</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {results.map((r) => (
              <div
                key={r.client}
                className="group p-8 md:p-10 bg-[#0a0a0a] text-[#f0f0f0] flex flex-col justify-between min-h-[300px] transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#f0f0f0]/40">{r.client}</span>
                <div>
                  <div className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-3">
                    {r.prefix}<CountUp end={r.value} />{r.suffix}
                  </div>
                  <p className="text-sm uppercase font-bold tracking-[0.15em] mb-6">{r.label}</p>
                  <div className="h-px w-full bg-[#f0f0f0]/10 mb-4" />
                  <p className="text-sm font-light text-[#f0f0f0]/50 leading-relaxed">{r.detail}</p>
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
