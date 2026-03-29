import { initialTasks } from "../../initialData.js";

const STORAGE_KEY = "kanbanTasks";
let tasks = [];

function getStoredTasks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : initialTasks.slice();
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @param {string} task.title - Title of the task.
 * @param {number} task.id - Unique task ID.
 * @param {string} task.status - Status column: 'todo', 'doing', or 'done'.
 * @returns {HTMLElement} The created task div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 * @param {string} status - The task status ('todo', 'doing', or 'done').
 * @returns {HTMLElement|null} The container element, or null if not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks from the current task list to the UI.
 * @param {Array<Object>} tasksToRender - Array of task objects.
 */
function renderTasks(tasksToRender) {
  tasksToRender.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
}

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * Sets up modal close behavior.
 */
function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

/**
 * Sets up the second modal (Add Task Modal).
 */
function setupSecondModalHandler() {
  const openBtn = document.getElementById("add-new-task-btn");
  const closeBtn = document.getElementById("cancel-add-btn");
  const modal = document.getElementById("add-task-modal");

  openBtn.addEventListener("click", () => {
    modal.showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

/**
 * Handles the logic for creating a new task from the Add Task modal.
 */
function setupAddNewTaskLogic() {
  const addTaskForm = document.getElementById("new-task-modal-window");
  const addTaskModal = document.getElementById("add-task-modal");

  addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title-input").value.trim();
    const description = document.getElementById("desc-input").value.trim();
    const status = document.getElementById("select-status").value;

    if (!title) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
    };

    tasks.push(newTask);
    saveTasks();

    clearExistingTasks();
    renderTasks(tasks);

    addTaskModal.close();
    addTaskForm.reset();
  });
}

/**
 * Initializes the task board and modal handlers.
 */
function initTaskBoard() {
  tasks = getStoredTasks();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupSecondModalHandler();
  setupAddNewTaskLogic();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);


