import { computed, ref } from 'vue'
import todosMock from './mock/todos';

const todos = ref(todosMock);
const todosIncompleted = computed(() => todos.value.filter(t => !t.completed));
const todosCompleted = computed(() => todos.value.filter(t => t.completed));
const length = computed(() => todos.value.length);

const toggle = (id) => {
  const todo = todos.value.find(t => t.id === id);
  todo.completed = !todo.completed;
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id);
};

const add = (name) => {
  todos.value.push({id: length.value + 1, name, completed: false});
};

export {todosIncompleted, todosCompleted, toggle, deleteTodo, add};