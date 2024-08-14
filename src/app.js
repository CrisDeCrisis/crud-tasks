import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { tasksRouter } from './routes/task.routes.js';
import { connectDB } from './dataBase/dataBase.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use("/api/tasks", tasksRouter);

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});