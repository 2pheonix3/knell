import { Router } from "express";
import {
  signup, login
} from "../controllers/AuthControllers.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getUserInfo } from "../controllers/AuthControllers.js";

const authRoutes = Router()

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.post("/get-user-info", verifyToken, getUserInfo);

export default authRoutes;