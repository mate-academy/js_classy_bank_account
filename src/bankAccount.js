'use strict';

const getUserAge = (birthDate) => {
  const date = birthDate.split('.').reverse().join('-');

  return Math.floor((Date.now() - Date.parse(date)) / 31557600000);
};

class BankAccount {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.age = getUserAge(birthDate);
    this.amount = amount;
    this.history = [`Initial: ${this.amount}`];
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`;
  }

  addMoney(value, operation) {
    this.amount += value;
    this.history.push(`${operation}: ${value}`);
  }

  withdrawMoney(value, operation) {
    this.amount -= value;
    this.history.push(`${operation}: -${value}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
