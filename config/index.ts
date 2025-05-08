import NutUIResolver from '@nutui/auto-import-resolver'
import tailwindcss from '@tailwindcss/postcss'
import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import devConfig from './dev'
import prodConfig from './prod'
// import tailwindcss from '@tailwindcss/vite'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'vite'>(async (merge, { command, mode }) => {
  // const { default: tailwindcss } = await import('@tailwindcss/vite')

  const baseConfig: UserConfigExport<'vite'> = {
    // https://github.com/sonofmagic/weapp-tailwindcss/blob/6811f231932925cf1f34ef45eda5b233d792d54f/packages/weapp-tailwindcss/src/typedoc.export.ts#L350
    tailwindcssBasedir: './',
    projectName: 'starter-taro',
    date: '2025-3-23',
    // nutui 组件库 使用的是375px 设计稿
    designWidth(input) {
      if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1)
        return 375

      return 750
    },
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
      375: 2 / 1,
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [],
    defineConstants: {
    },
    copy: {
      patterns: [
      ],
      options: {
      },
    },
    framework: 'vue3',
    compiler: {
      type: 'vite',
      vitePlugins: [
        // vue(),
        Components({
          resolvers: [NutUIResolver()],
        }),
        {
          name: 'postcss-config-loader-plugin',
          config(config) {
            // 加载 tailwindcss
            if (typeof config.css?.postcss === 'object')
              config.css?.postcss.plugins?.unshift(tailwindcss())
          },
        },
        UnifiedViteWeappTailwindcssPlugin({
          rem2rpx: true,
          appType: 'taro',
        }),
      ],
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {

          },
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',

      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css',
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        },
      },
    },
  }

  process.env.BROWSERSLIST_ENV = process.env.NODE_ENV

  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
