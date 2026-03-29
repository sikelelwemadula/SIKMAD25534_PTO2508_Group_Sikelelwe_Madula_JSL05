import { getStoredTasks, saveTasks } from "../utils/localStorage.js";

/**
 * In-memory task list for the board.
 * @type {Array<Object>}
 */
let tasks = [];

/**
 * Loads tasks into memory from storage or initial fallback data.
 * @param {Array<Object>} initialTasks - Default tasks if no storage exists.
 * @returns {Array<Object>} Loaded task list.
 */
export function initTasks(initialTasks) {
  tasks = getStoredTasks(initialTasks);
  return tasks;
}

/**
 * Returns the current task list.
 * @returns {Array<Object>}
 */
export function getTasks() {
  return tasks;
}

/**
 * Adds a new task and persists the updated list.
 * @param {Object} task - Task object to add.
 * @returns {void}
 */
export function addTask(task) {
  tasks.push(task);
  saveTasks(tasks);
}
