'use strict';

class BankAccount {
  constructor(name, birthdate, money) {
    this.name = name;
    this.birthdate = birthdate;
    this.money = money;
    this.accountHistory = [`Initial: ${this.money}`];
  }

  getAge() {
    const birthdayArray = this.birthdate.split('.');
    const birthday = new Date(
      birthdayArray[2], birthdayArray[1] - 1, birthdayArray[0]);

    return Math.trunc((Date.now() - birthday) / 31557600000);
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.money}$`;
  }

  addMoney(money, transactionName) {
    this.money += money;
    this.accountHistory.push(`${transactionName}: ${money}`);
  }

  withdrawMoney(money, transactionName) {
    this.money -= money;
    this.accountHistory.push(`${transactionName}: ${-money}`);
  }

  getAccountHistory() {
    return this.accountHistory;
  }
}

module.exports = {
  BankAccount,
};
