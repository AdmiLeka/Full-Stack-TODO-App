<template>
  <div class="overlay">
    <div class="modal">
        <textarea v-model="newToDo" placeholder="Add your TODO"></textarea>
        <button @click="$emit('add-to-do', newToDo)">Add TODO</button>
        <button class="close" @click="$emit('close-modal')">Cancel</button>
    </div>
  </div>
</template>

<script setup>

    const props = defineProps(['todoList', 'new-to-do']);
    defineEmits(['add-to-do', 'close-modal']);

    const newToDo = ref("");

</script>

<style scoped>
.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: green;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
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
  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }
</style>