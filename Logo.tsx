import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** true = versão preta (para fundos claros) */
  dark?: boolean;
  /** horizontal = P7 + CLUB lado a lado | bar = com divisor | stacked = CLUB menor */
  variant?: 'horizontal' | 'bar' | 'stacked';
}

const files = {
  horizontal: 'p7-club-h',
  bar: 'p7-club-bar',
  stacked: 'p7-club',
};

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', dark = false, variant = 'horizontal' }) => {
  const sizeMap = {
    sm: 'h-6 md:h-7',
    md: 'h-10 md:h-12',
    lg: 'h-16 md:h-24',
    xl: 'h-28 md:h-40',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={`/logos/${files[variant]}-${dark ? 'black' : 'white'}.png`}
        alt="P7 Club"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
