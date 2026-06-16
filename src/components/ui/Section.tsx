import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: 'white' | 'soft' | 'none';
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ bg = 'none', className, children, ...props }) => {
  const bgs = { white: 'bg-surface', soft: 'bg-surface-soft', none: '' };
  return (
    <section className={cn('py-16 sm:py-24', bgs[bg], className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Section;
