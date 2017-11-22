<template>
    <div class="hello home">
        <router-link id="lin" to="/" @click.native="handleClick($event)">Home</router-link>
        <router-link style="background-color: #cccccc;" id="lin" to="/Blog" @click.native="handleClick($event)">Blog</router-link>
        <br/><br/>
            <div id="inputs">
LATEST NEWS
                <div class="post" v-for="post in posts" :key="post.id">
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
  import axios from 'axios'

  export default {
    name: 'Blog',
    data () {
      return {
        posts: [],
        times: true
      }
    },
    methods: {
      handleClick(e) {
        e.preventDefault()
        this.output = e.target.textContent
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
