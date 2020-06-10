'use strict';

class BankAccount {
  constructor(name, birth, amount) {
    this.name = name;
    this.birth = birth;
    this.amount = amount;
    this.accountHistory = [`Initial: ${this.amount}`];
  }

  getInfo() {
    const reversedBirth = this.birth.split('.').reverse().join('.');
    const divider = 1000 * 60 * 60 * 24 * 365.25;
    const age = new Date() - new Date(reversedBirth);
    const dateFormatAge = Math.floor(age / divider);

    return `Name: ${this.name}, Age: ${dateFormatAge}, Amount: ${this.amount}$`;
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
