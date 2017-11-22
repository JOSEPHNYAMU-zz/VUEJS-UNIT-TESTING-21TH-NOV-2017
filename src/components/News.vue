<template>
    <div>LATEST NEWS
    <div class="post" v-for="post in posts" :key="post.id">
        <div style="padding:12px;color:#ffffff;margin-bottom: 10px;background-color: #7f7f7f;">
            <br/><br/>
            <span><strong>{{ post.title }}</strong></span><br/>
            <span style="text-align: justify;">{{ post.body }}</span>
        </div>
    </div></div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Blog',
    data () {
      return {
        posts: [],
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
