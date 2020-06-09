'use strict';

class BankAccount {
  constructor(name, amount, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
    this.amount = amount;
    this.transactions = [`Initial: ${amount}`];
  }

  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amount}$`);
  };

  addMoney(amount, description) {
    this.amount += amount;
    this.transactions.push(`${description}: ${amount}`);
  };

  withdrawMoney(amount, description) {
    this.transactions.push(`${description}: -${amount}`);
    this.amount -= amount;
  };

  getAccountHistory() {
    return this.transactions;
  };
};

module.exports = {
  BankAccount,
};
