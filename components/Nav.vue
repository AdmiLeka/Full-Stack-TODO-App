<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <NuxtLink to="/" class="nav-link navbar-brand" activeClass="active">
            ToDo Manager
          </NuxtLink>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li @click="colorMode.preference = 'system'" class="" data-v-77c95cbd="" value="system">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor" data-v-77c95cbd=""><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </li>
        <li @click="colorMode.preference = 'dark'" class="" data-v-77c95cbd="" value="dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="40"
             height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" data-v-77c95cbd="">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </li>
            <li @click="colorMode.preference = 'light'" class="" data-v-77c95cbd="" value="light">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" data-v-77c95cbd=""><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </li>
            <li @click="colorMode.preference = 'sepia'" class="" data-v-77c95cbd="" value="sepia">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee" data-v-77c95cbd=""><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>            </li>
        <li class="nav-item">
          <NuxtLink to="/todos" class="nav-link" activeClass="active">
            My ToDos
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link" activeClass="active">
            About
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">

    const colorMode = useColorMode()

</script>

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

  }
  
  .sepia-mode .container{
    background-color: #f1e7d0;

  }

  .sepia-mode .navbar-dark {
    background-color: #b5ae9e !important;

  }

  .sepia-mode .navbar-dark a{
    color: #433422 !important;
  }

  .dark-mode .navbar-dark {
    background-color: black !important;

  }

  .dark-mode .navbar-dark a{
    color: white !important;
  }

  .light-mode .navbar-dark {
    background-color: #a8a8a8 !important;

  }

  .light-mode .navbar-dark a{
    color: #433422 !important;
  }

  .active {
    font-weight: bold;
  }
  
    ul[data-v-77c95cbd]{
        list-style:none;margin:0;padding:0}
        ul li[data-v-77c95cbd]{
            display:inline-block;padding:5px
        }
        p[data-v-77c95cbd]{
            margin:0;padding-bottom:20px;padding-top:5px
        }
            .feather[data-v-77c95cbd]{
                background-color:var(--bg-secondary);border:2px solid var(--border-color);border-radius:5px;cursor:pointer;margin:0;padding:7px;position:relative;top:0;transition:all .1s ease
            }
            .feather[data-v-77c95cbd]:hover{
                top:-5px
            }
            .preferred .feather[data-v-77c95cbd]{
                border-color:var(--color-primary);top:-3px
            }
            .selected .feather[data-v-77c95cbd]{
                color:var(--color-primary)
            }

</style>