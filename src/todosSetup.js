import { computed, ref } from 'vue'
import todosMock from './mock/todos';

export default function initTodos() {
  const todos = ref(todosMock);
  const todosIncompleted = computed(() => todos.value.filter(t => !t.completed));
  const todosCompleted = computed(() => todos.value.filter(t => t.completed));

  const toggle = (id) => {
    const todo = todos.value.find(t => t.id === id);
    todo.completed = !todo.completed;
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter(t => t.id !== id);
  };

  return {todosIncompleted, todosCompleted, toggle, deleteTodo};
}