import { Router } from "express";
import showRoutes from "./showRoutes";
import seatRoutes from "./seatRoutes";
import adminRoutes from "./admin";
import authenticateAdmin from "../middleware/authenticateAdmin";
import authRoutes from "./auth";

const router = Router();

// auth routes
router.use("/auth",authRoutes);

// admin routes routes with JWT authentication
router.use("/admin" , authenticateAdmin, adminRoutes);

// public routes
router.use("/shows", showRoutes);
router.use("/seats", seatRoutes);

export default router;
