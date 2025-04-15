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
    
    editbutton.addEventListener('click', e => {
        const listItem = e.target.closest('li');
        const span = listItem.querySelector('.todo-text');
        const currentText = span.textContent;
        const input = document.createElement('input');
        
        input.type = 'text';
        input.value = currentText;
        input.classList.add('edit-input');
        listItem.replaceChild(input, span);
        
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const newText = input.value.trim();
                const newSpan = document.createElement('span');
                newSpan.textContent = newText || currentText;
                newSpan.classList.add('todo-text');
                listItem.replaceChild(newSpan, input);
            }
        });
    });

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