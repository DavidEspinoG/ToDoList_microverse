import {
  deleteTodo, toggleCompleteTodo, updateTodo, toDos,
} from './crud.js';
import { toDosContainer } from './selectors.js';

const createTodo = (object) => {
  // Create
  const container = document.createElement('div');
  container.tabIndex = 1;
  container.classList.add('toDo');
  const left = document.createElement('div');
  left.classList.add('left');
  const right = document.createElement('div');
  right.classList.add('right');
  const square = document.createElement('i');
  square.classList.add('fa-2x');
  const description = document.createElement('input');
  description.value = object.description;
  description.classList.add('description');
  description.tabIndex = -1;
  if (!object.completed) {
    square.classList.add('fa-regular');
    square.classList.add('fa-square');
    description.classList.remove('finished');
  } else {
    description.classList.add('finished');
    square.classList.add('fa-solid');
    square.classList.add('fa-check');
  }
  const dots = document.createElement('i');
  dots.classList.add('fa-solid');
  dots.classList.add('fa-ellipsis-vertical');
  dots.classList.add('fa-2x');
  dots.classList.add('dots');
  dots.id = 'dots';
  const trashCan = document.createElement('i');
  trashCan.classList.add('fa-solid', 'fa-trash', 'display-none');
  trashCan.addEventListener('click', () => {
    deleteTodo(object.index);
    toDosContainer.innerHTML = '';
    toDos.forEach((element) => {
      toDosContainer.appendChild(createTodo(element));
    });
  });
  // Append
  container.append(left, right);
  left.append(square, description);
  right.append(dots, trashCan)

  // Event listeners
  description.addEventListener('focusin', (e) => {
    e.stopPropagation();
    container.classList.add('focus');
  });
  description.addEventListener('focusout', (e) => {
    e.stopPropagation();
    container.classList.remove('focus');
  });
  description.addEventListener('keyup', (e) => {
    updateTodo(object.index, e.target.value);
  });
  container.addEventListener('focusin', (e) => {
    e.stopPropagation();
    // dots.classList.add('display-none');
    trashCan.classList.remove('display-none');
    description.classList.add('focus');
  });
  container.addEventListener('focusout', (e) => {
    e.stopPropagation();
    // dots.classList.remove('display-none');
    trashCan.classList.add('display-none');
    description.classList.remove('focus');
  });
  square.addEventListener('click', () => {
    toggleCompleteTodo(object.index);
    toDosContainer.innerHTML = '';
    toDos.forEach((element) => {
      toDosContainer.appendChild(createTodo(element));
    });
  });
  dots.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    console.log('mouse down')
    container.draggable = 'true';
  });
  container.addEventListener('dragend', (e)=> {
    console.log('stop moving')
    container.draggable = false;
  });
  return container;
};

export default createTodo;