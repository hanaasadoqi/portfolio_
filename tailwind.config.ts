import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-950': 'var(--primary-950)',
        secondary: 'var(--secondary)',
        'secondary-50': 'var(--secondary-50)',
        'secondary-100': 'var(--secondary-100)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-700': 'var(--secondary-700)',
        'secondary-800': 'var(--secondary-800)',
        'secondary-900': 'var(--secondary-900)',
        'secondary-950': 'var(--secondary-950)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'app-gradient-light':
          'linear-gradient(to bottom, #cbd5e1, #bfdbfe, #a5b4fc, #f0abfc, #fbcfe8, #a5f3fc, #d8b4fe, #06b6de)',
        'app-gradient-dark':
          'linear-gradient(to bottom, #0f172a, #1e3a8a, #4338ca, #e879f9, #ec4899, #6d28d9, #0c4a6e, #0891b2)',
        'hero-light': 'linear-gradient(to bottom, #f1f5f9, #bfdbfe)',
        'hero-dark': 'linear-gradient(to bottom, #0f172a, #1e3a8a)',

        'hero-gradient': 'linear-gradient(to bottom, #f1f5f9, #bfdbfe)',
        'about-gradient': 'linear-gradient(to bottom, #bfdbfe, #a5b4fc)',
        'skills-gradient': 'linear-gradient(to bottom, #a5b4fc, #d8b4fe)',
        'experience-gradient': 'linear-gradient(to bottom, #d8b4fe, #fbcfe8)',
        'projects-gradient': 'linear-gradient(to bottom, #fbcfe8, #a5f3fc)',
        'writing-gradient': 'linear-gradient(to bottom, #a5f3fc, #d8b4fe)',
        'education-gradient': 'linear-gradient(to bottom, #d8b4fe, #67e8f9)',
        'contact-gradient': 'linear-gradient(to bottom, #67e8f9, #06b6de)',

        'hero-gradient-dark': 'linear-gradient(to bottom, #0f172a, #1e3a8a)',
        'about-gradient-dark': 'linear-gradient(to bottom, #1e3a8a, #4338ca)',
        'skills-gradient-dark': 'linear-gradient(to bottom, #4338ca, #e879f9)',
        'experience-gradient-dark':
          'linear-gradient(to bottom, #e879f9, #ec4899)',
        'projects-gradient-dark':
          'linear-gradient(to bottom, #ec4899, #6d28d9)',
        'writing-gradient-dark': 'linear-gradient(to bottom, #6d28d9, #0c4a6e)',
        'contact-gradient-dark': 'linear-gradient(to bottom, #0891b2, #22d3ee)',
        'education-gradient-dark':
          'linear-gradient(to bottom, #0c4a6e, #0891b2)',
      },
      boxShadow: {
        'inner-lg':
          'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        primary:
          '0 4px 6px -1px rgba(51, 65, 85, 0.1), 0 2px 4px -1px rgba(51, 65, 85, 0.06)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-50px)' },
          '30%': { transform: 'translateY(-100px)' },
          '40%': { transform: 'translateY(-150px)' },
          '50%': { transform: 'translateY(-200px)' },
          '60%': { transform: 'translateY(-250px)' },
          '70%': { transform: 'translateY(-300px)' },
          '80%': { transform: 'translateY(-350px)' },
          '90%': { transform: 'translateY(-400px)' },
          '100%': { transform: 'translateY(-450px)' },
        },
        wave: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '100% 100%' },
          '50%': {
            backgroundPosition: '100% 50%',
            backgroundSize: '100% 100%',
          },
          '100%': { backgroundPosition: '0% 50%', backgroundSize: '100% 100%' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(.9)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '0.7' },
        },
      },
      animation: {
        'orbit-slow': 'orbit 10s linear infinite',
        'orbit-fast': 'orbit 5s linear infinite',
        'float-slow': 'float 10s linear infinite',
        'float-fast': 'float 5s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-fast': 'spin 5s linear infinite',
        wave: 'wave 5s linear infinite',
        'pulse-slow': 'pulse 10s ease-in-out infinite',
        'pulse-fast': 'pulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
