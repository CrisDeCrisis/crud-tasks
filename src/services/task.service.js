import { taskModel } from "../models/tasks.model.js";

const taskService = {};

taskService.createTask = async (task) => {
    try {
        const newTask = await taskModel.create(task);
        if (!newTask) {
            throw new Error('Error al crear la tarea');
        }
        return newTask;
    } catch (error) {
        console.error(error);
    }
};

taskService.getTasks = async () => {
    try {
        const tasks = await taskModel.find();
        if (!tasks) {
            throw new Error('Error al obtener las tareas');
        }
        return tasks;
    } catch (error) {
        console.error(error);
    }
};

taskService.getTaskById = async (id) => {
    try {
        const task = await taskModel.findById(id);
        if (!task) {
            throw new Error('Error al obtener la tarea');
        }
        return task;
    } catch (error) {
        console.error(error);
    }
};

taskService.updateTaskById = async (id, task) => {
    try {
        const updatedTask = await taskModel.findByIdAndUpdate(id, task, { new: true });
        if (!updatedTask) {
            throw new Error('Error al actualizar la tarea');
        }
        return updatedTask;
    } catch (error) {
        console.error(error);
    }
};

taskService.deleteTaskById = async (id) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            throw new Error('Error al eliminar la tarea');
        }
        return deletedTask;
    } catch (error) {
        console.error(error);
    }
};

export { taskService };