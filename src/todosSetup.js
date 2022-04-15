import { ref } from 'vue'
import todosMock from './mock/todos';

export default function initTodos() {
  const todos = ref(todosMock);

  return {todos};
}