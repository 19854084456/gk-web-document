import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'en-CH',

  title: '',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://gd-wordpress-main.oss-accelerate.aliyuncs.com/wp-content/uploads/2023/12/%E6%9E%81%E5%AE%A2%E8%B7%B3%E5%8A%A8-1-e1703749280591.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
})
