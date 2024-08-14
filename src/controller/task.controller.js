import { taskModel } from "../model/tasks.model.js";


export const createTask = async (req, res) => {
    try {
        const newTask = new taskModel(req.body);
        const task = await newTask.save();
        return res.status(201).json({ message: 'Tarea creada correctamente' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskModel.findById(id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
        res.status(200).json(task);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
        return res.status(200).json({ message: 'Tarea actualizada correctamente' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskModel.findByIdAndDelete(id);
        if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
        res.status(200).json({ message: "Tarea eliminada con exito!" });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};