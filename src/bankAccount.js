'use strict';

class BankAccount {
  constructor(name, dayOfBirth, initialAmount) {
    this.name = name;
    this.amount = initialAmount;
    this.history = [`Initial: ${initialAmount}`];
    this.dayOfBirth = dayOfBirth;
    this.age = 2020 - this.dayOfBirth.split('.')[2];
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`;
  }

  addMoney(value, reference) {
    this.amount += value;
    this.history.push(`${reference}: ${value}`);
  }

  withdrawMoney(value, reference) {
    this.amount -= value;
    this.history.push(`${reference}: -${value}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
