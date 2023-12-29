import express from 'express';
import PersonController from './controllers/PersonController';

const router = express.Router();
const personController = new PersonController();

router.get('/api/people', personController.index);
router.post('/api/people', personController.create);
router.put('/api/people/:id', personController.update);
router.delete('/api/people/:id', personController.delete);

export default router;
