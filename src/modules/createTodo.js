import { deleteTodo } from "./crud";
import updateHtml from "./updateHtml";

const createTodo = (object) => {
  // Create
  const container = document.createElement('div');
  container.tabIndex = 0;
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
  const description = document.createElement('p');
  description.innerText = object.description;
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
  container.addEventListener('focusin', (e) => {
    e.stopPropagation();
    dots.classList.add('display-none');
    trashCan.classList.remove('display-none');
  })
  container.addEventListener('focusout', (e) => {
    e.stopPropagation();
    dots.classList.remove('display-none');
    trashCan.classList.add('display-none');
  })
  return container;
};

export default createTodo;