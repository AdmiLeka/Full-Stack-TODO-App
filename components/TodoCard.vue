<template>
  <div v-bind:class = "props.todo.completed ? 'todo-card-completed':'todo-card'">
    <div class="header">
      <p>{{props.todo.completed}}</p>
      <p v-if="!props.todo.completed" @click="emits('mark-done')" title="Mark as done"><svg xmlns="http://www.w3.org/2000/svg" width="32"  height="32" fill="currentColor" class="bi icon-tick bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg></p>
      <p v-else @click="emits('mark-pending')" title="Mark as pending"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi icon-pending bi-clock-history" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg></p>
    </div>
    <p>{{ props.todo.text }}</p>
    <p class="date">{{ props.todo.created }}</p>
  </div>
</template>

<script setup>
  const props = defineProps(['todo']);
  const emits = defineEmits(['mark-done']);

</script>

<style scoped>
  .icon-tick {
    color: green;
  }

  .icon-tick:hover {
    color: rgb(0, 209, 0);
  }

  .icon-pending {
    color: white;
  }
  .icon-pending:hover {
    color: rgb(201, 201, 201);
  }
    .todo-container {
      display: flex;
    }

    .todo-card-completed {
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      background-color: rgb(0, 198, 0);
      width: 250px;
      height: 250px;
      padding: 10px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      margin-bottom: 30px;
    }
    .todo-card {
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      background-color: black;
      width: 250px;
      height: 250px;
      padding: 10px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      margin-bottom: 30px;
    }
    .dark-mode .todo-card {
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      background-color: rgb(210, 210, 210);
      width: 250px;
      height: 250px;
      padding: 10px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      margin-bottom: 30px;
    }
    .sepia-mode .todo-card {
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      background-color: #999999;
      width: 250px;
      height: 250px;
      padding: 10px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      margin-bottom: 30px;
    }

    .todo-card p {
      margin: 0;
      color: white;
      white-space: pre-wrap;
    }
    .dark-mode .todo-card p {
      margin: 0;
      color: black;
      white-space: pre-wrap;
    }
    .sepia-mode .todo-card p {
      margin: 0;
      color: #433422;
      white-space: pre-wrap;
    }
    .todo-card .date{
      font-weight: bold;
      margin: 0;
    }
    .todo-card .header{
      display: flex;
      justify-content: space-between;
    }

    .todo-card-completed p {
      margin: 0;
      color: white;
      white-space: pre-wrap;
    }
    .todo-card-completed .header{
      display: flex;
      justify-content: space-between;
    }
    .todo-card-completed .header{
      display: flex;
      justify-content: space-between;
    }
    .todo-card-completed .date{
      font-weight: bold;
      margin: 0;
    }

    .todo-card-completed:hover {
      opacity: 90%;
    }
    .todo-card:hover {
      opacity: 90%;
    }

</style>