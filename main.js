'use strict';

class Person {
    constructor(name, birthDay, amount) {
        this.name = name;
        this.birthDay = birthDay;
        this.amount = amount;
        this.history = [{name: 'Initial', value: amount}];
    }

    static calculateAge(dateOfBirth) {
        const reverseDate = new Date(dateOfBirth.split('.').reverse());
        const difference = Date.now() - reverseDate.getTime();
        const msAge = new Date(difference);
        return Math.abs(msAge.getFullYear() - 1970);
    }

    addItems(amount, notes) {
        this.amount += amount;
        this.history.push({name: notes, value: amount});
    }

    getInfo() {
        return `Name: ${this.name}, 
                Age: ${Person.calculateAge(this.birthDay)}, 
                Amount: ${this.amount}$`;
    }

    addMoney(money, notes) {
        this.addItems(money, notes);
    }

    withdrawMoney(money, notes) {
        this.addItems(-money, notes);
    }

    getAccountHistory() {
        const historyArr = [];
        for (const key of this.history) {
            historyArr.push(`${key.name}: ${key.value}`);
        }

        return historyArr;
    }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(1500, 'new phone'));
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
