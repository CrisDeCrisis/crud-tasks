import { taskService } from "../services/task.service.js";

const tasksCtrl = {};

tasksCtrl.createTask = async (req, res) => {
    const task = req.body;
    try {
        const newTask = await taskService.createTask(task);
        newTask.save();
        return res.status(201).json({
            task: newTask,
            message: 'Tarea creada correctamente'
        });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

tasksCtrl.getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

tasksCtrl.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
        res.status(200).json(task);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

tasksCtrl.updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = req.body;
        const taskUpdate = await taskService.updateTaskById(id, task);
        if (!taskUpdate) return res.status(404).json({ message: "Tarea no encontrada" });
        return res.status(200).json({ message: 'Tarea actualizada correctamente' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

tasksCtrl.deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.deleteTaskById(id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
        res.status(200).json({ message: "Tarea eliminada con exito!" });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export { tasksCtrl };