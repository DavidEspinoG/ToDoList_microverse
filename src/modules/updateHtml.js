import { toDosContainer } from "./selectors";
import { toDos } from "./crud";
import createTodo from "./createTodo";

const updateHtml = () => {
  toDosContainer.innerHTML = '';
  toDos.forEach((element) => {
    toDosContainer.appendChild(createTodo(element));
  });
}

export default updateHtml;