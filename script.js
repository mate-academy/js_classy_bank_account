function age(birthday) {
    const biDay = birthday.split('.').reverse().join('.');
    let ageDifMs = Date.now() - new Date(biDay);
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

class Person {
    constructor(name, birthday, amount) {
        this.name = name;
        this.amount = amount;
        this.age = age(birthday);
        this.accountHistory = [{name: 'Initial', money: this.amount}];
    }
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}\$`;
    }
    addMoney(salary, income) {
        this.amount += salary;
        this.accountHistory.push({name: income, sum: salary})
    }
    withdrawMoney(minusMoney, purchase) {
        this.amount -= minusMoney;
        this.accountHistory.push({name: purchase, sum: minusMoney})
    }
    getAccountHistory() {
        return `${this.accountHistory}`;
    }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

// dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
// dmytro.addMoney(2000, 'salary');
// dmytro.withdrawMoney(500, 'new phone');
// dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
// dmytro.withdrawMoney(500, 'apartment rent');
// dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
// pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
