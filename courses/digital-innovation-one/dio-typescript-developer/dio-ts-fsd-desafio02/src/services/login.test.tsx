import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it('Deve exibir um alert com boas vindas', () => {
    const userName = 'Luiz';
    login(userName);
    expect(mockAlert).toHaveBeenCalledWith(`Boas vindas ${userName}`);
  });
});
