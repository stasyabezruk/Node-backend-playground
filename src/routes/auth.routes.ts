import { Router } from "express";
import { registerHandler } from "../controllers/auth.controller";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

router.post("/auth/register", asyncHandler(registerHandler));

export default router;
