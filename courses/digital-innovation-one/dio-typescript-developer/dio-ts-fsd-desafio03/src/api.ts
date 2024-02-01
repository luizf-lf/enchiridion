interface IAccount {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const conta: IAccount = {
  email: 'luiz@dio.bank',
  password: '123456',
  name: 'Luiz F.',
  balance: 420.69,
  id: '1',
};

export const api: Promise<IAccount> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
