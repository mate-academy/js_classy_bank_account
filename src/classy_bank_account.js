'use strict'

class Person {

    constructor(name, dateOfBirth, initialAmount) {
        this.currentAmount = initialAmount;
        this.accountHistory = [`Initial: ${initialAmount}`];
        this.Name = name;
        this.Age = () => {
            const currentDate = new Date();
            let birthday = new Date(dateOfBirth.split('.').reverse().join('-'));
            var diff = currentDate.getTime() - birthday.getTime();
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        };
        this.Amount = `${this.currentAmount}$`;
    }

    getInfo() {
        console.log(`Name: ${this.Name}, Age: ${this.Age()}, Amount: ${this.Amount}`);
    }

    addMoney(amount, info) {
        this.currentAmount += amount;
        this.Amount = `${this.currentAmount}$`;
        this.accountHistory.push(`${info}: ${this.currentAmount}`);
    }

    withdrawMoney(amount, info) {
        this.currentAmount -= amount;
        this.Amount = `${this.currentAmount}$`;
        this.accountHistory.push(`${info}: -${amount}`);
    }

    getAccountHistory() {
        console.log(this.accountHistory);
    }

}