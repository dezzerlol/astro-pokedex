module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
  tabWidth: 2,
  useTabs: false,
  jsxBracketSameLine: true,
  bracketSameLine: true,
  semi: false,
  printWidth: 120,
  plugins: ['prettier-plugin-astro', require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
}
