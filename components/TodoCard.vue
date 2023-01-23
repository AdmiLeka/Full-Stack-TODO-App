<template>
  <div class="todo-card">
    <div class="header">
      <p>TODO:</p>
      <p>X</p>
    </div>
    <p>{{ props.todo.text }}</p>
    <p class="date">{{ props.todo.date }}</p>
  </div>
</template>

<script setup>
  const props = defineProps(['todo']);
</script>

<style scoped>
    .todo-container {
      display: flex;
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
      margin-bottom: 20px;

    }
    .todo-card p {
      color: white;
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

</style>