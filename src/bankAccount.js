'use strict';

class BankAccount {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.history = [`Initial: ${amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(value, transaction) {
    this.amount += value;
    this.history.push(`${transaction}: ${value}`);
  }
  withdrawMoney(value, transaction) {
    this.amount -= value;
    this.history.push(`${transaction}: -${value}`);
  }
  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
