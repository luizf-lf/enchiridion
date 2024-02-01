import { DioAccount } from './DioAccount';

export class SpecialAccount extends DioAccount {
  constructor(accountName: string, accountNumber: number) {
    super(accountName, accountNumber);
  }

  /**
   * Faz um depósito com 10 a mais do valor informado
   * @param amount valor a ser depositado;
   */
  depositWith10(amount: number): void {
    console.log(`Depositando 10 a mais no valor ${amount}`);
    this.deposit(amount + 10);
  }
}
