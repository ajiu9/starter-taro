import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi', 'lucide']),
    }),
  ],
  // 小程序环境下的特殊配置
  corePlugins: {
    preflight: false,
  },
}
