import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';

describe('UserController', () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn(),
    findUserByEmail: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);

  it('Não deve aceitar um email inválido', () => {
    const mockRequest = {
      body: {
        name: 'Luiz',
        email: 'test.com',
      },
    } as Request;

    const mockResponse = makeMockResponse();

    userController.createUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Email não possui um formato válido.',
    });
  });

  it('Deve retornar um erro caso não seja informado o e-mail', () => {
    const mockRequest = {
      body: {
        name: 'Luiz',
      },
    } as Request;

    const mockResponse = makeMockResponse();

    userController.createUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: 'E-mail é obrigatório.',
    });
  });

  it('Deve retornar um erro caso não seja informado o nome', () => {
    const mockRequest = {
      body: {
        email: 'test@mail.com',
      },
    } as Request;

    const mockResponse = makeMockResponse();

    userController.createUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Name é obrigatório.',
    });
  });

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: 'Luiz',
        email: 'luiz@test.com',
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Usuário criado',
    });
  });

  it('Deve recuperar todos os usuários através do método getAllUsers', () => {
    const getAllUsersSpy = jest.spyOn(userController, 'getAllUsers');

    const mockResponse = makeMockResponse();
    userController.getAllUsers({} as Request, mockResponse);

    expect(getAllUsersSpy).toHaveBeenCalled();
  });

  it('Falhar ao excluir um usuário não existente', () => {
    const mockRequest = {
      body: {
        name: 'Luiz',
        email: 'email.that.surely@dont.exist',
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(404);
    expect(mockResponse.state.json).toMatchObject({
      message: 'Usuário não encontrado para exclusão',
    });
  });
});
