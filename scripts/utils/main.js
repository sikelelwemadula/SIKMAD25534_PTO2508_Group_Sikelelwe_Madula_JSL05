import { initialTasks } from "../../initialData.js";
import { initTasks, getTasks } from "../tasks/taskManagere.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { setupModalCloseHandler, setupSecondModalHandler } from "../ui/modalHandler.js";
import { setupAddNewTaskLogic } from "../tasks/formUtils.js";

/**
 * Initializes the task board and modal handlers.
 * @returns {void}
 */
function initTaskBoard() {
  initTasks(initialTasks);
  clearExistingTasks();
  renderTasks(getTasks());
  setupModalCloseHandler();
  setupSecondModalHandler();
  setupAddNewTaskLogic();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
