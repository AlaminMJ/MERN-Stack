import { Router } from "express";
import { users } from "../controllers";

const router = Router();
router.get("/", users.allUser);
router.get("/:id", users.getUserByID);
router.post("/", users.createUser);
router.delete("/:id", users.deleteUserByID);
router.put("/:id", users.updateUserByID);

export default router;
