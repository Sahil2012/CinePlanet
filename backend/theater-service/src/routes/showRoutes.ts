import { Router } from "express";
import { getAllShows, updateSeatsStatus } from "../controllers/showController";

const router = Router();

router.get("/", getAllShows);
router.patch("/:showId/seats", updateSeatsStatus);

export default router;
