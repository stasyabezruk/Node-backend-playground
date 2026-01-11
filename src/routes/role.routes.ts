import { Router } from "express";
import {
  createRoleHandler,
  assignRoleHandler,
} from "../controllers/role.controller";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

router.post("/roles", asyncHandler(createRoleHandler));
router.post("/roles/assign", asyncHandler(assignRoleHandler));

export default router;
