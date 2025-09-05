export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-CH\",\"title\":\"网站快速成型工具\",\"description\":\"极客组件库，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
