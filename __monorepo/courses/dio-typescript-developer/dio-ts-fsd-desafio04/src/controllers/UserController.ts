import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

interface ICreateUserRequest {
  name: string;
  email: string;
}

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser(request: Request, response: Response): Response {
    const user = request.body as ICreateUserRequest;

    if (!user.name) {
      return response.status(400).json({ message: 'Name é obrigatório.' });
    }

    if (!user.email) {
      return response.status(400).json({ message: 'E-mail é obrigatório.' });
    }

    if (!user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return response.status(400).json({ message: 'Email não possui um formato válido.' });
    }

    this.userService.createUser(user.name, user.email);
    return response.status(201).json({ message: 'Usuário criado' });
  }

  getAllUsers(request: Request, response: Response) {
    const users = this.userService.getAllUsers();
    return response.status(200).json(users);
  }

  deleteUser(request: Request, response: Response) {
    const { email } = request.body as ICreateUserRequest;

    if (typeof this.userService.findUserByEmail(email) === 'undefined') {
      return response.status(404).json({ message: 'Usuário não encontrado para exclusão' });
    }

    this.userService.deleteUser(email);

    return response.status(200).json({ message: 'Usuário deletado' });
  }
}
