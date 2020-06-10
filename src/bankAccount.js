'use strict';

class BankAccount {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.history = [`Initial: ${this.amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(money, target) {
    this.target = target;
    this.amount += money;
    this.history.push(`${this.target}: ${money}`);
  }

  withdrawMoney(money, target) {
    this.target = target;
    this.amount -= money;
    this.history.push(`${this.target}: -${money}`);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
