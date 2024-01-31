import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

class PersonController {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  index = async (req: Request, res: Response) => {
    try {
      const { page = 1, pageSize = 10 } = req.query;

      const people = await this.prisma.person.findMany({
        take: Number(pageSize),
        skip: (Number(page) - 1) * Number(pageSize),
        where: {
          isDeleted: false,
        },
      });
      console.log('Total people: ' + people.length);
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log(error);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { name, age } = req.body;
      const newPerson = await this.prisma.person.create({
        data: {
          name,
          age,
        },
      });
      console.log('Person created:');
      console.log(newPerson);
      res.json(newPerson);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error(error);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, age } = req.body;
      const updatedPerson = await this.prisma.person.update({
        where: { id: Number(id) },
        data: {
          name,
          age,
        },
      });
      res.json(updatedPerson);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedPerson = await this.prisma.person.update({
        where: { id: Number(id) },
        data: {
          isDeleted: true,
        },
      });
      res.json(deletedPerson);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

export default PersonController;
