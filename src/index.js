import './style.scss';
import { addTodo, clearCompleted } from './modules/crud.js';
import { todoInput, clearButton } from './modules/selectors.js';
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

clearButton.addEventListener('click', () => {
  clearCompleted();
  updateHtml();
});