import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// Routes
routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);

export default routes;
