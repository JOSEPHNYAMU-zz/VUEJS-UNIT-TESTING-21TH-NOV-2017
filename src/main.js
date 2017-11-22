import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.component('manage-posts', {
  template: '#manage-template',
  data: function() {
    return {
      posts: [
        'Vue.js: The Basics',
        'Vue.js Components',
        'Server Side Rendering with Vue',
        'Vue + Firebase'
      ]
    }
  }
})

Vue.component('create-post', {
  template: '#create-template'
})

// Custom Directives
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// Custom Events
Vue.component('clear-all',
  {
    template: '<button type="submit" class="xxx" v-on:click="removes">REMOVE ALL</button>'
  })

// Child for props
Vue.component('child', {
  props: ['jose'],
  template: `<div>{{ jose }}<div>`
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
