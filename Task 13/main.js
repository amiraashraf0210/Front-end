const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.taskList');
const emptyMessage = document.querySelector('.emptyMessage');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        checkIfEmpty();
        saveTasks();
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const dateElement = document.createElement('small');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = currentDate;
    dateElement.style.display = 'block'; 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        removeTask(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(dateElement); 
    taskItem.appendChild(deleteBtn);

    taskList.insertBefore(taskItem, taskList.firstChild);
    setTimeout(() => {
        taskItem.style.opacity = '1';
        taskItem.style.transform = 'translateY(0)';
    }, 10);

    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('active');
    });
}

function removeTask(taskItem) {
    taskItem.style.opacity = '0';
    taskItem.style.transform = 'translateY(30px)';
    setTimeout(() => {
        taskList.removeChild(taskItem);
        checkIfEmpty();
        saveTasks();
    }, 300);
}

function checkIfEmpty() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(task => {
        tasks.push(task.querySelector('span').textContent);
    });
    sessionStorage.setItem('tasks', tasks.join('|')); 
}

const savedTasks = sessionStorage.getItem('tasks');
if (savedTasks) {
    savedTasks.split('|').forEach(task => {
        addTask(task);
    });
}

checkIfEmpty();