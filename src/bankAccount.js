'use strict';

class BankAccount {
  constructor(name, amount, date) {
    this.name = name;
    this.amount = amount;
    this.history = [`Initial: ${amount}`];
    this.date = date;
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(amount, procedure) {
    this.amount += amount;
    this.history.push(`${procedure}: ${amount}`);
  }

  withdrawMoney(amount, procedure) {
    this.amount -= amount;
    this.history.push(`${procedure}: -${amount}`);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
