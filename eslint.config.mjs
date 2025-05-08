import ajiu9 from '@ajiu9/eslint-config'

export default ajiu9(
  {
    vue: true,
    typescript: true,
    taro: true,
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
      'vue/html-self-closing': 'off',
    },
  },

)
