// /** @type {import('tailwindcss').Config} */
// import { fontFamily } from 'tailwindcss/defaultTheme';

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         heading: ['Montserrat', 'sans-serif'],
//         content: ['Inter', 'sans-serif'],
//       },
//     },  
//     plugins: [],
//   }
// }

import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
        content: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}