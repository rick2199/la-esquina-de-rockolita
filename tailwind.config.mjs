/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores originales
        accent: '#D6B85A',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        
        // Colores de marca Rockolita
        'rockolita-primary': 'hsl(var(--rockolita-primary))', // Dorado #D6B85A
        'rockolita-secondary': 'hsl(var(--rockolita-secondary))', // Marrón #543A29
        'rockolita-dark': 'hsl(var(--rockolita-dark))', // Negro/gris oscuro
        'rockolita-cream': 'hsl(var(--rockolita-cream))', // Crema #F4E7C7
        'rockolita-red': 'hsl(var(--rockolita-red))', // Rojo acento #C14B2A
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        brand: ['Fredoka', 'sans-serif'], // Fuente para títulos de marca
      },
      backgroundImage: {
        'rockolita-gradient': 'linear-gradient(135deg, hsl(var(--rockolita-primary)) 0%, hsl(var(--rockolita-secondary)) 100%)',
        'rockolita-gradient-soft': 'linear-gradient(135deg, rgba(214, 184, 90, 0.1) 0%, rgba(84, 58, 41, 0.1) 100%)',
      },
      boxShadow: {
        'rockolita': '0 8px 25px rgba(214, 184, 90, 0.3)',
        'rockolita-lg': '0 12px 30px rgba(214, 184, 90, 0.2)',
      },
      animation: {
        'wiggle': 'wiggle 0.8s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 7%': { transform: 'rotateZ(0)' },
          '15%': { transform: 'rotateZ(-15deg)' },
          '20%': { transform: 'rotateZ(10deg)' },
          '25%': { transform: 'rotateZ(-10deg)' },
          '30%': { transform: 'rotateZ(6deg)' },
          '35%': { transform: 'rotateZ(-4deg)' },
          '40%, 100%': { transform: 'rotateZ(0)' },
        }
      }
    },
  },
  plugins: [],
};