'use strict';

class Person {
  constructor(name, dateOfBirth, amount) {
    this.name = name;
    this.amount = amount;
    this.currentAmount = this.amount;
    const [year, month, day] = dateOfBirth.split('.').reverse();;
    this.accountHistory = [{'Initial': amount}];
    this.operations = function (value, key) {
        this.accountHistory.push({[key]: value});
    };
    this.age = function () {
        const currentYear = new Date().getFullYear();
        let age = currentYear - year;
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();
        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            return age - 1;
        } else {
            return age;
        }
    }
  }

  getInfo () {
    return (`${this.name} ${this.age()} ${this.currentAmount}`);
  };

  addMoney (value, str) {
    this.currentAmount += value;
    this.operations(value, str);
  };

  getAccountHistory () {
    return this.accountHistory;
  }

  withdrawMoney (value, str) {
    this.currentAmount -= value;
    this.operations(-value, str);
  }
}
