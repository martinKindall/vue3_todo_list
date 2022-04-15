<script setup>
  import initTodos from '../todosSetup';

  const {todos} = initTodos();
</script>

<template>
  <div class="container">
    <div class="row text-center my-4">
      <div class="col-12">
        <h2>Todo List</h2>
      </div>
    </div>
    <div class="row text-center my-2">
      <div class="col-12">
        <ul>
          <li v-for="todo in todos">
            {{ todo.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
