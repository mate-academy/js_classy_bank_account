'use strict';

class BankAccount {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.money = amount;
    this.birthDate = new Date(birthDate.split('.').reverse().join('-'));
    this.age = new Date().getFullYear() - this.birthDate.getFullYear();
    this.history = [`Initial: ${amount}`];
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.money}$`;
  }

  addMoney(amount, description) {
    this.money += amount;
    this.history.push(`${description}: ${amount}`);
  }

  withdrawMoney(amount, description) {
    this.money -= amount;
    this.history.push(`${description}: -${amount}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
