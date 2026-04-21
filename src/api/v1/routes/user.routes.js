import express from "express";
import * as userController from "../../../modules/user/user.controller.js";
import { validateUser } from "../../../modules/user/user.validation.js";

const router = express.Router();

router.post("/", validateUser, userController.createUser);
router.get("/", userController.getUsers);

export default router;
