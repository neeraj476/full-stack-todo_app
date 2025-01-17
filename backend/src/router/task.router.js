
import { Router } from "express";
import { addTask  , updateTask , deleteTask , getTask, deleteAll} from "../controller/task.controller.js";

const router = Router();

router.post("/create", addTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
router.delete("/delete-all", deleteAll);
router.get("/get", getTask);

export default router;