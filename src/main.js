import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from '@/api/index'
import "@/assets/css/reset.less"
import "@/assets/iconfont/iconfont.css"
import { initElementUI } from './elementUI'

initElementUI(Vue)

Vue.prototype.$axios = axios
Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')