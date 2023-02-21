import { deleteTodo, toDos, toggleCompleteTodo } from "./crud.js";
import updateHtml from "./updateHtml.js";
import { updateTodo } from "./crud.js";

const createTodo = (object) => {
  // Create
  const container = document.createElement('div');
  container.tabIndex = 1;
  container.classList.add('toDo');
  const left = document.createElement('div');
  left.classList.add('left');
  const square = document.createElement('i');
  if (!object.completed) {
    square.classList.add('fa-regular');
    square.classList.add('fa-square');
  } else {
    square.classList.add('fa-solid');
    square.classList.add('fa-check');
  }
  square.classList.add('fa-2x');
  const description = document.createElement('input');
  description.value = object.description;
  description.classList.add('description');
  description.tabIndex = -1;
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
    updateHtml();
  });
  // Append
  container.append(left, dots, trashCan);
  left.append(square, description);

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
    dots.classList.add('display-none');
    trashCan.classList.remove('display-none');
    description.classList.add('focus');
  })
  container.addEventListener('focusout', (e) => {
    e.stopPropagation();
    dots.classList.remove('display-none');
    trashCan.classList.add('display-none');
    description.classList.remove('focus');
  });
  square.addEventListener('click', () => {
    toggleCompleteTodo(object.index);
    updateHtml();
  })

  return container;
};

export default createTodo;