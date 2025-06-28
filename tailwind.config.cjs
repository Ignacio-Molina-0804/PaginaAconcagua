module.exports = {
   content: [
    "./src/**/*.{astro,html,js,ts}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'menu': 'max-height, opacity, transform',
        'height': 'height',
        'spacing': 'margin, padding',
        'collapse': 'all'
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'menu-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'menu-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.4s ease-out',
        'fade-out-up': 'fadeOutUp 0.35s ease-in'
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-15px)' }
        }
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
      transform: ['group-hover', 'group-focus']
    }
  }
}