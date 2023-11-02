/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'campus-blue': '#218BE5',  // RGB: (33, 139, 229)
        'campus-light': '#F8FAFB', // RGB: (248, 250, 251)
        'campus-dark': '#232323', // RGB: (35, 35, 35)
        'campus-green': '#23b578'  // RGB: (35, 35, 35)
      },
    }
  },
  plugins: [],
}
