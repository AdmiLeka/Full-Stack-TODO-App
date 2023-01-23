<template>
  <div class="overlay">
      <div class="modal">
        <textarea v-model="editedTodo"></textarea>
        <button @click="updateTodo(editedTodo)">Update</button>
        <button class="delete" @click="emits('delete-todo')">Delete</button>
        <button class="close" @click="emits('close-modal')">Cancel</button>
      </div>  
  </div>
</template>

<script setup>
  
  const props = defineProps(['todoItem']);
  const editedTodo = props.todoItem.text;

  const emits = defineEmits(['close-modal', 'delete-todo']);

  function updateTodo(edit) {
    props.todoItem.text = edit;
    emits('close-modal')
  }

</script>


<style scoped>

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blue;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }

  .overlay {
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
  .modal .delete {
    background-color: red;
  }
  .modal .close {
    background-color: grey;
  }
  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }
</style>