'use strict';

class BankAccount {
  constructor(name, amount, accountHistory) {
    this.name = name;
    this.amount = amount;
    this.accountHistory = [`Initial: ${this.amount}`];
  };

  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  }

  addMoney(amount, info) {
    this.amount += amount;

    this.accountHistory.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    this.amount -= amount;

    this.accountHistory.push(`${info}: -${amount}`);
  }

  getAccountHistory() {
    return this.accountHistory;
  }
};

module.exports = {
  BankAccount,
};
