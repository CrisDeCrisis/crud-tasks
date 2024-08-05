import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/task.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(router, "/");

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});