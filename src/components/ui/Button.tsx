import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    href,
    className,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-extrabold rounded-3xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
        primary: "bg-quatt-orange text-white hover:bg-[#D95528] focus:ring-quatt-orange shadow-lg shadow-quatt-orange/10",
        secondary: "bg-quatt-dark text-white hover:bg-[#1a1b1c] focus:ring-quatt-dark",
        outline: "border-2 border-gray-200 text-quatt-dark hover:border-quatt-dark focus:ring-quatt-dark bg-transparent",
        ghost: "text-quatt-dark hover:bg-gray-100",
    };

    const sizes = {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-base",
        lg: "h-16 px-10 text-lg",
    };

    const combinedClasses = cn(
        baseStyles,
        variants[variant],
        sizes[size],
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
