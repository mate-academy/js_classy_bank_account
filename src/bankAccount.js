'use strict';

class BankAccount {
  constructor(name, birthday, money) {
    this.name = name;
    this.money = money;
    this.history = [`Initial: ${this.money}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  }

  addMoney(money, action) {
    this.money += money;
    this.history.push(`${action}: ${money}`);
  }

  withdrawMoney(money, action) {
    this.money -= money;
    this.history.push(`${action}: -${money}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
