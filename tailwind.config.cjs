const withMT = require('@material-tailwind/react/utils/withMT');

const statusColors = [
  'blue-gray',
  'purple',
  'amber',
  'brown',
  'indigo',
  'green',
  'red',
];

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    ...statusColors.map(color => `bg-${color}-50`),
    ...statusColors.map(color => `text-${color}-900`),
    ...statusColors.map(color => `border-b-${color}-500`),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = withMT(tailwindConfig);
