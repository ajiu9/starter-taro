// import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import tailwind4 from '@iconify/tailwind4'

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwind4(),
    // iconsPlugin({
    //   // Select the icon collections you want to use
    //   collections: getIconCollections(['mdi', 'lucide']),
    // }),
  ],
  // 小程序环境下的特殊配置
  corePlugins: {
    preflight: false,
  },
}
