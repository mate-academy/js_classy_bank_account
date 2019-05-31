
'use strict';

class Person {
	constructor(name, date, amount) {
 	this.name = name;
  	this.amount = amount;
 	this.birthday = this.calculateAge(date); 
 	this.accountHistory = [`Initial: ${this.amount}`];
	};

	getInfo() {
		console.log(`Name: ${this.name}, Age: ${this.birthday}, Amount:${this.amount}$`);
	}
	 addMoney(fee, forWhat) {
		this.amount += fee;
		this.accountHistory.push(` '${forWhat}': ${this.amount} `);
	}
	getAccountHistory() {
		console.log(`${this.accountHistory}`);
	}
	withdrawMoney(money, forWhat) {
		this.amount -= money;
		this.accountHistory.push(` '${forWhat}': -${money} `);
	}
	 calculateAge(date) {
  		const splitDate = date.split('.').reverse();
  		const ageDifMs = Date.now() - new Date(...splitDate).getTime();
  		const ageDate = new Date(ageDifMs);
  		return Math.abs(ageDate.getUTCFullYear() - 1970);
	} 
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);


dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
