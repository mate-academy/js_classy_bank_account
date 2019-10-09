class Person {
    constructor(name, dob, balance) {
        this.name = name;
        this.dob = dob;
        this.balance = balance;
        this.age = function () {
            const dobDate = this.dob.split('.').reverse().join('-');
            return Math.floor((new Date() - new Date(dobDate).getTime()) / 3.15576e+10)
        };
        this.history = [`Initial: ${balance}`];
    }


    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age(this.dob)}, Amount: ${this.balance}$`)
    };

    addMoney(sum, transaction) {
        this.balance = +this.balance + sum;
        this.history.push(`${transaction}: ${sum}`);
    };

    withdrawMoney(sum, transaction) {
        this.balance = +this.balance - sum;
        this.history.push(`${transaction}: -${sum}`);
    };

    getAccountHistory() {
        console.log(this.history);
    };
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 29, Amount: 400$
