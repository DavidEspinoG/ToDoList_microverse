const toDos = [
  {
    description: 'Clean the dishes',
    completed: false,
    index: 1
  },
  {
    description: 'Read a book',
    completed: false,
    index: 2
  },
  {
    description: 'Close the door',
    completed: false,
    index: 3
  },
];

const addTodo = (description) => {
  const newTodo = { description, completed: false, index: toDos.length + 1};
  toDos.push(newTodo);
};

export { toDos, addTodo };