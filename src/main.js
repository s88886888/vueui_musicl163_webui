import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/index.css'
//使用ElementUI饿了么UI
Vue.use(ElementUI);
//封装axios
Vue.prototype.$http = axios
//让ajax携带cookie
axios.defaults.withCredentials = true
// axios.defaults.baseURL = "http://cloud-music.pl-fe.cn/";
Vue.config.productionTip = false
new Vue({
      router,
      render: h => h(App)
}).$mount('#app')