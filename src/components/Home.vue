<template>
    <div class="hello home">
        <router-link style="background-color: #cccccc;" id="lin" to="/" @click.native="handleClick($event)">Home</router-link>
        <router-link id="lin" to="/Blog" @click.native="handleClick($event)">Blog</router-link>
        <br/><br/>
        <fieldset class="fie">
            <legend><h2>TO DO LIST</h2></legend>
            <div id="inputs">
                <form v-on:submit.prevent='addTodo'>
                    <input class="inp" required v-model="newTodo" type="text" placeholder="Add a Task"/>
                    <button type="submit" class="btn">ADD NEW TASK</button>
                </form>
                <br><br><br>

                <table width="100%">
                    <tr style="border-bottom: solid 1px #cccccc;" class="full" v-for="todo in todos">
                        <td style="width:200px">
                            <input class="chk" type="checkbox" v-model="todo.completed"/>
                        </td>
                        <td style="width:350px;text-align: left;">
                            <span :class="{completed: todo.completed}">{{ todo.name }}</span>
                        </td>
                        <td style="width:150px;text-align:right;">
                            <button type="submit" class="del" v-on:click.prevent="deleteTodo(todo)">Delete</button>
                        </td>
                    </tr>
                </table>
                <ul type="none">
                    <li><span id="count">{{ remaining }} Complete Task(s)</span></li>
                </ul>


            </div>
        </fieldset>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        todos: [{
          name: 'Hello, Ill be in Town Today',
          completed: false
        }],
        timex: true
      }
    },
    methods: {
      addTodo () {
        this.todos.push({
          completed: false,
          name: this.newTodo
        })
        this.newTodo = ''
      },
      deleteTodo (todo) {
        this.todos = this.todos.filter(i => i !== todo)
      }
    },
    computed: {
      remaining () {
        return this.todos.filter(todo => todo.completed).length
      }
    }
  }
</script>
