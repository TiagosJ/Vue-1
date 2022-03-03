const app = Vue.createApp({
  data() {
    return {
      todoList :  [
        { id : 1 , text : "1.Görev yapıldı" , completed : false },
        { id : 2 , text : "2.Görev yapıldı" , completed : false },
        { id : 3 , text : "3.Görev yapıldı" , completed : false },
        { id : 4 , text : "4.Görev yapıldı" , completed : false },
        { id : 5 , text : "5.Görev yapıldı" , completed : false },
        { id : 6 , text : "6.Görev yapıldı" , completed : false },
      ]
    };
  },
  methods : {
    addTodo(event){
      this.todoList.push({
        id : new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = " " ;
    },
    removeItem(todoItem){
      this.todoList  = this.todoList.filter(todo => todo !== todoItem )
    }
  },
  computed: {
    completedItemCount(){
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount(){
      return this.todoList.filter((t) => !t.completed).length;
    },
    
    
  }
  
}).mount("#app");
