import './style.scss';
import { addTodo, toDos } from './modules/toDos.js';
import createTodo from './modules/createTodo';
import toDosContainer from './modules/selectors';

// addTodo('Clean the dishes', false);
// addTodo('Read a book', false);
// addTodo('Close de door', false);

toDos.forEach(element => {
  toDosContainer.appendChild(createTodo(element));
})

if(toDos.length === 0){
  toDosContainer.innerText = 'Nothing else to do'
}