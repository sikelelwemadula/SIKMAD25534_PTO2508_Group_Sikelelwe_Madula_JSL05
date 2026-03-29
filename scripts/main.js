    import {loadTasksFromStorage} from ".utils/localStorage.js";
    import {clearExistingTasks} from ".ui/render.js";
    import {
        setupModalCloserHandler,
        setupNewTaskModalHandler,
    } from "./ui/modalHandlers.js";

    function initTaskBoard() {
        const tasks = loadTasksFromStorage();
        clearExistingTasks();
        // Assuming you have a function to render tasks on the UI
        renderTasks(tasks);
        setupModalCloserHandler();
        setupNewTaskModalHandler();
    }

    document.addEventListener("DOMContentLoaded", initTaskBoard);
    