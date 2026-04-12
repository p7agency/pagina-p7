import React from 'react';

const testimonials = [
  {
    name: "Martina Bugs",
    role: "Mentora de marcas, com vivência de +30 anos no mercado do luxo",
    text: "O Pedro, da agência P7, é daqueles talentos raros. Quando nos encontramos on-line, a sintonia foi imediata. Ele captou com precisão o que eu buscava para minhas redes - meu modo de expressão, minha interação e a essência do que desejo transmitir ao meu público."
  },
  {
    name: "Mariane Junqueira",
    role: "Mentora de marcas, com vivência de +30 anos no mercado do luxo",
    text: "Pedro, gostaria de dizer que estou muito feliz com o seu trabalho. Você soube captar a nossa história, nossos desejos e está transmitindo isso nas suas postagens de uma forma criativa e profissional."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-40 px-6 md:px-16 bg-black border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <p className="text-[10px] uppercase font-bold text-white/40 mb-8 tracking-[0.5em] text-center">Reconhecimento de Mercado</p>
          <h2 className="text-5xl md:text-8xl font-condensed uppercase leading-none text-center">
            O que dizem<br />sobre a P7
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {testimonials.map((t, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-16 md:gap-32 group`}>
              <div className="flex-1 space-y-12">
                <div className="relative">
                  <span className="absolute -top-20 -left-10 text-[15vw] font-condensed opacity-5 select-none">"</span>
                  <blockquote className="text-xl md:text-3xl font-light leading-tight text-white/80 relative z-10 transition-colors group-hover:text-white">
                    {t.text}
                  </blockquote>
                </div>
                
                <div className="pt-12 border-t border-white/10 inline-block">
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform">{t.name}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-relaxed max-w-sm">
                    {t.role}
                  </p>
                </div>
              </div>
              
              <div className="hidden lg:block w-px h-64 bg-white/5 group-hover:bg-white/20 transition-colors"></div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Testimonials;