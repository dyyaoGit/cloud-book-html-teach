// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css' // 引入初始化样式
import '@/globalCss/init.scss' // 引入自己的初始化样式
import 'amfe-flexible/index' // 引入淘宝适配方案
import {fetch} from '@/utils/index' // 引入封装好的axios
import api from '@/utils/api' // 引入所有的api
// import './iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$axios = fetch // 挂载axios在vue实例上
Vue.prototype.$api = api // 将api挂载到vue实例上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
