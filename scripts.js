'use strict';

class Person {
  constructor(name, dateOfBirth, initialMoney) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.currentMoney = initialMoney;
    this.accountHistory = [`Initial: ${this.currentMoney}`];
  }
  getInfo() {
    let correctDate = getCorrectDate(this.dateOfBirth);
    function getCorrectDate(dateOfBirth) {
      const tempArr = dateOfBirth.split('.');
      const day = tempArr[0];
      const month = tempArr[1];
      const year =tempArr[2];
      return new Date(day, month, year);

    }
    function calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    let age = calculateAge(correctDate);
    console.log(this.name + ', ' + age + ', ' + this.currentMoney + '$');
  }
  addMoney(amount, source) {
    this.currentMoney += amount;
    this.accountHistory.push(`${source}: ${amount}`)
  }
  withdrawMoney(amount, source) {
    this.currentMoney -= amount;
    this.accountHistory.push(`${source}: ${amount}`);
  }
  getAccountHistory() {
    console.log(this.accountHistory);
  }
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