class Person {

  constructor(name, birth, money){
    this.name = name;
    this.birth = birth;
    this.money = money;
    this.moneyHistory = [];
  }

  static calculateAge(birthday) {
    const bDay = birthday.split('.').reverse().join(', ');
    const age = Date.now() - new Date(bDay).getTime();
    const userAge = new Date(age);
    return Math.abs(userAge.getUTCFullYear() - 1970);
  }

  static createHistory(amount, reason, moneyHistoryVar) {
    moneyHistoryVar.push(`${reason}: ${amount}`);
  }

  getInfo() {
    console.log(`Client: ${this.name}\nAge: ${Person.calculateAge(this.birth)}\nDate of birth: ${this.birth}\nMoney: ${this.money}`)
  }
  addMoney(amount, reason) {
    this.money += amount;
    Person.createHistory(amount, reason, this.moneyHistory);
    console.log(`${this.name}'s balance is: ${this.money}, added  ${amount} due to ${reason}`)
  }

  withdrawMoney(amount, reason) {
    this.money -= amount;
    Person.createHistory(`-${amount}`, reason, this.moneyHistory);
    console.log(`${this.name}'s balance is: ${this.money}, spent  ${amount} due to ${reason}`);
  }

  getAccountHistory() {
    console.log(`${this.name}'s money history : ${this.moneyHistory.toString()}` );
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
