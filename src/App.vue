<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/">Todo List</RouterLink>
        <RouterLink to="/new">New Todo</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import './assets/base.css';
</style>
