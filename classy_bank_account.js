function pushItems(history, amount, transaction) {
    history.push({name: transaction, value: amount});
}

class Person {
    constructor(name, birth, balance) {
        this.name = name;
        this.birth = birth;
        this.balance = balance;
        this.history = [{name: 'Initial', value: this.balance}];
    }

    getInfo() {
        const dateOfBirth = this.birth.split('.').reverse().join('-');
        const age = function () {
            return Math.floor((new Date() - new Date(dateOfBirth).getTime()) / 3.15576e+10)
        };
        return `Name: ${this.name}, Age: ${age(this.birth)}, Amount: ${this.balance}$`
    };

    addMoney(sum, transaction) {
        this.balance = +this.balance + sum;
        pushItems(this.history, sum, transaction)
    };

    withdrawMoney(sum, transaction) {
        this.balance = +this.balance - sum;
        pushItems(this.history, -sum, transaction)
    };

    getAccountHistory() {
        return this.history;
    };
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo()); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: 29, Amount: 400$
