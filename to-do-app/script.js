var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');

function addTask() {
    var taskText = todoInput.value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    var li = document.createElement('li');
    li.textContent = taskText;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = `🗑`;
    deleteBtn.onclick = function () {
        todoList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
}
