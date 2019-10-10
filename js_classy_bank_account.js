class Person {

    constructor(name = anonymous, dateOfBirth, amount = 0) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.amount = amount;

        const [day, month, year] = dateOfBirth.split('.');
        this.day = +day;
        this.month = +month;
        this.year = +year;

        this.log = [{ transaction: 'Initial', amount: this.amount }];
    }

    getAge() {
        let yearNow = new Date().getFullYear();
        let monthNow = new Date().getMonth() + 1;
        let dayNow = new Date().getDate();
        if (monthNow === this.month && dayNow < this.day || monthNow < this.month) {
            return yearNow - this.year - 1;
        } else {
            return yearNow - this.year;
        }
    }

    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.amount}\$`)
    }

    addMoney(money, info) {
        this.amount += money;
        this.log.push({ transaction: info, amount: money });
    }

    withdrawMoney(money, info) {
        this.amount -= money;
        this.log.push({ transaction: info, amount: money });
    }

    getLog() {

        let result = [];
        for (const value of this.log) {
            result.push(`${value.transaction}: ${value.amount}`);
        }
        return result;
    }
}

const dmytro = new Person('Dmytro', '26.10.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');

console.log(dmytro);
console.log(dmytro.getLog()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

