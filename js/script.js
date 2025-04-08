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
    const divfin = document.createElement('\div');

    deletebutton.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    });

    li.classList.add('list-item');
    span.textContent = text;
    span.classList.add('todo-text');

    div.type = 'div';
    div.classList.add('buttongroup');

    
    editbutton.textContent = 'edit';
    editbutton.type = 'button';
    editbutton.classList.add('edit-button');
    
    deletebutton.textContent = 'delete';
    deletebutton.type = 'button';
    deletebutton.classList.add('delete-button');

    divfin.type = '\div';

    li.appendChild(span);
    li.appendChild(div);
    li.appendChild(editbutton);
    li.appendChild(deletebutton);
    li.appendChild(divfin);
    todoList.appendChild(li);

    textInput.value = "";
});

