import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  inverted?: boolean;
}

export default function Logo({ className = "h-12 w-auto", style, inverted }: LogoProps) {
  return (
    <img
      src="/images/staycoolairco_logo.png"
      alt="StayCool Airconditioning"
      width={360}
      height={117}
      decoding="async"
      fetchPriority="high"
      className={className}
      style={{
        objectFit: 'contain',
        ...style
      }}
    />
  );
}
