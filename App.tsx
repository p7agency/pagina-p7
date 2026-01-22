import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ForWhom from './components/ForWhom';
import Projects from './components/Projects';
import AboutPedro from './components/AboutPedro';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import Vision from './components/Vision';
import Services from './components/Services';
import Crea7or from './components/Crea7or';
import Expertise from './components/Expertise';
import FinalCTA from './components/FinalCTA';
import ContactDrawer from './components/ContactDrawer';
import Logo from './Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden bg-black text-white font-sans">
      <Header />
      
      <main className="relative">
        <Hero />
        
        {/* Seção Sobre: Missão e Percepção de Valor */}
        <About />

        {/* Seção Público: Público de Elite (Para quem é) */}
        <ForWhom />

        {/* Seção Projetos: Os 10 Cases Selecionados */}
        <Projects />

        {/* Seção Pedro Poubel: Quem é o estrategista */}
        <AboutPedro />

        {/* Seção Depoimentos: Vozes da Autoridade */}
        <Testimonials />

        {/* Seção Prova Social: Alcance & Performance (Case Nutrição) */}
        <SocialProof />

        {/* Seção Visão: Autoridade, Clareza e Valor */}
        <Vision />

        {/* Seção Serviços: O catálogo de soluções */}
        <Services />

        {/* Seção CREA7OR: O acelerador de autoridade */}
        <Crea7or />

        {/* Seção Metodologia: O Resultado é Fruto da Estratégia */}
        <Expertise />

        {/* Call to Action Final */}
        <FinalCTA />
      </main>

      <footer className="py-32 px-6 md:px-16 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="flex flex-col gap-12">
            <Logo size="md" />
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">
                © 2026 P7 AGENCY — DIGITAL POSITIONING
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-20 max-w-xs leading-relaxed">
                ESTRATEGISTA DE POSICIONAMENTO E PERCEPÇÃO DE VALOR PARA MARCAS QUE NÃO ACEITAM O COMUM.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20 text-[10px] uppercase font-bold tracking-[0.3em]">
            <div className="flex flex-col gap-8">
              <span className="opacity-20 border-b border-white/10 pb-4">SOCIAL</span>
              <a href="https://www.instagram.com/p7.agency/" target="_blank" className="hover:opacity-50 transition-opacity flex items-center gap-2 group">
                Instagram <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="https://www.linkedin.com/in/pedropoubel7/" target="_blank" className="hover:opacity-50 transition-opacity flex items-center gap-2 group">
                LinkedIn <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            
            <div className="flex flex-col gap-8">
              <span className="opacity-20 border-b border-white/10 pb-4">ESTRUTURA</span>
              <a href="#projetos" className="hover:opacity-50 transition-opacity">Projetos</a>
              <a href="#serviços" className="hover:opacity-50 transition-opacity">Serviços</a>
              <a href="#sobre" className="hover:opacity-50 transition-opacity">Sobre</a>
            </div>
            
            <div className="flex flex-col gap-8">
              <span className="opacity-20 border-b border-white/10 pb-4">CONTATO</span>
              <a href="mailto:p7agency.contato@gmail.com" className="hover:opacity-50 transition-opacity">Email</a>
              <a href="https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0" target="_blank" className="hover:opacity-50 transition-opacity">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-10">DESIGNED BY P7 AGENCY ARCHITECTURE</p>
          <div className="flex gap-12 opacity-10 text-[9px] uppercase font-bold tracking-widest">
            <span>Privacidade</span>
            <span>Termos</span>
          </div>
        </div>
      </footer>

      <ContactDrawer />
    </div>
  );
};

export default App;