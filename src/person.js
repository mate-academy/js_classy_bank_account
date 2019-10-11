class Person {
    constructor(name, birthDate, money) {
        this.name = name;
        this.age = this.calculateAge(birthDate);
        this.money = money;
        this.accountHistory = [];

        this.accountHistory.push({name: 'Initial', value: money})
    }

    calculateAge(birthday) {
        let ageDifMs = Date.now() - new Date(birthday.split('.').reverse().join(', ')).getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.money}$`;
    };
    addMoney(amount, source) {
        return 'Money income: ' + this.refreshAccountHistory(amount, source);
    };
    withdrawMoney(amount, source) {
        return 'Money withdraw: ' + this.refreshAccountHistory(-amount, source);
    };
    refreshAccountHistory(amount, source) {
        this.money += amount;
        this.accountHistory.push({name: source, value: amount});
        return JSON.stringify({name: source, value: amount});
    };
    getAccountHistory() {
        let arr = [];
        for (let elem of this.accountHistory) {
            let strArr = [];
            for (let key in elem) {
                strArr.push(elem[key]);
            }
            arr.push(strArr.join(': '));
        }
        return arr;
    };
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
