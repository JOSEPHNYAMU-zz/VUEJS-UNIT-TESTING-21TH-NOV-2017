<template>
    <div class="hello home">
        <router-link id="lin" to="/">Home</router-link>
        <router-link style="background-color: #cccccc;" id="lin" to="/Blog">Blog</router-link>
        <br/><br/>
        <div id="inputs">
                <span style="float:right;">
                    <a href="#" v-on:click="component='news-online'"
                       style="margin-right:5px;background-color: #cccccc;padding:4px;text-decoration: none;">News</a>
                    <a href="#" v-on:click="component='about-me'"
                       style="background-color: #cccccc;padding:4px;text-decoration: none;">Author</a></span>
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
  // import axios from 'axios'
  export default {
    components: {
      'about-me': About,
      'news-online': News
    },
    name: 'Blog',
    data () {
      return {
        component: 'news-online',
        times: true
      }
    }
  }
</script>
