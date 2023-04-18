/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //Bu alanda da renk bilgilerine yer verilerek istendiğinde kod kısmına buradan çağrılabilir.
      // colors: {
      //   c0323: "#fecc91",
      //   deadline: "#ffd9d4",
      // },
    },
  },
  plugins: [],
};
