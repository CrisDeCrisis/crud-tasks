import { Router } from "express";
import { createTaskValidation, updateTaskByIdValidation } from "../validations/tasks.validation.js";
import { applyValidations } from "../middlewares/apply.validations.tasks.js"
import { tasksCtrl } from "../controllers/task.controller.js";

const tasksRouter = Router();

tasksRouter.post("/tasks", createTaskValidation, applyValidations, tasksCtrl.createTask);
tasksRouter.get("/tasks", tasksCtrl.getTasks);
tasksRouter.get("/tasks/:id", tasksCtrl.getTaskById);
tasksRouter.put("/tasks/:id", updateTaskByIdValidation, applyValidations, tasksCtrl.updateTaskById);
tasksRouter.delete("/tasks/:id", tasksCtrl.deleteTaskById);

export { tasksRouter };