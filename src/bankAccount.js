'use strict';

class BankAccount {
  constructor(name, dayOfBirth, initialAmount) {
    this.name = name;
    this.amount = initialAmount;
    this.history = [`Initial: ${initialAmount}`];
    this.dayOfBirth = dayOfBirth;
  }

  getAge() {
    const today = new Date();
    const birthday = new Date(this.dayOfBirth.split('.').reverse().join('.'));

    return (Math.floor((today - birthday) / (365.25 * 24 * 60 * 60 * 1000)));
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.amount}$`;
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
