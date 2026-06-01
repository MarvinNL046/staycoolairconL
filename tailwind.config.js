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
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        // StayCool brand design system (was Quatt-orange — remapped to brand blue 2026-06)
        quatt: {
          // NOTE: token name kept as `quatt.orange` so ~190 existing usages keep working,
          // but it now renders the StayCool brand CTA blue (#2080C0, white-text ~4:1).
          orange: '#2080C0', // Primary CTA (brand "waaier" transition blue)
          warm: '#F9F8F6',   // Background warm white (neutral, unchanged)
          dark: '#2B2C2D',   // Primary text
          gray: '#E6E6E6',   // Borders/Subtle backgrounds
        },
        blue: {
          600: '#2563eb', // WCAG AA compliant — prose/inline links (kept)
          700: '#1d4ed8', // WCAG AAA compliant — prose/inline links (kept)
        },
        // The `orange-*` scale is intentionally remapped to StayCool brand BLUE.
        // All existing `*-orange-*` utility classes now render blue without per-file edits.
        // Anchors: 400 = brand light #40B0E0 · 600 = CTA #2080C0 · 900 = brand dark #304090
        orange: {
          50:  '#ecf7fc',
          100: '#cfeaf8',
          200: '#a6d8f1',
          300: '#6ec6ea',
          400: '#40B0E0', // brand light blue — accent / icons / borders / gradient end
          500: '#2596d2',
          600: '#2080C0', // primary CTA background (white text ~4:1)
          700: '#2070B0', // darker — hover / active
          800: '#2a5aa0',
          900: '#304090', // brand dark blue — deepest fills / headings
        },
        gray: {
          600: '#4b5563', // WCAG AA compliant for large text
          700: '#374151', // WCAG AAA compliant
          900: '#111827', // Maximum contrast
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
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
