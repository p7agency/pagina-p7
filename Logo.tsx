import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm:  'h-8 md:h-10',
    md:  'h-12 md:h-16',
    lg:  'h-20 md:h-28',
    xl:  'h-28 md:h-40',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logop7.png"
        alt="P7"
        className={`${sizeMap[size]} w-auto object-contain`}
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
};

export default Logo;
