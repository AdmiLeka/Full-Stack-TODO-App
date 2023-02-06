<template>
  <div class="todo-card">
    <div class="header">
      <p>{{props.todo.completed}}</p>
      <p @click="console.log(hello)"><svg xmlns="http://www.w3.org/2000/svg" width="32"  height="32" fill="currentColor" class="bi icon bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg></p>
    </div>
    <p>{{ props.todo.text }}</p>
    <p class="date">{{ props.todo.created }}</p>
  </div>
</template>

<script setup>
  const props = defineProps(['todo']);
</script>

<style scoped>
.icon {
  color: green;
}
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
      margin-bottom: 10px;

    }
    .todo-card p {
      margin: 0;
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