'use strict';

class BankAccount {
  constructor(name, birthDate, amount) {
    const date1 = new Date('2020.12.06');
    const date2 = new Date(birthDate.split('.').reverse().join('.'));
    const diff = date1 - date2;
    const years = Math.floor(diff / 31536000000);

    this.name = name;
    this.amount = amount;
    this.age = years;
    this.history = ['Initial: ' + amount];
  }

  getInfo() {
    return (`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
  }

  addMoney(money, key) {
    this.amount += money;
    this.history.push(key + ': ' + money);
  }

  withdrawMoney(money, key) {
    this.amount -= money;
    this.history.push(key + ': -' + money);
  }

  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
