'use strict';

class Person {
  constructor(name, dateOfBirth, amount) {
      this.name = name;
      this.dateOfBirth = dateOfBirth.split('.').reverse();
      this.amount = amount;
      this.currentAmount = this.amount;
      const [year, month, day] = this.dateOfBirth;
      this.accountHistory = [{'Initial': amount}];
      this.operations = function (value, key) {
          this.accountHistory.push({[key]: value});
      };
      this.age = function () {
          let age = currentYear - year;
          const currentYear = new Date().getFullYear();
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