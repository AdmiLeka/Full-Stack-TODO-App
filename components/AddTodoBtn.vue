<script setup>

</script>

<template>
    <button >+</button>
</template>


<style scoped>
    button {
        border: none;
        padding: 10px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: rgb(21, 20, 20);
        border-radius: 1000px;
        color: white;
        font-size: 20px;
        margin-bottom: 20px;

    }

    button:hover {
      opacity: 90%;
    }

    .dark-mode button {
        border: none;
        padding: 10px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: rgb(210, 210, 210);
        border-radius: 1000px;
        color: black;
        font-size: 20px;
        margin-bottom: 20px;

    }

    .sepia-mode button {
        border: none;
        padding: 10px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: #b5ae9e;
        border-radius: 1000px;
        color: #433422;;
        font-size: 20px;
        margin-bottom: 20px;

    }
</style>