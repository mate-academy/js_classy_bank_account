'use strict';

class BankAccount {
  // Write your code here
  constructor(name, date, amount) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.history = [`Initial: ${amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(money, source) {
    this.amount += money;
    this.history.push(`${source}: ${money}`);
  }

  withdrawMoney(money, purpose) {
    this.amount -= money;
    this.history.push(`${purpose}: -${money}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
