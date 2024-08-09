import { Router } from "express";
import {
    createTaskValidation,
    updateTaskByIdValidation,
    deleteTaskByIdValidation
} from "../validation/tasks.validation.js";
import { applyValidations } from "../middleware/apply.validations.tasks.js"
import {
    createTask,
    getTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
} from "../controller/task.controller.js";

const tasksRouter = Router();

tasksRouter.post("/", createTaskValidation, applyValidations, createTask);
tasksRouter.get("/", getTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.put("/:id", updateTaskByIdValidation, applyValidations, updateTaskById);
tasksRouter.delete("/:id", deleteTaskByIdValidation, applyValidations, deleteTaskById);

export { tasksRouter };