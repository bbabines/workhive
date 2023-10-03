import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// Verify w/ middleware jwt before able to delete user
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);

export default router;
