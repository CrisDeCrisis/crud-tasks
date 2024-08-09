import { Router } from "express";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
} from "../controller/task.controller.js";

const tasksRouter = Router();

tasksRouter.post("/", createTask);
tasksRouter.get("/", getTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.put("/:id", updateTaskById);
tasksRouter.delete("/:id", deleteTaskById);

export { tasksRouter };