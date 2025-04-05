<script setup lang="ts">
import Person from './person'
</script>

<template>
  <div class="person">
    <h2>name: {{ Person.data().name }}</h2>
    <h2>age: {{ Person.data().age }}</h2>
  </div>
  <button @click="Person.methods.getInfo()"> information</button>
</template>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>