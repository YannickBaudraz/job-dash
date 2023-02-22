const tsFilesSequence = [
  'eslint --fix',
  'prettier --write',
  'eslint --max-warnings 0',
  'prettier --check',
];

const cssFilesSequence = [
  'stylelint --fix',
  'prettier --write',
  'stylelint --max-warnings 0',
  'prettier --check',
];

module.exports = {
  'src/**/*.{ts,tsx}': tsFilesSequence,
  'src/**/*.css': cssFilesSequence,
};
