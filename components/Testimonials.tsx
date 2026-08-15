import React from 'react';

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
            <h2 className="text-5xl md:text-8xl font-condensed uppercase leading-[0.82] tracking-tighter">
              O que dizem<br />sobre a P7
            </h2>
            <div className="h-[3px] w-20 bg-[#0a0a0a] mt-6" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-12 py-16 md:py-20 px-10 md:px-14 gap-12 transition-colors duration-500 bg-[#e8e8e8] hover:bg-[#dcdcdc]"
            >
              <div className="lg:col-span-1 flex items-start">
                <span className="text-sm font-mono text-[#0a0a0a]/20 mt-1">0{index + 1}</span>
              </div>
              <div className="lg:col-span-8">
                <blockquote className="text-xl md:text-3xl font-light leading-[1.3] text-[#0a0a0a]/75 group-hover:text-[#0a0a0a] transition-colors mb-10">
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
      </div>
    </section>
  );
};

export default Testimonials;
