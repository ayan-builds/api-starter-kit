import express from "express";
import userRoutes from "./user.routes.js";
// import authRoutes from "./auth.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
// router.use("/auth", authRoutes); update in future

export default router;
