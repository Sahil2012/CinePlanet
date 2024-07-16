import { Router } from 'express';
import showRoutes from './showRoutes';

const router = Router();

router.use('/shows', showRoutes);

export default router;
