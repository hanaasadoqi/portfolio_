import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors';

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
        'accent-primary': colors.cyan,
        'accent-secondary': colors.pink,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'app-gradient-light':
          'linear-gradient(to bottom, var(--hero-300), var(--about-300), var(--skills-300), var(--experience-300), var(--projects-300), var(--writing-300), var(--education-300), var(--neutral-300))',
        'app-gradient-dark':
          'linear-gradient(to bottom, var(--hero-950), var(--about-950), var(--skills-950), var(--experience-950), var(--projects-950), var(--writing-950), var(--education-950), var(--neutral-950))',
        'hero-light': 'linear-gradient(to bottom, var(--hero-300), var(--about-300))',
        'hero-dark': 'linear-gradient(to bottom, var(--hero-950), var(--about-950))',
        'about-light': 'linear-gradient(to bottom, var(--about-300), var(--skills-300))',
        'about-dark': 'linear-gradient(to bottom, var(--about-950), var(--skills-950))',
        'skills-light': 'linear-gradient(to bottom, var(--skills-300), var(--experience-300))',
        'skills-dark': 'linear-gradient(to bottom, var(--skills-950), var(--experience-950))',
        'experience-light': 'linear-gradient(to bottom, var(--experience-300), var(--projects-300))',
        'experience-dark': 'linear-gradient(to bottom, var(--experience-950), var(--projects-950))',
        'projects-light': 'linear-gradient(to bottom, var(--projects-300), var(--writing-300))',
        'projects-dark': 'linear-gradient(to bottom, var(--projects-950), var(--writing-950))',
        'writing-light': 'linear-gradient(to bottom, var(--writing-300), var(--education-300))',
        'writing-dark': 'linear-gradient(to bottom, var(--writing-950), var(--education-950))',
        'education-light': 'linear-gradient(to bottom, var(--education-300), var(--hero-300))',
        'education-dark': 'linear-gradient(to bottom, var(--education-950), var(--hero-950))',
      },
      boxShadow: {
        'inner-lg':
          'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        primary:
          '0 4px 6px -1px rgba(51, 65, 85, 0.1), 0 2px 4px -1px rgba(51, 65, 85, 0.06)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries'), require('@tailwindcss/forms')],
}
export default config
