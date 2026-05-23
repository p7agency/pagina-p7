import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-[40px] md:h-[50px]',
    md: 'h-[70px] md:h-[80px]',
    lg: 'h-[12vw] md:h-[14vw]',
    xl: 'h-[20vw] md:h-[24vw]'
  };

  const currentSize = sizeClasses[size];
  const invertClass = variant === 'light' ? 'invert' : '';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img src="/P7.png" alt="P7" className={`${currentSize} w-auto object-contain ${invertClass}`} />
    </div>
  );
};

export default Logo;