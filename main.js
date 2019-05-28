'use strict';

class PersonalInfo {
  constructor(person, birthday, moneyAmount) {
    this.name = person;
    this.birthday = new Date(...birthday.split('.').reduceRight(
      (birthdayIntArray, element) =>
        birthdayIntArray.concat(parseInt(element))
      , [])
    );
    this.deposite = moneyAmount;
    this.history = [];
  }

  getInfo() {
    const ageMs = Date.now() - this.birthday.getTime();
    const ageDate = new Date(ageMs);
    ageDate.setHours(24, 0, 0, 0);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(`Name: ${this.name}, Age: ${age}, Amount: ${this
      .deposite}`);
  }

  addMoney(putMoney, transactionInfo) {
    this.deposite += putMoney;
    this.history.push(`${transactionInfo}: ${putMoney.toString()}`);
  }

  withdrawMoney(getMoney, transactionInfo) {
    this.deposite -= getMoney;
    this.history.push(`${transactionInfo}: -${getMoney.toString()}`);
  }
  getAccountHistory() {
    console.log(this.history);
  }
}

const dmytro = new PersonalInfo('Dmytro', '26.11.1994', 1000);
const pavel = new PersonalInfo('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
// [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
dmytro.getAccountHistory();

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
