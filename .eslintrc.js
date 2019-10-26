module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:prettier/recommended', 'prettier', 'prettier/vue'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
