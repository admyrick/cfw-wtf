/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Emulator colors (green)
        'emulator': {
          '400': '#62f76e',
          '500': '#4ad854',
        },
        // Console colors (red)
        'console': {
          '400': '#ff6464',
          '500': '#ff4545',
        },
        // Firmware colors (purple)
        'firmware': {
          '400': '#b46fff',
          '500': '#9f45ff',
        },
        // Tools colors (blue)
        'tool': {
          '400': '#64a7ff',
          '500': '#458fff',
        },
      },
      fontFamily: {
        'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 4px currentColor' },
          '100%': { textShadow: '0 0 8px currentColor, 0 0 12px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};