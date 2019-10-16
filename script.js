class Person {
    constructor(name, dateOfBirth, initialAmount) {
        this.name = name;
        let dateTokens = dateOfBirth.split('.');
        if (dateTokens.length === 3) {
            this.dateOfBirth = new Date(
                Date.UTC(dateTokens[2], dateTokens[1] - 1, dateTokens[0], 0, 0, 0)
            );
        }
        this.amount = initialAmount;
        this.history = [{description: "Initial", amount: initialAmount}];
    };

    _getAge = function() {
        const month = this.dateOfBirth.getMonth();
        const day = this.dateOfBirth.getDate();
        const year = this.dateOfBirth.getFullYear();
        const yearNow = new Date().getFullYear();
        const monthNow = new Date().getMonth() + 1;
        const dayNow = new Date().getDate();
        return (monthNow === month && dayNow < day || monthNow < month)
            ? yearNow - year - 1
            : yearNow - year;
    };

    getInfo = function() {
        return `Name: ${this.name}, Age: ${this._getAge()}, Amount: ${this.amount}$`;
    };

    addTransactionToHistory = function(transaction) {
        this.history.push(transaction);
    };

    addMoney = function(amount, description) {
        this.amount += amount;
        this.addTransactionToHistory({description: description, amount: amount});
    };

    withdrawMoney = function(amount, description) {
        if (this.amount > amount) {
            this.amount -= amount;
            this.addTransactionToHistory({description: description, amount: amount});
        } else {
            console.log("Operation declined.");
        }
    };

    getAccountHistory = function() {
        return this.history.map(item => `${item.description}: ${item.amount}`);
    };
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 400$
