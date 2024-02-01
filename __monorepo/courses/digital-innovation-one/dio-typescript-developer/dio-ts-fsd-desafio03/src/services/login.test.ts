import { login } from './login';

describe('login', () => {
  const mockEmail = 'luiz@dio.bank';
  const mockPass = '123456';

  it('Deve exibir um alert com boas vindas caso o email e senha sejam válidos', async () => {
    const response = await login(mockEmail, mockPass);
    expect(response).toBeTruthy();
  });

  it('Deve exibir um erro caso o email ou senha sejam inválidos', async () => {
    const response = await login('email@invalido.com', 'senhaInvalida');
    expect(response).toBeFalsy();
  });

  it('Deve exibir um erro caso o email seja válido e a senha seja inválida', async () => {
    const response = await login(mockEmail, 'senhaInvalida');
    expect(response).toBeFalsy();
  });
});
