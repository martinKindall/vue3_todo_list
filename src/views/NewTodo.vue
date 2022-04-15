<script setup>
  import {add} from '../todosSetup';
  import router from '../router';

  const addAndNavigate = (name) => {
    add(name);
    router.push('/');
  };
</script>

<template>
  <div class="container">
      <label for="new-task">New Todo</label>
      <input id="new-task" type="text" v-model="name">
      <button type="add" @click="addAndNavigate(name)">Add</button>
  </div>
</template>
