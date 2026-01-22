import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const colorClass = variant === 'light' ? 'text-white' : 'text-black';
  
  const sizeClasses = {
    sm: { p7: 'text-[32px] md:text-[44px]', agency: 'text-[5px] md:text-[6px]', tracking: 'tracking-[0.1em]', gap: 'ml-1', mb: 'mb-[-1px]' },
    md: { p7: 'text-[64px] md:text-[88px]', agency: 'text-[9px] md:text-[12px]', tracking: 'tracking-[0.12em]', gap: 'ml-2', mb: 'mb-[-2px]' },
    lg: { p7: 'text-[10vw] md:text-[14vw]', agency: 'text-[1.2vw] md:text-[1.8vw]', tracking: 'tracking-[0.15em]', gap: 'ml-[0.3vw]', mb: 'mb-[-0.2vw]' },
    xl: { p7: 'text-[18vw] md:text-[22vw]', agency: 'text-[2.2vw] md:text-[2.8vw]', tracking: 'tracking-[0.15em]', gap: 'ml-[0.5vw]', mb: 'mb-[-0.4vw]' }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex items-end font-montserrat select-none ${colorClass} ${className} leading-none`}>
      <span className={`font-[900] ${currentSize.p7} tracking-tighter`}>
        P
      </span>
      
      <div className={`flex flex-col items-center ${currentSize.gap}`}>
        <span className={`font-[400] uppercase ${currentSize.agency} ${currentSize.tracking} ${currentSize.mb} translate-y-[15%]`}>
          AGENCY
        </span>
        <span className={`font-[900] ${currentSize.p7}`}>
          7
        </span>
      </div>
    </div>
  );
};

export default Logo;