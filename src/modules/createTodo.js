const createTodo = (object) => {
  //Create
  const container = document.createElement('div');
  container.classList.add('toDo');
  const left = document.createElement('div');
  left.classList.add('left');
  const square = document.createElement('i');
  if(!object.completed){
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
  //Append
  container.append(left, dots);
  left.append(square, description);

  return container;
}

export default createTodo;