'use strict';

class BankAccount {
  constructor(name, birthDate, amount) {
    const todayDate = new Date().getFullYear();
    const dateOfBirth = new Date(birthDate.split('.').reverse()
      .join('.')).getFullYear();
    const age = todayDate - dateOfBirth;

    this.name = name;
    this.amount = amount;
    this.age = age;
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
