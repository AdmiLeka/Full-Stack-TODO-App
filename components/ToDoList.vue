<template>
    <div>
        <Transition>
            <NewTodo v-if="newToDoModal" @add-to-do="addTodo"
            @close-modal="newToDoModal = !newToDoModal"/>
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
        <TodoCard @click="toggleEditModal(todo)"
        v-for="todo in todoList"
        :key="todo.id" :todo="todo"/>
    </div>
    <div v-else>
        You currently have no todos. To add a todo, press the plus button.
    </div>
    </div>
</template>


  
<script setup lang="ts">

    import {todoList} from "@/todo-list";
    const newToDoModal = ref(false);
    const editModal = ref(false);
    const selectedTodoItem = ref({});

    function toggleEditModal(todo) {
    if (todo) selectedTodoItem.value = todo
    editModal.value = !editModal.value;
    }

    function addTodo(todoText: string) {
    todoList.push({
        id: Math.floor(Math.random() * 100000),
        text: todoText,
        date: new Date().toLocaleDateString('de-DE')
    })
    newToDoModal.value = !newToDoModal.value;
    }

    function deleteTodo(todo) {
        delete todoList[todo];
        editModal.value = !editModal.value;
    }

    const hasTodos = () => todoList.length > 0;

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

.todo-container {
  display: flex;
  flex-wrap: wrap;
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