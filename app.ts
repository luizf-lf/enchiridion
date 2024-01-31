import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

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

const accountThree = new SpecialAccount('Luiz com z', 12);
accountThree.depositWith10(100);
accountThree.deposit(50);
accountThree.withdraw(90);
accountThree.withdraw(90);
// accountThree.setName('Teste'); // Retornará um erro
