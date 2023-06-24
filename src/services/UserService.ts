export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: 'Luiz',
    email: 'luiz@test.com',
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser(name: string, email: string): void {
    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log('DB atualizado', this.db);
  }

  findUserByEmail(email: string): User | undefined {
    return this.db.find((item) => item.email === email);
  }

  getAllUsers(): User[] {
    return this.db;
  }

  deleteUser(email: string): number {
    const index = this.db.findIndex((item) => item.email === email);

    if (index > -1) {
      this.db.splice(index, 1);
    }

    return index;
  }
}
