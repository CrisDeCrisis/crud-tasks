import { deleteTask, putTask } from "./tasks.service.js";

// Función para renderizar una tarea
export const renderTask = (task) => {
    const $taskContainer = document.createElement("li");
    const $taskSection1 = document.createElement("section");
    const $taskSection2 = document.createElement("section");
    const $taskTitle = document.createElement("h2");
    const $taskDescription = document.createElement("p");
    const $taskStatus = document.createElement("span");
    const $taskModify = document.createElement("button");
    const $taskDelete = document.createElement("button");

    // Configuración de estilos y atributos
    $taskContainer.classList.add("task-container", "p-4", "rounded-md", "shadow-lg", "flex", "flex-col", "justify-between");
    $taskSection1.classList.add("flex", "justify-between", "items-start");
    $taskSection2.classList.add("flex", "justify-end", "mt-4");
    $taskTitle.classList.add("text-lg", "font-semibold", "text-left");
    $taskDescription.classList.add("text-gray-400", "text-left");
    $taskStatus.classList.add("text-sm", task.isComplete ? "text-green-500" : "text-red-500");
    $taskModify.classList.add("modify-btn", "bg-blue-600", "hover:bg-blue-800", "text-white", "font-bold", "py-1", "px-2", "rounded");
    $taskDelete.classList.add("delete-btn", "bg-red-600", "hover:bg-red-800", "text-white", "font-bold", "py-1", "px-2", "rounded", "ml-2");

    // Configuración del contenido
    $taskTitle.textContent = task.title;
    $taskDescription.textContent = task.description;
    $taskStatus.textContent = task.isComplete ? "Completada" : "Pendiente";
    $taskModify.textContent = "Modificar";
    $taskDelete.textContent = "Eliminar";

    // Eventos
    $taskModify.addEventListener("click", () => {
    });

    $taskDelete.addEventListener("click", async () => {
        try {
            await deleteTask(task._id);
            $taskContainer.remove();
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
        }
    });

    // Añadir elementos a las secciones
    const $taskInfoDiv = document.createElement("div");
    $taskInfoDiv.append($taskTitle, $taskDescription);
    $taskSection1.append($taskInfoDiv, $taskStatus);
    $taskSection2.append($taskModify, $taskDelete);

    // Añadir secciones al contenedor principal
    $taskContainer.append($taskSection1, $taskSection2);

    return $taskContainer;
};