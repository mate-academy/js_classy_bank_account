'use strict';

class BankAccount {
  // Write your code here
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.history = [`Initial: ${this.amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(money, info) {
    this.history.push(`${info}: ${money}`);
    this.amount += money;
  }

  withdrawMoney(money, info) {
    this.amount -= money;
    this.history.push(`${info}: -${money}`);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
