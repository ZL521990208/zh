import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import marked from './marked'

//引入异步网络请求库axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

//引入全局统一存储库,使用Vuex状态管理
import store from './store/index.js';
Vue.prototype.$store = store;
// src/plugins/vuetify.js
import vuetify from '@/plugins/vuetify' 


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
