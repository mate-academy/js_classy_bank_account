class Person {

  constructor(name, birth, money){
    this.name = name;
    this.birth = birth;
    this.money = money;
    this.moneyHistory = [{name: 'Initial', value: this.money}];
  }

  static calculateAge(birthday) {
    const bDay = birthday.split('.').reverse().join(', ');
    const age = Date.now() - new Date(bDay).getTime();
    const userAge = new Date(age);
    return Math.abs(userAge.getUTCFullYear() - 1970);
  }

  static createHistory(amount, reason, moneyHistoryVar) {
    moneyHistoryVar.push({name: reason, value: amount});
  }

  getInfo() {
    return `Client: ${this.name}\nAge: ${Person.calculateAge(this.birth)}\nDate of birth: ${this.birth}\nMoney: ${this.money}`;
  }
  addMoney(amount, reason) {
    this.money += amount;
    Person.createHistory(amount, reason, this.moneyHistory);
    return `${this.name}'s balance is: ${this.money}, added  ${amount} due to ${reason}`;
  }

  withdrawMoney(amount, reason) {
    this.money -= amount;
    Person.createHistory(`-${amount}`, reason, this.moneyHistory);
    return `${this.name}'s balance is: ${this.money}, spent  ${amount} due to ${reason}`;
  }

  getAccountHistory() {
    const history = [];
    this.moneyHistory.forEach(item => history.push(` ${item.name}: ${item.value}`));
    return `${this.name}'s money history --- ${history.toString()}`;
  }

}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo());
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo());
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory());
console.log(pavel.getInfo());
