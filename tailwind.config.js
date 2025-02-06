/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        blue: {
          600: '#2563eb', // WCAG AA compliant
          700: '#1d4ed8', // WCAG AAA compliant
        },
        gray: {
          600: '#4b5563', // WCAG AA compliant for large text
          700: '#374151', // WCAG AAA compliant
          900: '#111827', // Maximum contrast
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h2: {
              color: '#111827',
              fontWeight: '700',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            ul: {
              li: {
                '&::before': {
                  backgroundColor: '#2563eb',
                },
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    forms({
      strategy: 'class',
    }),
    typography,
  ],
};
