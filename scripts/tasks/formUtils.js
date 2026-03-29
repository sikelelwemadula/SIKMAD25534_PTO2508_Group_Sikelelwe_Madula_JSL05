import { addTask, getTasks } from "./taskManagere.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";

/**
 * Handles the logic for creating a new task from the Add Task modal.
 * @returns {void}
 */
export function setupAddNewTaskLogic() {
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

    addTask(newTask);
    clearExistingTasks();
    renderTasks(getTasks());

    addTaskModal.close();
    addTaskForm.reset();
  });
}
