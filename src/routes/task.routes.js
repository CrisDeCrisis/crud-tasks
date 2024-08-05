import { Router } from "express";
import ctrl from "../controller/task.controller.js";

const router = Router();

router.post("tasks:", ctrl.createTask);
router.get("tasks:", ctrl.getTasks);
router.get("tasks/:id", ctrl.getTaskById);
router.put("tasks/:id", ctrl.updateTaskById);
router.delete("tasks/:id", ctrl.deleteTaskById);

export default router;