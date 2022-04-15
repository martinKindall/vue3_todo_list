<script setup>
  import initTodos from '../todosSetup';

  const {todosIncompleted, todosCompleted, toggle, deleteTodo} = initTodos();
</script>

<template>
  <div class="container">
    <h2>Todo List</h2>
    <ul>
      <li v-for="todo in todosIncompleted" :key="todo.id">
        <input type="checkbox" @click="toggle(todo.id)">
        <label>{{ todo.name }}</label>
        <input type="text">
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <h2>Completed</h2>
    <ul>
      <li v-for="todo in todosCompleted" :key="todo.id">
        <input type="checkbox" checked @click="toggle(todo.id)">
        <label>{{ todo.name }}</label>
        <input type="text">
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
