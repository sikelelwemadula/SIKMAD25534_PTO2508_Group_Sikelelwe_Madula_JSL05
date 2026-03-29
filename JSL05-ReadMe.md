# JSL05 Kanban Board Project

## Overview

This project is a modular JavaScript Kanban board built for the JSL05 challenge, which is built upon the pre-existing JSL04 project. It stores task data in **local storage** so tasks remain visible after page refreshes and allows users to create new tasks through an **Add New Task** modal.

The board includes three columns:
- `To Do`
- `Doing`
- `Done`

## Project Features

- Load saved tasks from local storage on page load
- Add new tasks using a modal form
- Persist tasks automatically after creation
- Render tasks into the correct status column
- Modular JavaScript code with separate responsibilities
- Responsive layout for desktop and mobile

## Technology Stack

- HTML
- CSS
- JavaScript (ES Modules)

## Project Files

- `index.html` — main layout, task columns, and modal dialogs
- `styles.css` — board layout, modal styling, and responsive design
- `initialData.js` — fallback task data when no storage exists
- `scripts/utils/main.js` — application entry point and initialization
- `scripts/utils/localStorage.js` — local storage helpers
- `scripts/tasks/taskManagere.js` — in-memory task state and persistence
- `scripts/tasks/formUtils.js` — add-task modal form handling
- `scripts/ui/render.js` — task rendering and container management
- `scripts/ui/modalHandler.js` — modal open/close behavior
- `scripts/ui/taskElement.js` — task DOM element creation

## Usage

1. Open `index.html` in a browser.
2. Click **Add New Task** to open the modal.
3. Enter a title, description, and status.
4. Submit to add the task to the board.
5. Refresh the page to confirm that tasks persist.

## Notes

- `index.html` uses `type="module"` to import ES modules.
- Local storage uses the key `kanbanTasks`.
- Tasks are stored and retrieved through the modular storage helper.
- The code is organized so storage, task state, modal handling, and rendering are separated.

## Goal

A clean, modular Kanban board that supports task persistence, modal-based task creation, and responsive UI behavior for the JSL05 project.

## Contributions 

Please note, this is a CodeSpace project. If you are viewing this file you do not have permission to make any changes. This is strictly an education aid.