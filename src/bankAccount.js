'use strict';

class BankAccount {
  constructor(name, amountOfMoney) {
    this.name = name;
    this.amountOfMoney = amountOfMoney;
    this.history = [`Initial: ${amountOfMoney}`];
  }

  getInfo() {
    return (`Name: ${this.name}, Amount: ${this.amountOfMoney}$`);
  }

  addMoney(money, transactionInfo) {
    this.amountOfMoney += money;
    this.history.push(`${transactionInfo}: ${money}`);
  }

  withdrawMoney(money, transactionInfo) {
    this.amountOfMoney -= money;
    this.history.push(`${transactionInfo}: -${money}`);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
