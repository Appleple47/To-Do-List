'use strict';

const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

textInput.addEventListener('keydown', e => {
    const text = textInput.value.trim();

    if(text === '' || e.key !== 'Enter'){
        console.log('Input is empty or a key other than Enter button was pressed.');
        return;
    }else{
        console.log('There is no error');
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    });

    li.classList.add('list-item');
    span.textContent = text;
    span.classList.add('todo-text');

    button.textContent = 'delete';
    button.type = 'button';
    button.classList.add('delete-button');

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    textInput.value = "";
});

