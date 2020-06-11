'use strict';

class BankAccount {
  constructor(name, initialSum) {
    this.name = name;
    this.money = initialSum;
    this.history = [`Initial: ${initialSum}`];
  };

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}$`;
  }

  addMoney(deposit, source) {
    this.money += deposit;
    this.history.push(`${source}: ${deposit}`);
  }

  withdrawMoney(expenses, purpose) {
    this.money -= expenses;
    this.history.push(`${purpose}: -${expenses}`);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
