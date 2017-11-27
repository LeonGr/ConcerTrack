import Vue from 'vue'
import App from './app'
import router from './router'
import AutoComplete from './components/autocomplete.vue'

Vue.config.productionTip = false

Vue.component('autocomplete', AutoComplete)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
