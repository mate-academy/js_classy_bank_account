'use strict';

class BankAccount {
  constructor(name, value, date) {
    this.name = name;
    this.amount = value;
    this.accountHistory = [`Initial: ${value}`];
    this.date = date;
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(value, assignment) {
    this.amount += value;
    this.accountHistory.push(`${assignment}: ${value}`);
  }

  withdrawMoney(value, purpose) {
    this.amount -= value;
    this.accountHistory.push(`${purpose}: -${value}`);
  }

  getAccountHistory() {
    return this.accountHistory;
  }
};

module.exports = {
  BankAccount,
};
