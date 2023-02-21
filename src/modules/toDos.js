const toDos = [];

const getIndex = () => {
  if (toDos.length === 0) {
    return 1;
  }
  const indexes = toDos.map((element) => element.index);
  const max = Math.max(...indexes);
  return max + 1;
};

const addTodo = (description, completed) => {
  const newTodo = { description, completed, index: getIndex() };
  toDos.push(newTodo);
};

export { addTodo, toDos };