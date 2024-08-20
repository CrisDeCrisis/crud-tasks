import { API_URL } from "./constants.js";

const URL = API_URL;

// Función auxiliar para manejar las solicitudes fetch
const fetchData = async (endpoint, options) => {
    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
};

// Crear nueva tarea
export const postTasks = async ({ title, description, isComplete }) => {
    return fetchData(URL, {
        method: "POST",
        body: JSON.stringify({ title, description, isComplete }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// Obtener todas las tareas
export const getAllTasks = async () => {
    return fetchData(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// Actualizar una tarea
export const putTask = async (id, { title, description, isComplete }) => {
    return fetchData(URL + `/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            isComplete,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// Eliminar una tarea
export const deleteTask = async (id) => {
    return fetchData(URL + `/${id}`, {
        method: "DELETE",
    });
}