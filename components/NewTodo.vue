<template>
  <div class="overlays">
    <div class="modale">
        <textarea v-model="newToDo" placeholder="Add your TODO"></textarea>
        <button @click="createTodo(); emits('close-modal')">Add TODO</button>
        <button class="close" @click="$emit('close-modal')">Cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
    import axios from 'axios';

    const emits = defineEmits(['close-modal']);
    const newToDo = ref("");

    function createTodo() {
        axios.post(`http://localhost:5000/todos/`, {"text":newToDo.value})
      }

</script>

<style scoped>
.modale button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: green;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }

  .modale .close {
    background-color: grey;
  }
  .modale {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .overlays {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    }
  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }
</style>