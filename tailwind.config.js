module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        hh: {
          base: {
            dark: '#333333',
            light: '#909294'
          },
          gold: '#F59C39',
          teal: '#46C0BD',
          yellow: '#EEBB3D'
        }
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif']
      },
      zIndex: {
        1: 1
      }
    }
  },
  plugins: []
}
