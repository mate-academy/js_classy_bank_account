'use strict';

class BankAccount {
  constructor(name, birth, income) {
    this.name = name;
    this.birth = birth;
    this.income = income;
    this.history = [`Initial: ${income}`];
  }

  getAge() {
    const parsedAge = this.birth.split('.').reverse().join(',');
    const timeDiffer = Date.now() - Date.parse(parsedAge);
    const age = timeDiffer / 1000 / 3600 / 24 / 365;

    return Math.floor(age);
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.getAge()} ,Amount: ${this.income}$`;
  }

  addMoney(amount, operation) {
    this.income += amount;
    this.history.push(`${operation}: ${amount}`);
  }
  withdrawMoney(amount, operation) {
    this.income -= amount;
    this.history.push(`${operation}: -${amount}`);
  }
  getAccountHistory() {
    return this.history;
  }
};

module.exports = {
  BankAccount,
};
