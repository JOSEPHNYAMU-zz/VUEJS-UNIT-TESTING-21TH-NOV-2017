<template>
    <div class="hello home">
        <router-link style="background-color: #cccccc;" id="lin" to="/">Home
        </router-link>
        <router-link id="lin" to="/Blog">Blog</router-link>
        <br/><br/>
        <fieldset class="fie">
            <legend>
                <Slotx>TO DO LIST</Slotx>
            </legend>
            <div id="inputs">
                <form v-on:submit.prevent='addTodo'>
                    <input class="inp" required v-model="newTodo" type="text" placeholder="Add a Task" v-focus/>
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
                <br/>
                <ul type="none" v-if="remaining">
                    <li><span id="count"><child :jose="remaining + ' ' + label"></child></span></li>
                </ul>
            </div>
        </fieldset>
        <Count-tag :counts="cnt" v-if="cnt" @showAlls="counts = $event"></Count-tag>

    </div>
</template>

<script>
  import Slotx from './Slotx.vue'
  import Counts from './Counts.vue'

  export default {
    data () {
      return {
        newTodo: '',
        alls: '',
        label: 'Complete Task(s)',
        todos: [{
          name: 'Hello, Ill be in Town Today',
          completed: false
        }],
        timex: true
      }
    },
    components: {
      Slotx,
      'Count-tag': Counts
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
      },
      cnt () {
        return this.todos.filter(todo => todo).length
      }
    }
  }
</script>
