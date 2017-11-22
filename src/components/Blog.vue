<template>
    <div class="hello home">
        <router-link id="lin" to="/">Home</router-link>
        <router-link style="background-color: #cccccc;" id="lin" to="/Blog">Blog</router-link>
        <br/><br/>
        <fieldset class="fie">
            <legend><h2>LATEST NEWS</h2></legend>
            <div id="inputs">

                <div class="post" v-for="post in posts" :key="post.id">
                    <div style="margin-bottom: 10px;">
                        <img style="width:140px;height:120px;float:left;margin-right: 15px;border:solid 1px #000000;
;border-radius:3px;padding:5px;" src="../assets/Jose.jpg"/><br/><br/><br/>
                        <span><strong>{{ post.title }}</strong></span><br/>
                        <span style="text-align: justify;">{{ post.body }}</span>
                    </div>
                </div>


            </div>
        </fieldset>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Blog',
    data () {
      return {
        posts: []
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
