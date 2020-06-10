'use strict';

class BankAccount {
  constructor(name = 'Vasja', amount = 0, birth) {
    this.name = name;
    this.birth = new Date(birth);
    this.amount = 0;
    this.accountHistory = [];

    if (birth) {
      this.age = new Date().gerFullYear - this.birth.getFullYear;
    }

    this.addMoney(amount, 'Initial');
  }

  getInfo() {
    if (this.age) {
      return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`;
    }

    return `Name: ${this.name}, Amount: ${this.amount}$`;
  };

  addMoney(sum, info) {
    this.accountHistory.push(`${info}: ${sum}`);
    this.amount += sum;
  };

  withdrawMoney(sum, info) {
    this.accountHistory.push(`${info}: -${sum}`);
    this.amount -= sum;
  };

  getAccountHistory() {
    return this.accountHistory;
  };
};

module.exports = {
  BankAccount,
};
