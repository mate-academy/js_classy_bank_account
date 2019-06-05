class Person {
  constructor(name, birthday, money) {
    this.name = name;
    this.cashBrush = 0;
    this.history = [`Initial: ${money}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.calculateAge(birthday)}, Amount: ${this.cashBrush}$`);
  }

  addMoney(money, thing) {
    this.cashBrush += money;
    this.createHistory(money, thing);
    console.log(`Money already added!`);
  }

  withdrawMoney(money, thing) {
    this.cashBrush -= money;
    this.createHistory(-money, thing);
    console.log(`Money withdraw`);
  }

  getAccountHistory() {
    console.log(this.history);
  }

  createHistory(money, thing) {
    this.history.push(`${thing}: ${money}$`);
    console.log(`This is ${this.name} history:${this.history}`);
  }

  calculateAge(birthday) {
    const bDay = (birthday.split('.').reverse().join(', '));
    const age = new Date().getFullYear() - new Date(bDay).getFullYear() -1;
    return age;
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();
pavel.getInfo();
