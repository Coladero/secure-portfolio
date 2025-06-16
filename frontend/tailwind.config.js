module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'], // Fuente tipo terminal
      },
      colors: {
          'off-white': '#f3f4f6',
          'terminal-green': '#4AF626',
          'terminal-cyan': '#00FFB9',
          'terminal-bg': '#0a0a0a',
        zinc: {
          800: '#202020', // Color oscuro para el fondo al pasar el ratón
        },
        gray: {
          300: '#D1D5DB', // Gris claro para el texto
        },
      },
      boxShadow: {
        terminal: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Sombra personalizada
      },
      dropShadow: {
        terminal: '0 1px 2px rgba(0, 0, 0, 0.25)', // Sombra de caída personalizada
      },
    },
  },
  plugins: [],
};