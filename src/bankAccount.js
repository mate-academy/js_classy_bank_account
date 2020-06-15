'use strict';

class BankAccount {
  constructor(name, birth, income) {
    this.name = name;
    this.income = income;
    this.birth = new Date(birth.split('.').reverse().join('.'));
    this.age = new Date().getFullYear() - this.birth.getFullYear();
    this.history = [`Initial: ${income}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.income}$`;
  };

  addMoney(value, description) {
    this.income += value;
    this.history.push(`${description}: ${value}`);
  };

  withdrawMoney(value, description) {
    this.income -= value;
    this.history.push(`${description}: -${value}`);
  };

  getAccountHistory() {
    return this.history;
  }
}

module.exports = {
  BankAccount,
};
