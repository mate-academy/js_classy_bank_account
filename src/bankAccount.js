'use strict';

class BankAccount {
  constructor(name, dateOfBirth, amount) {
    this.name = name;
    this.amount = amount;
    this.dateOfBirth = new Date(dateOfBirth.split('.').reverse().join('-'));
    this.age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
    this.accountHistory = [`Initial: ${amount}`];
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`;
  };
  addMoney(amount, transaction) {
    this.amount += amount;
    this.accountHistory.push(`${transaction}: ${amount}`);
  };
  withdrawMoney(amount, transaction) {
    this.amount -= amount;
    this.accountHistory.push(`${transaction}: -${amount}`);
  };
  getAccountHistory() {
    return this.accountHistory;
  };
}

module.exports = {
  BankAccount,
};
