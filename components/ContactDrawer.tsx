import React from 'react';

const ContactDrawer: React.FC = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-white text-black font-black uppercase text-[9px] md:text-[10px] px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 tracking-widest flex items-center gap-3 backdrop-blur-sm bg-white/95"
    >
      <span>VAMOS CONVERSAR</span>
      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
    </a>
  );
};

export default ContactDrawer;