import { Router } from "express";
import tasksCtrl from "../controller/task.controller.js";

const router = Router();

router.post("/tasks", tasksCtrl.createTask);
router.get("/tasks", tasksCtrl.getTasks);
router.get("/tasks/:id", tasksCtrl.getTaskById);
router.put("/tasks/:id", tasksCtrl.updateTaskById);
router.delete("/tasks/:id", tasksCtrl.deleteTaskById);

export default router;