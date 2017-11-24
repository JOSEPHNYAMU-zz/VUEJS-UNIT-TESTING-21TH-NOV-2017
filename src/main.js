import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// Custom Directives
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// Child for props
Vue.component('child', {
  props: ['jose'],
  template: `<div>{{ jose }}<div>`
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  debug: true,
  template: '<App/>',
  components: {App}
})
