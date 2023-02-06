<template>
  <main>
    <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <TheHeader/>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
    <div class="container">
    <ToDoList/>
  </div>
  </main>
</template>

<style>
  
  body {
  background-color: #cfcfcf;
  color: rgba(0,0,0,0.8);
  }
  .dark-mode body {
    background-color: #141414;
    color: rgb(210, 210, 210);
  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
  .container{
    background-color: #cfcfcf;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .dark-mode .container{
    background-color: #141414;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
  .sepia-mode .container{
    background-color: #f1e7d0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
</style>