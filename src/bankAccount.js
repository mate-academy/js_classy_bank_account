'use strict';

class BankAccount {
  constructor(name, birthDate, initialValue) {
    this.name = name;
    this.birthDate = new Date(birthDate.split('.').reverse().join('.'));
    this.amount = initialValue;
    this.today = new Date();
    this.age = this.today.getFullYear() - this.birthDate.getFullYear();
    this.history = [`Initial: ${initialValue}`];
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`;
  }

  addMoney(value, source) {
    this.amount += value;
    this.history.push(`${source}: ${value}`);
  }

  withdrawMoney(value, purpose) {
    this.amount -= value;
    this.history.push(`${purpose}: -${value}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
