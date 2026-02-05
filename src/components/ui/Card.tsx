import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'md', radius = '3xl' }) => {
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8 sm:p-10',
        xl: 'p-12 sm:p-16',
    };

    const radiusStyles = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        '4xl': 'rounded-4xl',
        '5xl': 'rounded-5xl',
    };

    return (
        <div className={`bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden ${radiusStyles[radius]} ${paddingStyles[padding]} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
