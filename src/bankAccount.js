'use strict';

class BankAccount {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
    this.history = [`Initial: ${this.amount}`];
  }
  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amount}$`;
  };
  addMoney(sum, description) {
    this.amount += sum;
    this.history.push(`${description}: ${sum}`);

    return `${this.amount}$ ${description}`;
  };

  withdrawMoney(sum, description) {
    this.amount -= sum;
    this.history.push(`${description}: -${sum}`);

    return `${this.amount}$ ${description}`;
  };
  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
