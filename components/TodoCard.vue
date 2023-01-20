<script setup>
import { defineProps } from 'vue';

const props = defineProps(['todo']);
</script>

<template>
  <div class="todo-card">
    <p class="date">TODO:</p>
    <p>{{ props.todo.text }}</p>
    <p class="date">{{ props.todo.date }}</p>
  </div>
</template>

<style scoped>
    .todo-container {
      display: flex;
    }


    .todo-card {
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
    }
    .todo-card .date{
      font-weight: bold;
      margin: 0;
    }
</style>