import React from 'react';

interface WaveDividerProps {
  fill?: string;     // CSS color of the area BELOW the wave (the next section)
  className?: string;
}

// Renders a wavy bottom edge. Place at the bottom of a colored section so the
// next (usually white) section flows up into it.
const WaveDivider: React.FC<WaveDividerProps> = ({ fill = '#ffffff', className }) => (
  <svg
    className={className}
    viewBox="0 0 1200 54"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{ display: 'block', width: '100%', height: '54px' }}
  >
    <path d="M0,54 L0,20 C200,48 400,4 600,18 C800,32 1000,52 1200,16 L1200,54 Z" fill={fill} />
  </svg>
);

export default WaveDivider;
