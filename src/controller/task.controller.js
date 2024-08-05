import { connectDB } from "../dataBase/dataBase.js";

const ctrl = {};

ctrl.createTask = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Los campos no deben estar vacios' });
    } else {
        const conection = await connectDB();
        await conection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        return res.status(201).json({ message: 'Tarea creada correctamente' });
    }
};

ctrl.getTasks = async (req, res) => {
    const conection = await connectDB();
    const [results] = await conection.query('SELECT * FROM tasks');

    if (!conection) {
        return res.status(500).json({ message: 'No se pudo conectar a la base de datos' });
    } else {
        return res.status(200).json(results);
    }
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

export default ctrl;