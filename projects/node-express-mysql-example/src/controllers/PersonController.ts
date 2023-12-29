import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

class PersonController {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
    this.index = this.index.bind(this);
  }

  /**
   * @swagger
   * /api/people:
   *   get:
   *     description: Retorna todas as pessoas paginadas
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: page
   *         description: Número da página
   *         in: query
   *         required: false
   *       - name: pageSize
   *         description: Tamanho da página
   *         in: query
   *         required: false
   *     responses:
   *       200:
   *         description: Lista de pessoas
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Person'
   */
  async index(req: Request, res: Response) {
    try {
      const { page = 1, pageSize = 10 } = req.query;

      const people = await this.prisma.person.findMany({
        take: Number(pageSize),
        skip: (Number(page) - 1) * Number(pageSize),
      });
      console.log('Total people: ' + people.length);
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log(error);
    }
  }

  /**
   * @swagger
   * /api/people:
   *   post:
   *     description: Cria uma nova pessoa
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Dados da pessoa a ser criada
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/CreatePersonDto'
   *     responses:
   *       200:
   *         description: Pessoa criada com sucesso
   *         schema:
   *           $ref: '#/definitions/Person'
   */
  async create(req: Request, res: Response) {
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
    }
  }

  /**
   * @swagger
   * /api/people/{id}:
   *   put:
   *     description: Atualiza os dados de uma pessoa pelo ID
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: ID da pessoa a ser atualizada
   *         in: path
   *         required: true
   *         type: integer
   *       - name: body
   *         description: Novos dados da pessoa
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/UpdatePersonDto'
   *     responses:
   *       200:
   *         description: Pessoa atualizada com sucesso
   *         schema:
   *           $ref: '#/definitions/Person'
   */
  async update(req: Request, res: Response) {
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
  }

  /**
   * @swagger
   * /api/people/{id}:
   *   delete:
   *     description: Exclui logicamente uma pessoa pelo ID
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: ID da pessoa a ser excluída
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: Pessoa excluída com sucesso
   *         schema:
   *           $ref: '#/definitions/Person'
   */
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      // Marcação lógica para exclusão
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
  }
}

export default PersonController;
