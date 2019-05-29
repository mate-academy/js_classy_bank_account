'use strict';

class Person {
  constructor(name, dateOfBirth, amount) {
    this.name = name;
    this.dateOfBirth = dateOfBirth.split('.').reverse();
    this.amount = amount;
    this.currentAmount = this.amount;
    const [year, month, day] = this.dateOfBirth;
    this.accountHistory = [`Initial: ${amount}`];
    this.operations = function(value, key) {
      this.accountHistory.push(`${key}: ${value}`);
    };

    this.age = function() {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const currentDay = new Date().getDate();
      if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        return currentYear - year - 1;
      } else {
        return currentYear - year;
      }
    };
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age()}, Amount: ${this.amount}$`;
  };
  addMoney(amount, depositingFunds) {
    this.currentAmount += amount;
    this.operations(amount, depositingFunds);
  };
  withdrawMoney(amount, withdrawals) {
    this.currentAmount -= amount;
    this.operations(-amount, withdrawals);
  };
  getAccountHistory() {
    return this.accountHistory;
  };
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo());

dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo());

dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory());

console.log(pavel.getInfo());
