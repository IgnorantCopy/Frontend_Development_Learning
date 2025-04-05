<script setup lang="ts">
import app from './app'

console.log(app.name);
</script>

<template>
  <div class="app">
    <h1>Hello Vue!</h1>
  </div>
</template>

<style scoped>
.app {
  background-color: #f00;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>