<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="row text-center my-2">
        <div class="col-12">
          <nav>
            <RouterLink to="/">Todo List</RouterLink>
            <RouterLink to="/new">New Todo</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import './assets/base.css';
</style>
