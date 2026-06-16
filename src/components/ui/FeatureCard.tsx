import React from 'react';
import { Check } from 'lucide-react';
import Card from './Card';

interface FeatureCardProps {
  title: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => (
  <Card variant="white" className="shadow-elevation-md">
    <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center mb-4">
      <Check className="w-5 h-5 text-ink" aria-hidden="true" />
    </div>
    <h3 className="font-display font-extrabold text-ink text-lg mb-2">{title}</h3>
    {children && <p className="text-ink-soft text-sm leading-relaxed">{children}</p>}
  </Card>
);

export default FeatureCard;
