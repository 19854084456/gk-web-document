import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '极客前端库',
  description: '极客组件库，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',

  theme: defaultTheme({
    logo: 'https://gd-wordpress-main.oss-accelerate.aliyuncs.com/wp-content/uploads/2023/12/%E6%9E%81%E5%AE%A2%E8%B7%B3%E5%8A%A8-1-e1703749280591.png',
    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
})
