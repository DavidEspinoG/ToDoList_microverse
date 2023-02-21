import { toDosContainer } from './selectors.js';
import { toDos } from './crud.js';
import createTodo from './createTodo.js';

const updateHtml = () => {
  toDosContainer.innerHTML = '';
  toDos.forEach((element) => {
    toDosContainer.appendChild(createTodo(element));
  });
};

export default updateHtml;