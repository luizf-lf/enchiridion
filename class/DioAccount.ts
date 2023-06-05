export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  /**
   * Método construtor responsável por criar a conta
   * @param name nome da conta
   * @param accountNumber numero da conta
   */
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;

    console.log(`
      Conta criada com sucesso:
      - Nome: ${this.name}
      - Conta: ${this.accountNumber}
      - Saldo: ${this.balance}
    `);
  }

  /**
   * Define o nome da conta
   * @param name nome a ser definido
   * @deprecated Método deprecado, irá retornar um erro ao ser executado.
   */
  setName(name: string): void {
    throw new Error('Não é possível alterar o nome da conta');

    // this.name = name;
    // console.log('Nome alterado com sucesso!');
  }

  /**
   * Retorna o nome da conta
   */
  getName(): string {
    return this.name;
  }

  /**
   * Faz um depósito simples na conta
   * @param amount quantidade a ser depositado
   * @param noLog se não deverá mostrar a mensagem de confirmação
   */
  deposit(amount: number, noLog: boolean = false): void {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + amount);

      !noLog && console.log(`Você depositou ${amount}. Novo saldo: ${this.getBalance()}`);
    }
  }

  /**
   * Faz um saque simples na conta, se houver saldo
   * @param amount valor a ser retirado
   */
  withdraw(amount: number): void {
    if (this.validateStatus()) {
      if (this.getBalance() < amount) {
        console.warn(`Saldo de ${this.getBalance()} é insuficiente para sacar ${amount}.`);
        return;
      }

      this.setBalance(this.getBalance() - amount);
      console.log(`Você sacou ${amount}. Novo saldo: ${this.getBalance()}`);
    }
  }

  /**
   * Recupera o saldo atual da conta
   */
  getBalance(): number {
    return this.balance;
  }

  /**
   * Define o saldo atual da conta
   * @param balance novo valor a ser aplicado
   */
  setBalance(balance: number): void {
    this.balance = balance;
  }

  /**
   * Valida se a conta é valida
   * @returns Se é valido
   */
  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
