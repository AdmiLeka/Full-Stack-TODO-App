<template>
    <main>    
      <div>
        <Transition>
        <NewTodo v-if="newToDoModal" @add-to-do="addTodo" @close-modal="newToDoModal = !newToDoModal"/>
      </Transition>
        <Transition>
         <UpdateOrDelete v-if="editModal" :todo-item="selectedTodoItem" @delete-todo="deleteTodo(selectedTodoItem)" @close-modal="editModal = !editModal"/>
       </Transition>
      </div>
        <div class="container">
          <header>
        <h1>TODOs</h1>
          </header>
        <AddTodoBtn @click="newToDoModal = true"/>
        <div class="todo-container" v-if="hasTodos()">
            <TodoCard @click="toggleEditModal(todo)"
        v-for="todo in todoList"
        :key="todo.id" :todo="todo">
        </TodoCard>
        </div>
        <div v-else>
          You currently have no todos. To add a todo, press the plus button.
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
    
    const displayOverlay = ref(false);
    const newToDoModal = ref(false);
    const editModal = ref(false);
    const selectedTodoItem = reactive({});
  
    function toggleEditModal(todo=null) {
      if (todo) selectedTodoItem.value = todo
      editModal.value = !editModal.value;
      
    }
  
    const todoList = ref([
      {
      id: 1,
      text: "This is a test template for the todo.",
      date: "15.1.2023"
    },
    {
      id: 2,
      text: "This is another a test template for the todo. Refreshing the page will make added todos dissapear",
      date: "15.1.2023"
    }
  ]);
  
    function addTodo(todo) {
      todoList.value.push({
          id: Math.floor(Math.random() * 100000),
          text: todo,
          date: new Date().toLocaleDateString('de-DE')
      })
      newToDoModal.value = !newToDoModal.value;
    }
  
    function deleteTodo(todo) {
      const temp = ref([]);
      for (let i = 0; i < todoList.value.length; i++) {
        if(todoList.value[i].id != todo.value.id){
          temp.value.push(todoList.value[i]);
        }
      }
      todoList.value = temp.value;
      editModal.value = !editModal.value;
    }
    
    const hasTodos = () => todoList.value.length > 0;
    
  </script>
  
  
  
  <style scoped>
  .v-enter-active {
    transition: opacity 0.3s ease;
  }
  
  .v-leave-active {
    transition: opacity 0.3s ease-out;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
    .container {
      max-width: 1000px;
      padding: 10px;
      margin: 0 auto;
      }
    main {
      height: 100vh;
      width: 100vw;
      }
    .todo-container {
      display: flex;
      flex-wrap: wrap;
      }
      header h1 {
        font-weight: bold;
        margin-right: 30px;
      }
      header {
        margin-bottom: 10px;
        margin-top: 30px;
        display: flex;
        align-items: center;
      }
    
  </style>