/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#8B4513',
          primaryDark: '#6B3410',
          secondary: '#D4A574',
          accent: '#C19A6B',
          background: '#FDFBF7',
          surface: '#FFFFFF',
          surfaceVariant: '#F5F1EB',
          text: '#2C1810',
          textSecondary: '#6B5A4C',
          textTertiary: '#9B8B7E',
          border: '#E8E0D5',
          error: '#C44536',
          success: '#4A7C59',
          badge: '#E53935',
        },

        dark: {
          primary: '#D4A574',
          primaryDark: '#C19A6B',
          secondary: '#8B4513',
          accent: '#B8956A',
          background: '#1A1410',
          surface: '#2C2218',
          surfaceVariant: '#3A3028',
          text: '#F5F1EB',
          textSecondary: '#C8BAAC',
          textTertiary: '#9B8B7E',
          border: '#3A3028',
          error: '#E57373',
          success: '#81C784',
          badge: '#EF5350',
        },
      },
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
};
