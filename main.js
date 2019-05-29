class Person {
  constructor(name, birthday, money) {
    this.name = name;
    this.age = this.calculateAge(birthday);
    this.cashBrush = 0;
    this.history = [`Initial: ${money}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.cashBrush}$`);
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
    const age = new Date().getFullYear() - new Date(bDay).getFullYear() -1; // -1 === magic string :)
    console.log(age);
    return age;
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
pavel.getInfo(); // Name: Pavel, Age: 28, Amount: 400$
