// .vuepress/config.js
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
// 暂时注释掉有问题的导入
// import registerComponentsPlugin from '@vuepress/plugin-register-components'
// import { path } from '@vuepress/utils'

export default defineUserConfig({
  lang: 'en-CH',
  title: '网站快速成型工具',
  description: '极客组件库，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',

  theme: defaultTheme({
    logo: 'https://gd-wordpress-main.oss-accelerate.aliyuncs.com/wp-content/uploads/2023/12/%E6%9E%81%E5%AE%A2%E8%B7%B3%E5%8A%A8-1-e1703749280591.png',
    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
  // 暂时注释掉插件配置
  // plugins: [
  //   registerComponentsPlugin({
  //     componentsDir: path.resolve(__dirname, '../components'),
  //   }),
  // ],
})