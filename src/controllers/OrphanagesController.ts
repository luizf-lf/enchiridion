import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.status(200).json(orphanageView.renderMany(orphanages));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);

    try {
      const orphanage = await orphanagesRepository.findOneOrFail(id, {
        relations: ['images'],
      });

      return response.status(200).json(orphanageView.render(orphanage));
    } catch (e) {
      if (e.name == 'EntityNotFound') {
        return response.status(404).json({
          message: 'Orphanage not found.',
        });
      } else {
        return response.status(500).json({
          message: 'And error occurred while searching for an orphanage.',
          error: e,
        });
      }
    }
  },
  async create(request: Request, response: Response) {
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

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanagesRepository.save(orphanage);

    return response
      .status(201)
      .json({ message: 'Created', createdOrphanageId: orphanage.id });
  },
};
