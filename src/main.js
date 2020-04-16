import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { mapState } from 'vuex'
// import './plugins/element'
// import SongList from './components/SongList/SongList.vue'
import './assets/css/global.css'
import { dateFormat, cduration } from './utils/utils'
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.filter('newDuration', cduration)
Vue.filter('dateFormat', dateFormat)
var hub = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')