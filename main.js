'use strict';

function calculateAge(date) {
  const splitDate = date.split('.').reverse();
  const ageDifMs = Date.now() - new Date(...splitDate).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

class Person {
  constructor(name, birthDate, amountOfCash) {
    this.birthDate = birthDate;
    this.name = name;
    this.amount = amountOfCash;
    this.history = [`Initial: ${amountOfCash}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
  }

  addMoney(count, info) {
    this.amount += count;
    this.history.push(`${info}: ${count}`);
  }

  withdrawMoney(count, info) {
    this.amount -= count;
    this.history.push(`${info}: -${count}`);
  }

  getAccountHistory() {
    console.log(this.history);
  }

  get age() {
    return calculateAge(this.birthDate);
  }
}

/* tests */

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();

pavel.getInfo();