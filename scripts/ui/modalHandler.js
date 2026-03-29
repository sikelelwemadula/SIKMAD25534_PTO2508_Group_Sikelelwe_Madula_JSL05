/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 * @returns {void}
 */
export function openTaskModal(task) {
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
 * @returns {void}
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

/**
 * Sets up the Add Task modal open/close handlers.
 * @returns {void}
 */
export function setupSecondModalHandler() {
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
