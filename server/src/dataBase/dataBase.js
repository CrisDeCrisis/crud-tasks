import mongoose from "mongoose";

const url = "mongodb://localhost:27017/tasks_db";

export const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Se conectó a la base de datos:", mongoose.connection.name);
        return mongoose.connection;
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
};