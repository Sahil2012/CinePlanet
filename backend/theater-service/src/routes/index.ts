import { Router } from "express";
import showRoutes from "./showRoutes";
import seatRoutes from "./seatRoutes";
import adminRoutes from "./admin";

const router = Router();

// admin routes
router.use("/admin", adminRoutes);

// public routes
router.use("/shows", showRoutes);
router.use("/seats", seatRoutes);

export default router;
