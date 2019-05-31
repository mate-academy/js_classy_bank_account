'use strict';
console.log('hello');
class Person {
  constructor(name, birthday, amount) {
    this.name = name;
    this.birthday = birthday;
    this.amount = amount;
    this.transactions = [`Initial: ${this.amount}`];
  }
  getInfo() {
    let yearIsNow = new Date().getFullYear(); 
    let personsBirthdayYear = this.birthday.slice(-4);
    let isToday = yearIsNow - personsBirthdayYear - 1;
    console.log(`Name: ${this.name}, Age: ${isToday}, Amount: ${this.amount}`);
  }

  addMoney(money, from) {
    this.amount += money;
    this.transactions.push(`Amount: ${money}, History: ${from}`);
  }

  withdrawMoney(money, from) {
    this.amount -= money;
    this.transactions.push(`Amount: ${money}, History: ${from}`);
  }
  getAccountHistory() {
    console.log(this.transactions);
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

pavel.getInfo();  // Name: Pavel, Age: 28, Amount: 400$