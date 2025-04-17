/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./hooks/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}",
      "./ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        translate: {
          '101': '101%',
        },
        keyframes: {
          marquee: {
            from: { transform: 'translateX(0%)' },
            to: { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          marquee: 'marquee 15s linear infinite',
        },
      },
    },
    plugins: [],
  };
  