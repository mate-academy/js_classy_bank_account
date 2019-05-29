'use strict';
function calculateAge(birthday) { // birthday is a date
   const ageDifMs = Date.now() - Date.parse(birthday);
   const ageDate = new Date(ageDifMs); // miliseconds from epoch
   return Math.abs(ageDate.getUTCFullYear() - 1970);
 }

class Person {
  constructor(name, birth, amount) {
    this.name = name;
    this.birth = birth;
    // console.log(this.birth);
    this.amount = amount;
    this.accountHistory = [`Initial: ${amount}`]
  }
  getAge() {
    return calculateAge(this.birth);
  }
  get age() {
    return this.getAge();
  }
  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
  }
  addMoney(value, notes) {
    this.amount += value;
    console.log(`${notes}: ${value}`);
    this.accountHistory.push(`${notes}: ${value}`);
  }
  withdrawMoney(value, notes) {
    this.amount -= value;
    console.log(`${notes}: -${value}`);
    this.accountHistory.push(`${notes}: -${value}`);
  }
  getAccountHistory() {
    console.log(this.accountHistory);
    return this.accountHistory;
  }
}

const dmytro = new Person('Dmytro', '1994-11-22', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);
// console.log(dmytro.birth);
dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
