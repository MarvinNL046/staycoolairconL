import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'inverse';
    size?: 'sm' | 'md' | 'lg';
    shape?: 'rounded' | 'pill';
    href?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    shape = 'rounded',
    href,
    className,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-extrabold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
        primary: "bg-quatt-orange text-white hover:bg-[#2070B0] focus:ring-quatt-orange shadow-lg shadow-quatt-orange/10",
        secondary: "bg-quatt-dark text-white hover:bg-[#1a1b1c] focus:ring-quatt-dark",
        outline: "border-2 border-gray-200 text-quatt-dark hover:border-quatt-dark focus:ring-quatt-dark bg-transparent",
        ghost: "text-quatt-dark hover:bg-gray-100",
        accent: "bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-elevation-md",
        inverse: "bg-white text-ink hover:bg-surface-soft focus:ring-white shadow-elevation-sm",
    };

    const shapes = {
        rounded: "rounded-3xl",
        pill: "rounded-pill",
    };

    const sizes = {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-base",
        lg: "h-16 px-10 text-lg",
    };

    const combinedClasses = cn(
        baseStyles,
        variants[variant],
        shapes[shape],
        sizes[size],
        variant === 'primary' && shape === 'rounded' && 'shiny-btn',
        className
    );

    if (href) {
        if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
            return (
                <a href={href} className={combinedClasses}>
                    {children}
                </a>
            );
        }
        return (
            <Link to={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
