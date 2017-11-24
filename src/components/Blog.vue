<template>
    <div class="hello home">
        <router-link id="lin" to="/">Home</router-link>
        <router-link style="background-color: #cccccc;" id="lin" to="/Blog">Blog</router-link>
        <br/><br/>

        <div>
            <p>{{ encoded }}</p>
            <p>{{ decoded }}</p>
            <p>{{ error }}</p>
        </div>


        <div id="inputs">
                <span style="float:right;">
                    <a href="#" v-on:click="component='news-online'"
                       style="margin-right:5px;background-color: #cccccc;padding:4px;text-decoration: none;">News</a>
                    <a href="#" v-on:click="component='about-me'"
                       style="background-color: #cccccc;padding:4px;text-decoration: none;">Author</a>
               </span>
            <br/>
            <keep-alive>
                <component v-bind:is="component"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
  import News from './News.vue'
  import About from './About.vue'
  import axios from 'axios'
  export default {
    components: {
      'about-me': About,
      'news-online': News
    },
    name: 'Blog',
    data () {
      return {
        encoded: 'Encoding...',
        decoded: 'Decoding...',
        error: null,
        component: 'news-online',
        times: true
      }
    },
    created: function () {
      var self = this
      axios
        .post('https://api.base62.io/encode', {data: 'Nairobi City!'})
        .then(function (response) {
          self.encoded = response.data.encoded
        })
        .catch(function (error) {
          self.error = 'Could not reach the API: ' + error
        })

      axios
        .post('https://api.base62.io/decode', {data: 'T8dgcjRGuYUueWht'})
        .then(function (response) {
          self.decoded = response.data.decoded
        })
        .catch(function (error) {
          self.error = 'Could not reach the API: ' + error
        })
    }
  }
</script>
