import { Router } from 'express';
import showController from '../controllers/showController';

const router = Router();

router.get('/:movieName', showController.getAllShows);

export default router;
