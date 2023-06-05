import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleAccount)
// peopleAccount.deposit()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount)

const accountOne = new PeopleAccount(1, 'Luiz', 10);
accountOne.deposit(50);
accountOne.withdraw(30);
accountOne.withdraw(30); // Saque com saldo insuficiente

const accountTwo = new CompanyAccount('Unicorn Studios', 11);
accountTwo.getLoan(500);
accountTwo.withdraw(275);
accountTwo.deposit(50);
accountTwo.withdraw(70);
accountTwo.withdraw(300); // Saque com saldo insuficiente
