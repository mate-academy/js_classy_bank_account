'use strict';
class Person {
  constructor (name, dateOfBirth, amount) {
    this.name = name;
    this.dateOfBirth = dateOfBirth.split('.');
    const [day, month, year] = this.dateOfBirth;
    this.amount = amount;
    this.currentAmount = this.amount;
    this.accountHistory = [{'initial': amount}];

    this.age = function() {
      const date = new Date();
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;
      const currentDay = date.getDate();
      const age = currentYear - year;
      if (currentMonth < month || currentMonth === month && currentDay < day) {
        return age + 1;
      }
      return age;
    };

    this.transaction = function(value, info) {
      this.accountHistory.push({[info]: value})
    };
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age()}, Amount: ${this.currentAmount}`;
  };

  addMoney (income, info) {
    this.currentAmount += income;
    this.transaction(income, info)
  };

  withdrawMoney (outgo, info) {
    this.currentAmount -= outgo;
    this.transaction(`-${outgo}`, info)
  };

  getAccountHistory() {
    return this.accountHistory;
  };
}



const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
