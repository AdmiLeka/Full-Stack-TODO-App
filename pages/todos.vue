<template>
  <Nav/>
    <div>
        <Transition>
            <!-- <OnClickOutside @trigger="newToDoModal = !newToDoModal"> -->
            <NewTodo v-if="newToDoModal"
            @close-modal="newToDoModal = !newToDoModal"/>
        <!-- </OnClickOutside> -->
        </Transition>
        <Transition>
            <UpdateOrDelete v-if="editModal"
            :todo-item="selectedTodoItem"
            @delete-todo="deleteTodo(selectedTodoItem)"
            @close-modal="editModal = !editModal"/>
        </Transition>
    </div>
    <div class="container">
        <header>
            <h1>Your List of ToDos</h1>
        </header>
    <AddTodoBtn @click="newToDoModal = true"/>
    <div class="todo-container" v-if="hasTodos()">
        <TodoCard @edit-todo="toggleEditModal(todo)"
        v-for="todo in todoList.todos"
        :key="todo.id" :todo="todo"/>
    </div>
    <div v-else>
        You currently have no todos. To add a ToDo, press the plus button.
    </div>
    </div>
</template>


  
<script setup lang="ts">
    import axios from 'axios';
    import { fetchTodos, Todo } from '~~/todo-list';
    import { OnClickOutside } from '@vueuse/components';

    var todoList = reactive(await fetchTodos());

    const newToDoModal = ref(false);
    const editModal = ref(false);
    const selectedTodoItem = ref({});

    function toggleEditModal(todo) {
    if (todo) selectedTodoItem.value = todo
    editModal.value = !editModal.value;
    }

    function deleteTodo(todo: Todo) {
        axios.delete(`http://localhost:5000/todos/delete/${todo.id}`);
        editModal.value = !editModal.value;
    }

    const hasTodos = () => todoList.todos.length > 0;    
    

</script>

<style scoped>

@media (max-width: 615px) {
  .todo-container{
    justify-content: space-evenly !important;
  }
}
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

.todo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  }
  header h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
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