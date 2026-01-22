import React from 'react';

const testimonials = [
  {
    name: "Martina Bugs",
    role: "Mentora de marcas, com vivência de +30 anos no mercado do luxo",
    text: "Pedro possui uma habilidade que poucos têm: enxergar a alma do cliente. Ele captou com precisão meu modo de expressão e a essência do que desejo transmitir ao meu público de alto padrão. O trabalho da P7 não é apenas marketing, é arquitetura de imagem."
  },
  {
    name: "Mariane Junqueira",
    role: "Mentora de marcas, com vivência de +30 anos no mercado do luxo",
    text: "Você soube captar a nossa história e nossos desejos de uma forma criativa e profissional. Esta parceria já é um grande sucesso, pois o digital finalmente reflete nossa trajetória real. A clareza que o Pedro traz para o projeto é o que faltava para nossa escala."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-40 px-6 md:px-16 bg-black border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <p className="text-[10px] uppercase font-bold text-white/40 mb-8 tracking-[0.5em] text-center">Reconhecimento de Mercado</p>
          <h2 className="text-5xl md:text-8xl font-condensed uppercase leading-none text-center">
            Vozes da<br />Autoridade
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {testimonials.map((t, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-16 md:gap-32 group`}>
              <div className="flex-1 space-y-12">
                <div className="relative">
                  <span className="absolute -top-20 -left-10 text-[15vw] font-condensed opacity-5 select-none">"</span>
                  <blockquote className="text-2xl md:text-5xl font-light leading-tight text-white/80 relative z-10 transition-colors group-hover:text-white">
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
        
        <div className="mt-40 text-center">
          <p className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-20">Conectando legados ao futuro digital através de autoridade real.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;