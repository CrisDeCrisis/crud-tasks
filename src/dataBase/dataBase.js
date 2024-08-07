import { createConnection } from 'mysql2/promise';

export const connectDB = async () => {
    try {
        const connection = await createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tasks_db'
        });
        return connection;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        res.status(500).json({ message: 'Error al conectar a la base de datos' });
    }
}