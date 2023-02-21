import './style.scss';
import { addTodo, toDos } from './modules/toDos.js';
import createTodo from './modules/createTodo';
import toDosContainer from './modules/selectors';

addTodo('Clean the dishes', false);
addTodo('Read a book', true);
addTodo('Close de door', false);

window.addEventListener('DOMContentLoaded', () => {
  toDos.sort((a, b) => {
    return a.index - b.index;
  })
  toDos.forEach(element => {
    toDosContainer.appendChild(createTodo(element));
  });
  if(toDos.length === 0){
    toDosContainer.innerText = 'Nothing else to do'
  };
});