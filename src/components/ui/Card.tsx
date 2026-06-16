import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'soft';
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ variant = 'white', className, children, ...props }) => {
  const variants = {
    white: 'bg-surface shadow-elevation-lg',
    soft: 'bg-surface-soft',
  };
  return (
    <div className={cn('rounded-2xl p-6 sm:p-8', variants[variant], className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
