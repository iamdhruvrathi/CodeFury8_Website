/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive'],
        sharetech: ['Share Tech Mono', 'monospace'],
      },
    },

    plugins: [],
  }
}
