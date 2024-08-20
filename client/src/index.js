import "./styles/style.css";
import { getAllTasks, postTasks } from "./tasks.service.js";
import { renderTask } from "./tasks.card.js";

// Elementos del DOM
const $taskForm = document.querySelector("#task-form");
const $taskList = document.querySelector("#task-list");

// Añadir nuevas tareas
$taskForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newTask = {
        title: document.querySelector("#task-name").value,
        description: document.querySelector("#task-description").value,
        isComplete: document.querySelector("#task-isComplete").checked,
    };

    try {
        const { task } = await postTasks(newTask);
        $taskList.appendChild(renderTask(task));
        $taskForm.reset();
    } catch (error) {
        console.error("Error al crear una tarea:", error);
    }
});

// Mostrar todas las tareas
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const tasks = await getAllTasks();
        tasks.forEach((task) => {
            $taskList.appendChild(renderTask(task));
        });
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
    }
});