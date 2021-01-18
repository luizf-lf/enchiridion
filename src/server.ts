import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();
app.use(express.json());

// Routes
// Create Orphanage
app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response
    .status(201)
    .json({ message: 'Created', createdOrphanageId: orphanage.id });
});

app.listen(3333);
