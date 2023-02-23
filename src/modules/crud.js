/* eslint-disable import/no-cycle */
import { toDosContainer } from './selectors.js';
import createTodo from './createTodo.js';

const getTodos = () => {
  if (!localStorage.getItem('toDos')) {
    return [];
  }
  const parsed = JSON.parse(localStorage.getItem('toDos'));
  return parsed;
};

const toDos = getTodos();

const updateLocalStorage = (updatedTodos) => {
  const stringified = JSON.stringify(updatedTodos);
  localStorage.setItem('toDos', stringified);
};

const addTodo = (description) => {
  const newTodo = { description, completed: false, index: toDos.length + 1 };
  toDos.push(newTodo);
  updateLocalStorage(toDos);
};

const deleteTodo = (index) => {
  const toDelete = toDos.findIndex((element) => element.index === index);
  toDos.splice(toDelete, 1);
  let counter = 1;
  toDos.forEach((element) => {
    element.index = counter;
    counter += 1;
  });
  updateLocalStorage(toDos);
};

const updateTodo = (index, value) => {
  toDos.forEach((element) => {
    if (element.index === index) {
      element.description = value;
    }
  });
  updateLocalStorage(toDos);
};

const toggleCompleteTodo = (index) => {
  toDos.forEach((element) => {
    if (element.index === index) {
      element.completed = !element.completed;
    }
  });
  updateLocalStorage(toDos);
};

const clearCompleted = () => {
  const filtered = toDos.filter((element) => element.completed);
  filtered.forEach((element) => {
    deleteTodo(element.index);
  });
  updateLocalStorage(toDos);
};

const switchElements = (element1, element2) => {
  toDos[element1.index - 1].completed = element2.completed;
  toDos[element1.index - 1].description = element2.description;
  toDos[element2.index - 1].completed = element1.completed;
  toDos[element2.index - 1].description = element1.description;
  toDosContainer.innerHTML = '';
  toDos.forEach((element) => {
    toDosContainer.appendChild(createTodo(element));
  });
  updateLocalStorage(toDos);
};

export {
  toDos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleCompleteTodo,
  clearCompleted,
  switchElements,
};