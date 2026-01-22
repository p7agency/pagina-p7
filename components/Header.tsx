import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Serviços', href: '#serviços' },
    { label: 'CREA7OR', href: '#crea7or' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-4 md:px-16 py-6 md:py-10 flex justify-between items-center uppercase text-[9px] md:text-[10px] tracking-widest font-black">
      <div className="flex-1">
        <a href="#" className="hover:opacity-50 transition-opacity">P7 AGENCY</a>
      </div>
      
      <div className="hidden lg:flex gap-12 flex-1 justify-center">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:opacity-50 transition-opacity">
            {item.label}
          </a>
        ))}
      </div>
      
      <div className="flex-1 flex justify-end">
        <a 
          href="https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0" 
          target="_blank" 
          className="border-2 border-white px-6 md:px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all text-center whitespace-nowrap"
        >
          CONECTAR
        </a>
      </div>
    </nav>
  );
};

export default Header;