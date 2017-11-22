<template>
    <div class="hello home">
        <router-link id="lin" to="/" @click.native="handleClick($event)">Home</router-link>
        <router-link style="background-color: #cccccc;" id="lin" to="/Blog" @click.native="handleClick($event)">Blog</router-link>
        <br/><br/>
            <div id="inputs">
                <div>LATEST NEWS<span style="float:right;">
                    <a href="#" style="margin-right:5px;background-color: #cccccc;padding:4px;text-decoration: none;">News</a>
                    <a href="#" style="background-color: #cccccc;padding:4px;text-decoration: none;">Author</a></span></div>

                <div class="post" v-for="post in posts" :key="post.id">


                    <about-me></about-me>

                    <div style="padding:12px;color:#ffffff;margin-bottom: 10px;background-color: #7f7f7f;">
                       <br/><br/>
                        <span><strong>{{ post.title }}</strong></span><br/>
                        <span style="text-align: justify;">{{ post.body }}</span>
                    </div>
                </div>


            </div>
    </div>
</template>

<script>
  import about from './about.vue'
  import news from './news.vue'
  import axios from 'axios'
  export default {
    components: {
      'about-me': about,
      'news-online': news
    },
    name: 'Blog',
    data () {
      return {
        posts: [],
        times: true
      }
    },
    mounted () {
      var self = this
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
          self.posts = res.data
          console.log('Data: ', res.data)
        })
        .catch(function (error) {
          console.log('Error: ', error)
        })
    },

  }
</script>
