/**
 * @type {import('prettier').Options}
 * @see https://prettier.io/docs/en/options.html
 */
module.exports = {
  singleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  plugins: [require('prettier-plugin-tailwindcss')],
};
