import { connectDB } from "../dataBase/dataBase.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, isComplete } = req.body;
        const conection = await connectDB();
        await conection.query('INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)', [title, description, isComplete]);
        return res.status(201).json({ message: 'Tarea creada correctamente' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const getTasks = async (req, res) => {
    try {
        const conection = await connectDB();
        const [results] = await conection.query('SELECT * FROM tasks');
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const conection = await connectDB();
        const [results] = await conection.query('SELECT * FROM tasks WHERE id = ?', [id]);

        if (!results[0]) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        return res.status(200).json(results[0]);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const conection = await connectDB();
        const [results] = await conection.query('SELECT * FROM tasks WHERE id = ?', [id]);

        if (id != results[0].id) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        const { title, description, isComplete } = req.body;
        await conection.query('UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?', [title, description, isComplete, id]);
        return res.status(200).json({ message: 'Tarea actualizada correctamente' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};

export const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const conection = await connectDB();
        const [deleteTask] = await conection.query('DELETE FROM tasks WHERE id = ?', [id]);

        if (deleteTask.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        };

        await conection.query('DELETE FROM tasks WHERE id = ?', [id]);
        return res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error del servidor' })
    }
};