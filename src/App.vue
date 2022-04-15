<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <ul>
      <RouterLink to="/"><li>Todo List</li></RouterLink>
      <RouterLink to="/new"><li>New Todo</li></RouterLink>
    </ul>
    <RouterView />
  </div>
</template>

<style>
@import './assets/base.css';
</style>
