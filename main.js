'use strict'

class Person {
  constructor(name, birthday, amount) {
    this.name = name;
    this.amount = amount;
    this.currentAmount = amount;
    const [day, month, year] = birthday.split('.');
    this.accountHistory = [{'Initial': amount}];

    this.operations = function (value, str) {
      this.accountHistory.push({[str]: value})
    };

    this.age = function getAge() {
      const newDate = new Date();
      const currentYear = newDate.getFullYear();
      const currentMonth = newDate.getMonth() + 1;
      const currentDay = newDate.getDate();
      const age = currentYear - year;
      if (currentMonth < month || currentMonth === month && currentDay < day) {
        return (age - 1);
      }
      return age;
    };
  }

  getInfo = function () {
    return (`Name: ${this.name}, Age: ${this.age()}, Amount: ${this.currentAmount}`);
  };

  addMoney = function (value, str) {
    this.currentAmount += value;
    this.operations(value, str);
  };

  getAccountHistory = function () {
    return this.accountHistory;
  };

  withdrawMoney = function (value, str) {
    this.currentAmount -= value;
    this.operations(-value, str);
  };
}


const Dima = new Person('Dima', '08.11.1981', 1000);
Dima.addMoney(500, 'salary');
Dima.withdrawMoney(200, 'food');
console.log(Dima.getAccountHistory());
console.log(Dima.getInfo());

