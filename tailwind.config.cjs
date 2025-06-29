module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      // Tus extensiones existentes (se mantienen igual)
      transitionProperty: {
        'menu': 'max-height, opacity, transform',
        'height': 'height',
        'spacing': 'margin, padding',
        'collapse': 'all'
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '400': '400ms',
        '800': '800ms'
      },
      transitionTimingFunction: {
        'menu-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'menu-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'section': 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.4s ease-out',
        'fade-out-up': 'fadeOutUp 0.35s ease-in',
        'section-enter': 'sectionEnter 0.8s ease forwards'
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-15px)' }
        },
        sectionEnter: {
          '0%': { opacity: '0', transform: 'translateY(2.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      opacity: {
        '0': '0',
        '1': '1'
      },
      
      // Nuevas extensiones agregadas para el Hero responsive
      height: {
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh'
      },
      backdropBlur: {
        'ios-sm': '5px',
        'ios-md': '10px',
        'ios-lg': '20px'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
      },
      backgroundColor: {
        'ios-overlay': 'rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    extend: {
      opacity: ['group-hover', 'group-focus'],
      scale: ['group-hover', 'group-focus'],
      rotate: ['group-hover', 'group-focus'],
      transform: ['group-hover', 'group-focus'],
      // Nueva variante para soporte de backdrop-filter en Safari
      backdropFilter: ['responsive']
    }
  }
}