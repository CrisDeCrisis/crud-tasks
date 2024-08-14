import { Router } from "express";
import { createTaskValidation, updateTaskByIdValidation } from "../validation/tasks.validation.js";
import { applyValidations } from "../middleware/apply.validations.tasks.js"
import { tasksCtrl } from "../controller/task.controller.js";

const tasksRouter = Router();

tasksRouter.post("/tasks", createTaskValidation, applyValidations, tasksCtrl.createTask);
tasksRouter.get("/tasks", tasksCtrl.getTasks);
tasksRouter.get("/tasks/:id", tasksCtrl.getTaskById);
tasksRouter.put("/tasks/:id", updateTaskByIdValidation, applyValidations, tasksCtrl.updateTaskById);
tasksRouter.delete("/tasks/:id", tasksCtrl.deleteTaskById);

export { tasksRouter };