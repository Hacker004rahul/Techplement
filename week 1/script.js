// Function to get tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  // Function to save tasks to local storage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to render tasks on the page
  function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'task';

        listItem.innerHTML = `
            <input type="text" value="${task}" onchange="updateTask(${index}, this.value)">
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        todoList.appendChild(listItem);
    });
  }

  // Function to add a new task
  function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);
        newTaskInput.value = '';
        renderTasks();
    }
  }

  // Function to update a task
  function updateTask(index, newValue) {
    const tasks = getTasks();
    tasks[index] = newValue;
    saveTasks(tasks);
    renderTasks();
  }

  // Function to delete a task
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
  }

  // Initial rendering
  renderTasks();