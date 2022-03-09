import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/index.css'

//使用ElementUI饿了么UI
Vue.use(ElementUI);


// 定义一个全局过滤器实现日期格式化

//api 接口
axios.defaults.baseURL = 'http://cloud-music.pl-fe.cn/'
Vue.prototype.$http = axios

Vue.config.productionTip = false


new Vue({
      router,
      render: h => h(App)
}).$mount('#app')


