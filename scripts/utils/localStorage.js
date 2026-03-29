/**
 * LocalStorage key used for persisting kanban tasks.
 * @type {string}
 */
export const STORAGE_KEY = "kanbanTasks";

/**
 * Retrieves stored tasks from localStorage or falls back to initial data.
 * @param {Array<Object>} initialTasks - The fallback task array.
 * @returns {Array<Object>} Saved tasks array.
 */
export function getStoredTasks(initialTasks) {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : initialTasks.slice();
}

/**
 * Persists the provided task list to localStorage.
 * @param {Array<Object>} tasks - Array of task objects to save.
 * @returns {void}
 */
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
