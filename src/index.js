import './style.scss';
import { addTodo } from './modules/crud.js';
import { todoInput } from './modules/selectors.js';
import updateHtml from './modules/updateHtml.js';

window.addEventListener('DOMContentLoaded', () => {
  updateHtml();
});

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(e.target.value);
    todoInput.value = '';
    updateHtml();
  }
});
