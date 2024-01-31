interface IDIoBankLoginStorage {
  login: string;
  password: string;
}

const dioBankAuthModel = {
  login: '',
  password: '',
};

export const getAllLocalStorage = (): IDIoBankLoginStorage | null => {
  const item = localStorage.getItem('DioBankAuth');

  if (item) {
    return JSON.parse(item) as IDIoBankLoginStorage;
  }

  return null;
};

export const createLocalStorage = (): void => {
  localStorage.setItem('DioBankAuth', JSON.stringify(dioBankAuthModel));
};

export const changeLocalStorage = (authData: IDIoBankLoginStorage): void => {
  localStorage.setItem('DioBankAuth', JSON.stringify(authData));
};
