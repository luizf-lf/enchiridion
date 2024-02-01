import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  /**
   * Faz um empréstimo na conta atual
   * @param amount Valor a ser emprestado
   */
  getLoan(amount: number): void {
    if (this.validateStatus()) {
      this.deposit(amount, true);

      console.log(`Voce pegou um empréstimo de ${amount}. Seu saldo agora é ${this.getBalance()}`);
    }
  }
}
