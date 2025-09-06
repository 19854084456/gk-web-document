import gkButton from './../../components/gkButton.vue' // 根据实际路径调整

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // 注册全局组件
  Vue.component('gkButton', gkButton)
}