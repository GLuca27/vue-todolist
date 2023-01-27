const { createApp } = Vue

createApp({
    data() {
      return {
        textNewTodo:'',
           todoList:[
              {
                text: 'Fare i compiti',
                done: false,
              },
              {
                text: 'Fare la spesa',
                done: true,
              },
              {
                text: 'Andare in palestra',
                done: false,
              },
              {
                text: 'Fare benzina alla macchina',
                done: true,
              }
           ]
      }
    },
    methods:{
        removeTodo(i) {
             this.todoList.splice(i, 1);
        },
        addTodo() {
             const addNewTodo = {
                text: this.textNewTodo,
                done: false
             };
             this.todoList.push(addNewTodo);
             this.addNewTodo = '';
        }
    }
  }).mount('#app')
