import { Router } from "express";
import { getAllShows } from "../controllers/showController";

const router = Router();

router.get("/", getAllShows);

export default router;
