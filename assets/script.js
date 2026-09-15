const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const emptyMessage = document.querySelector('#empty-message');
const taskCount = document.querySelector('#task-count');

const tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.className = 'task-check';
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.dataset.action = 'toggle';
    checkbox.dataset.index = index;
    checkbox.setAttribute('aria-label', `Marcar tarefa: ${task.text}`);

    const text = document.createElement('span');
    text.className = `task-text${task.completed ? ' completed' : ''}`;
    text.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.type = 'button';
    deleteButton.dataset.action = 'delete';
    deleteButton.dataset.index = index;
    deleteButton.textContent = 'Excluir';
    deleteButton.setAttribute('aria-label', `Excluir tarefa: ${task.text}`);

    item.append(checkbox, text, deleteButton);
    taskList.appendChild(item);
  });

  emptyMessage.hidden = tasks.length > 0;
  let taskLabel;
  if (tasks.length === 1) {
    taskLabel = 'tarefa';
  } else {
    taskLabel = 'tarefas';
  }
  taskCount.textContent = `${tasks.length} ${taskLabel}`;
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    return;
  }

  tasks.push({ text, completed: false });
  taskInput.value = '';
  taskInput.focus();
  renderTasks();
});

taskList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action="delete"]');
  if (!button) {
    return;
  }

  tasks.splice(Number(button.dataset.index), 1);
  renderTasks();
});

taskList.addEventListener('change', (event) => {
  const checkbox = event.target.closest('[data-action="toggle"]');
  if (!checkbox) {
    return;
  }

  tasks[Number(checkbox.dataset.index)].completed = checkbox.checked;
  renderTasks();
});

renderTasks();
