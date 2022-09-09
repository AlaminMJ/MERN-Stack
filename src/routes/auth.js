import { Router } from "express";
import { auth } from "../controllers";

const router = Router();
router.post("/register", auth.register);
router.post("/register", auth.register);

export default router;
