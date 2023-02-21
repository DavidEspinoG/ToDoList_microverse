const getTodos = () => {
  if(!localStorage.getItem('toDos')) {
    return [];
  } else {
    let parsed =JSON.parse(localStorage.getItem('toDos'));
    return parsed;
  };
};

const toDos = getTodos();

const updateLocalStorage = (updatedTodos) => {
  let stringified = JSON.stringify(updatedTodos);
  localStorage.setItem('toDos', stringified);
}

const addTodo = (description) => {
  const newTodo = { description, completed: false, index: toDos.length + 1 };
  toDos.push(newTodo);
  updateLocalStorage(toDos);
};

const deleteTodo = (index) => {
  let toDelete = toDos.findIndex(element => element.index === index);
  toDos.splice(toDelete, 1);
  let counter = 1;
  toDos.forEach(element => {
    element.index = counter;
    counter++;
  });
  updateLocalStorage(toDos);
};

const updateTodo = (index, value) => {
  toDos.forEach(element => {
    if(element.index === index){
      element.description = value;
    };
  });
  updateLocalStorage(toDos);
};

const toggleCompleteTodo = (index) => {
  toDos.forEach(element => {
    if(element.index === index) {
      element.completed = !element.completed;
    };
  });
  updateLocalStorage(toDos);
} ;

export { toDos, addTodo, deleteTodo, updateTodo, toggleCompleteTodo };