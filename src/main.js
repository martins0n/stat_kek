import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from 'vue-router'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "./components/echarts";

Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(VueRouter)

import BetaNormal from './components/BetaNormal';
import HelloWorld from './components/HelloWorld';


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/beta_vs_normal',
      name: 'BetaNormal',
      component: BetaNormal
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
