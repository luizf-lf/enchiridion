import express from 'express';
import PersonController from './controllers/PersonController';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

const personController = new PersonController(prisma);

router.get('/api/people', personController.index);
router.post('/api/people', personController.create);
router.put('/api/people/:id', personController.update);
router.delete('/api/people/:id', personController.delete);

export default router;
