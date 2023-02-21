const createTodo = (object) => {
  //Create
  const container = document.createElement('div');
  container.classList.add('toDo');
  const left = document.createElement('div');
  left.classList.add('left');
  const square = document.createElement('i');
  square.classList.add('fa-regular');
  square.classList.add('fa-square');
  square.classList.add('fa-2x');
  const description = document.createElement('p');
  description.innerText = object.description;
  const dots = document.createElement('i');
  dots.classList.add('fa-solid');
  dots.classList.add('fa-ellipsis-vertical');
  dots.classList.add('fa-2x');

  //Append
  container.append(left, dots);
  left.append(square, description);

  return container;
}

export default createTodo;