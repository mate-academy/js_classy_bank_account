'use strict';

class BankAccount {
  constructor(name, date, initial) {
    this.name = name;
    this.amount = initial;
    this.history = [`Initial: ${this.amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(amount, purpose) {
    this.amount += amount;
    this.history.push(`${purpose}: ${amount}`);
  }

  withdrawMoney(amount, purpose) {
    this.amount -= amount;
    this.history.push(`${purpose}: -${amount}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
