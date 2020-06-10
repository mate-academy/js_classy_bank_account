'use strict';

class BankAccount {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.accountHistory = [`Initial: ${this.amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  }

  addMoney(amount, operation) {
    this.amount += amount;
    this.accountHistory.push(`${operation}: ${amount}`);
  }

  withdrawMoney(amount, operation) {
    this.amount -= amount;
    this.accountHistory.push(`${operation}: -${amount}`);
  }

  getAccountHistory() {
    return this.accountHistory;
  }
};

module.exports = {
  BankAccount,
};
