import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function Logo({ className = "h-12 w-auto", inverted = false }: LogoProps) {
  return (
    <img 
      src={inverted ? "/images/logo-white.svg" : "/images/logo.svg"}
      alt="StayCool Airconditioning" 
      className={className}
      style={{
        filter: inverted ? 'brightness(0) invert(1)' : 'none'
      }}
    />
  );
}