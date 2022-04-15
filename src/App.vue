<script setup lang="ts">

</script>

<template>
    <div class="main" flex items-center justify-center h-full text-lg fw300 mt-1>
        <router-link text-sm ease-in duration-300 border-1 border-black bg-white py-1 px-2 rounded-1 mr-5 decoration-none color-black to="/">Home</router-link>
        <router-link text-sm ease-in duration-300 border-1 border-black bg-white py-1 px-2 rounded-1 decoration-none color-black to="/todolist">TodoList</router-link>
    </div>
    <router-view />
</template>

<style scoped>
.router-link-active{
  background-color: black;
  color: white;
}
</style>
