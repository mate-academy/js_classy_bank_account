'use strict';

class BankAccount {
  constructor(name, dateOfBirth, amount) {
    this.name = name;
    this.amount = amount;
    this.dateOfBirth = dateOfBirth;
    this.accountHistory = [`Initial: ${this.amount}`];
  };

  getInfo() {
    const msInYear = 1000 * 60 * 60 * 24 * 365;
    const age = Math.floor(Math.abs(new Date()
      - new Date(this.dateOfBirth.split('.').reverse().join('-')))
      / msInYear);

    return `Name: ${this.name}, Age: ${age}, Amount: ${this.amount}$`;
  }

  addMoney(amount, purpose) {
    this.amount += amount;
    this.accountHistory.push(`${purpose}: ${amount}`);
  }

  withdrawMoney(amount, purpose) {
    this.amount -= amount;
    this.accountHistory.push(`${purpose}: -${amount}`);
  }

  getAccountHistory() {
    return this.accountHistory;
  }
}

module.exports = {
  BankAccount,
};
