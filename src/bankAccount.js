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

  addMoney(addedMoney, info) {
    this.amount += addedMoney;
    this.transactions.push(`${info}: ${addedMoney}`);
  };

  withdrawMoney(wasSpending, info) {
    this.transactions.push(`${info}: -${wasSpending}`);
    this.amount -= wasSpending;
  };

  getAccountHistory() {
    return this.transactions;
  };
};

module.exports = {
  BankAccount,
};
