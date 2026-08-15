import React from 'react';
import Logo from '../Logo';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Levels', href: '#levels' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-16 py-5 flex justify-between items-center uppercase text-[9px] md:text-[10px] tracking-widest font-black bg-[#050505]/90 backdrop-blur-sm border-b border-[#f0f0f0]/5">
      <div className="flex-1">
        <a href="#">
          <Logo size="sm" />
        </a>
      </div>

      <div className="hidden lg:flex gap-12 flex-1 justify-center text-[#f0f0f0]/50 hover:[&>a]:text-[#f0f0f0] [&>a]:transition-colors">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex-1 flex justify-end">
        <a
          href="https://wa.me/5527999572486"
          target="_blank"
          className="border border-[#f0f0f0]/20 px-6 md:px-8 py-2.5 hover:bg-[#f0f0f0] hover:text-[#0a0a0a] hover:border-[#f0f0f0] transition-all text-center whitespace-nowrap text-[#f0f0f0]"
        >
          CONECTAR
        </a>
      </div>
    </nav>
  );
};

export default Header;
