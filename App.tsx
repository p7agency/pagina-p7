import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Projects from './components/Projects';
import AboutPedro from './components/AboutPedro';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Levels from './components/Levels';
import Logo from './Logo';

const App: React.FC = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('main > section').forEach((s) => obs.observe(s));
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => { obs.disconnect(); window.removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#DEDACF] selection:text-[#000000] overflow-x-hidden bg-[#000000] text-[#DEDACF] font-sans">
      <div className="p7-spot" />
      <Header />
      
      <main className="relative">
        <Hero />

        {/* Seção Público: Como Fazemos */}
        <ForWhom />

        {/* Seção Projetos: Os Cases Selecionados */}
        <Projects />

        {/* Seção Pedro Poubel: Quem é o estrategista */}
        <AboutPedro />

        {/* Seção Depoimentos: Vozes da Autoridade */}
        <Testimonials />

        {/* Seção Levels: Metodologia P7 */}
        <Levels />

        {/* Seção Serviços: O catálogo de soluções */}
        <Services />

        {/* Seção Metodologia: O Resultado é Fruto da Estratégia */}
        <Expertise />
      </main>

      <footer className="py-32 px-6 md:px-16 border-t border-[#DEDACF]/10 bg-[#000000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="flex flex-col gap-12">
            <Logo size="lg" variant="bar" />
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">
                © 2026 P7 — POSICIONAMENTO DIGITAL
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20 text-[10px] uppercase font-bold tracking-[0.3em]">
            <div className="flex flex-col gap-8">
              <span className="opacity-20 border-b border-[#DEDACF]/10 pb-4">SOCIAL</span>
              <a href="https://www.instagram.com/p7.club/" target="_blank" className="hover:opacity-50 transition-opacity flex items-center gap-2 group">
                Instagram <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="https://www.linkedin.com/in/pedropoubel7/" target="_blank" className="hover:opacity-50 transition-opacity flex items-center gap-2 group">
                LinkedIn <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            
            <div className="flex flex-col gap-8">
              <span className="opacity-20 border-b border-[#DEDACF]/10 pb-4">ESTRUTURA</span>
              <a href="#projetos" className="hover:opacity-50 transition-opacity">Projetos</a>
              <a href="#produtos" className="hover:opacity-50 transition-opacity">Produtos</a>
              <a href="#levels" className="hover:opacity-50 transition-opacity">Levels</a>
              <a href="#sobre" className="hover:opacity-50 transition-opacity">Sobre</a>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-[#DEDACF]/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-10">DESIGNED BY P7 ARCHITECTURE</p>
          <div className="flex gap-12 opacity-10 text-[9px] uppercase font-bold tracking-widest">
            <span>Privacidade</span>
            <span>Termos</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;