// import fonts
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFEEE9',
          200: '#FFD5C8',
          300: '#FFBCA7',
          400: '#FF8964',
          500: '#FF5722',
          600: '#E64E1F',
          700: '#993414',
          800: '#73270F',
          900: '#4D1A0A',
        },
      },
      // for the background-colors
      backgroundColor: {
        dark: 'var(--dark-background-color)', // bg-dark
        page: 'var(--page-background-color)', // bg-page
        content: 'var(--content-background-color)', // bg-content
        header: 'var(--header-background-color)', // class: `bg-header`
        card: 'var(--card-background-color)', // bg-card
      },
      textColor: {
        default: 'var(--default-text-color)', // .text-default
        secondary: 'var(--secondary-text-color)', // text-secondary - for subtitles etc
        excerpt: 'var(--excerpt-text-color)', // text-excerpt
      },
      translate: {
        '-2/3': '-66%',
        '-1/3': '-33%',
      },
      fontFamily: {
        novasquare: ['Nova Square'],
        novaflat: ['Nova Flat'],
        novaround: ['Nova Round'],
        inter: 'Inter',
      },
      // shadow
      boxShadow: {
        1: '0px 0px 10px 2px rgba(0,0,0,0.05)',
        2: '0px 0px 15px 3px rgba(0,0,0,0.05)',
        3: '0px 0px 20px 4px rgba(0,0,0,0.05)',
      },

      // animation
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInFromTop: {
          from: {
            opacity: '0',
            transform: 'translateY(-1rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        fadeInFromBottom: {
          from: {
            opacity: '0',
            transform: 'translateY(1rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        fadeInFromRight: {
          from: {
            opacity: '0',
            transform: 'translateX(1rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0rem)',
          },
        },
        'fadeIn-from-Left': {
          from: {
            opacity: '0',
            transform: 'translateX(-1rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0rem)',
          },
        },
        expand: {
          from: {
            width: '0',
          },
          to: {
            width: '50%',
          },
        },
      },
      animation: {
        expand: 'expand 500ms ease-in-out 100ms 1 normal forwards',
        fadeIn: 'fadeIn 200ms ease 200ms 1 normal forwards',
        fadeInFromTop: 'fadeInFromTop 500ms ease 1 normal forwards',
        fadeInFromBottom: 'fadeInFromBottom 500ms ease 1 normal forwards',
        fadeInFromRight: 'fadeInFromRight 500ms ease 1 normal forwards',
        wiggle: 'wiggle 1s ease-in-out 1',
      },
    },
  },
}
