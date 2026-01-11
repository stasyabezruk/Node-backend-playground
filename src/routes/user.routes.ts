import { Router } from "express";
import {
  createUserHandler,
  getUsersHandler,
} from "../controllers/user.controller";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

router.post("/users", asyncHandler(createUserHandler));
router.get("/users", asyncHandler(getUsersHandler));

export default router;
