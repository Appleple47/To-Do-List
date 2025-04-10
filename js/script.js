'use strict';

const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

textInput.addEventListener('keydown', e => {
    const text = textInput.value.trim();

    if(text === '' || e.key !== 'Enter'){
        console.log('Input is empty or a key other than Enter button was pressed.');
        return;
    }else{
        console.log('There is no error.');
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const deletebutton = document.createElement('button');
    const editbutton = document.createElement('button');

    deletebutton.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    });

    li.classList.add('list-item');

    li.classList.add('list-item');
    li.setAttribute('draggable', 'true');

    span.textContent = text;
    span.classList.add('todo-text');

    div.classList.add('buttongroup');

    editbutton.textContent = 'edit';
    editbutton.type = 'button';
    editbutton.classList.add('edit-button');
    
    deletebutton.textContent = 'delete';
    deletebutton.type = 'button';
    deletebutton.classList.add('delete-button');

    li.appendChild(span);
    li.appendChild(div);
    li.appendChild(editbutton);
    li.appendChild(deletebutton);
    todoList.appendChild(li);
    textInput.value = "";
});

let draggedItem = null;

todoList.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
});

todoList.addEventListener('dragover', (event) => {
    event.preventDefault();
});

todoList.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('list-item')) {
        todoList.insertBefore(draggedItem, event.target.nextSibling);
    }
});