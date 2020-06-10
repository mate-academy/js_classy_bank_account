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
    this.amount += money;
    this.history.push(`${target}: ${money}`);
  }

  withdrawMoney(money, target) {
    this.amount -= money;
    this.history.push(`${target}: -${money}`);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
