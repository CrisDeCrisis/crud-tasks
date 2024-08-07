import { connectDB } from "../dataBase/dataBase.js";

const ctrl = {};

ctrl.createTask = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Los campos no deben estar vacios' });
    }

    const conection = await connectDB();
    await conection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
    return res.status(201).json({ message: 'Tarea creada correctamente' });
};

ctrl.getTasks = async (req, res) => {
    const conection = await connectDB();
    const [results] = await conection.query('SELECT * FROM tasks');
    res.status(200).json(results);
};

ctrl.getTaskById = async (req, res) => {
    const { id } = req.params;
    const conection = await connectDB();
    const [results] = await conection.query('SELECT * FROM tasks WHERE id = ?', [id]);

    if (!results[0]) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    } else {
        return res.status(200).json(results[0]);
    }
};

ctrl.updateTaskById = async (req, res) => {
    const { id } = req.params;
    const conection = await connectDB();
    const [results] = await conection.query('SELECT * FROM tasks WHERE id = ?', [id]);

    if (id != results[0].id) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    } else {
        const { title, description } = req.body;
        await conection.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id]);
        return res.status(200).json({ message: 'Tarea actualizada correctamente' });
    };
};

ctrl.deleteTaskById = async (req, res) => {
    const { id } = req.params;
    const conection = connectDB();
    const [results] = await conection.query('DELETE FROM tasks WHERE id = ?', [id]);

    if (id != results[0].id) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    } else {
        return res.status(200).json({ message: 'Tarea eliminada correctamente' });
    }
};

export default ctrl;