import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './storage';

const dioBankAuth = {
  login: '',
  password: '',
};

describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  it('Deve retornar o objeto no localStorage com a chave DioBankAuth', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith('DioBankAuth');
  });

  it('Deve criar o objeto no localStorage', () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith('DioBankAuth', JSON.stringify(dioBankAuth));
  });

  it('Deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(dioBankAuth);
    expect(mockSetItem).toHaveBeenCalledWith('DioBankAuth', JSON.stringify(dioBankAuth));
  });
});
