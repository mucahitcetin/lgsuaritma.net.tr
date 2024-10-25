/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", 
        secondary: "#93C5FD",  
        background: "#F0F9FF", 
        text: "#1E293B",       
      },
    },
  },
  plugins: [],
};