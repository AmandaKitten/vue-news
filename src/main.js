import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.less'

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
