import { Router } from "express";
import { getAllSeats } from "../controllers/seatController";

const router = Router();

router.get("/", getAllSeats);

export default router;
