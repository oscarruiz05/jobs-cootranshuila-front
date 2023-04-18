import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueMoment,
  render: h => h(App)
}).$mount('#app')
