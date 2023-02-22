const addDragOver = () => {
  const htmlToDos = document.querySelectorAll('.toDo');
  htmlToDos.forEach( element => {
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      return false; 
    }) 
  })
  console.log(htmlToDos);
}

export default addDragOver;