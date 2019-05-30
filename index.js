class Person {
    constructor(name, dateOfBirth, money) {
        this.name = name;
        this.dateOfBirth = new Date(...dateOfBirth.split('.').reverse());
        this.money = money;
        this.history = [
            {
                info: 'Initial',
                amount: money,
                timestamp: new Date()
            }
            ];
    }

    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this._getClientAge()}, Amount: ${this.money}$`)
    }

    addMoney(cash, info) {
        this.money += cash;
        this._logHistory(cash, info);
    }

    withdrawMoney(cash, info) {
        this.money -= cash;
        this._logHistory(`-${cash}`, info);
    }

    getAccountHistory() {
        const accountHistory = this.history.map( item => {
            return `${item.info}: ${item.amount}`;
        });
        console.log(accountHistory);
    }

    _getClientAge() {
        const ageDifMs = Date.now() - this.dateOfBirth.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    _logHistory(cash, info) {
        this.history.push(
            {
                info: info,
                amount: cash,
                timestamp: new Date()
            }
            );
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

pavel.getInfo();