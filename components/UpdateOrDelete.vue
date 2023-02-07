<template>
  <div class="overlays">
      <div class="modale">
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

  .modale button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blue;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
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
  .modale .delete {
    background-color: red;
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

  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }
</style>