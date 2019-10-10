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
        this.history = [];
        this.history.push(`Initial: ${initialAmount}`);
    };

    getAge = function() {
        const month = this.dateOfBirth.getMonth();
        const day = this.dateOfBirth.getDate();
        const year = this.dateOfBirth.getFullYear();
        let yearNow = new Date().getFullYear();
        let monthNow = new Date().getMonth() + 1;
        let dayNow = new Date().getDate();
        if (monthNow === month && dayNow < day || monthNow < month) {
            return yearNow - year - 1;
        } else {
            return yearNow - year;
        }
    };

    getInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.amount}$`);
    };

    addMoney = function(amount, description) {
        this.amount += amount;
        this.history.push(`${description}: ${amount}`);
    };

    withdrawMoney = function(amount, description) {
        if (this.amount > amount) {
            this.amount -= amount;
            this.history.push(`${description}: -${amount}`);
        } else {
            console.log("Operation declined.");
        }
    };

    getAccountHistory = function() {
        console.log(this.history);
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
pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
