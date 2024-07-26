import { Router } from "express";
import {
  addMovie,
  deleteMovie,
  getMovieByMovieName,
} from "../../controllers/movieController";

const router = Router();

router.post("/", addMovie);
router.get("/", getMovieByMovieName);
router.delete("/:movieId", deleteMovie);

export default router;
