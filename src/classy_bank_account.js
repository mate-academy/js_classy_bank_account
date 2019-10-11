'use strict'

class Person {

    constructor(name, dateOfBirth, initialAmount) {
        this.currentAmount = initialAmount;
        this.accountHistory = [
            { name: 'Initial', value: initialAmount }
        ];
        this.name = name;
        this.Age = () => {
            const currentDate = new Date();
            let birthday = new Date(dateOfBirth.split('.').reverse().join('-'));
            var diff = currentDate.getTime() - birthday.getTime();
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        };
        this.amount = `${this.currentAmount}$`;
    }

    pushHist(accountHistory, value, name) {
        accountHistory.push({ name, value });
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.Age()}, Amount: ${this.amount}`;
    }

    addMoney(amount, info) {
        this.currentAmount += amount;
        this.amount = `${this.currentAmount}$`;
        this.pushHist(this.accountHistory, amount, info);
        return `Current amount is ${this.currentAmount}$`;
    }

    withdrawMoney(amount, info) {
        this.currentAmount -= amount;
        this.amount = `${this.currentAmount}$`;
        this.pushHist(this.accountHistory, -amount, info);
        return `Current amount is ${this.currentAmount}`;
    }

    getAccountHistory() {
        let shortHist = [];
        for (const obj of this.accountHistory) {
            shortHist.push(`${obj.name}: ${obj.value}`);
        }
        return shortHist;
    }

}