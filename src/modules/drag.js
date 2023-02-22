/* eslint-disable import/no-cycle */
import { switchElements } from './crud.js';
import stringToBool from './stringToBool.js';

const addDragListeners = () => {
  const htmlToDos = document.querySelectorAll('.toDo');
  htmlToDos.forEach((element) => {
    element.addEventListener('dragstart', (e) => {
      element.classList.add('opacity');
      const context = {
        description: element.attributes.description.value,
        completed: stringToBool(element.attributes.completed.value),
        index: element.attributes.index.value,
      };
      const toSend = JSON.stringify(context);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', toSend);
    });
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      return false;
    });
    element.addEventListener('dragenter', () => {
      element.classList.add('over');
    });
    element.addEventListener('dragleave', () => {
      element.classList.remove('over');
    });
    element.addEventListener('dragend', () => {
      element.classList.remove('opacity');
      element.draggable = false;
    });
    element.addEventListener('drop', (e) => {
      e.stopPropagation();
      element.classList.remove('over');
      const target = {
        description: element.attributes.description.value,
        completed: stringToBool(element.attributes.completed.value),
        index: element.attributes.index.value,
      };
      const origin = JSON.parse(e.dataTransfer.getData('text/plain'));
      switchElements(origin, target);
      e.stopImmediatePropagation();
      return false;
    }, false);
  });
};

export default addDragListeners;