class Person {
  constructor (name, birthday, money) {
    this.name = name;
    this.birthday = birthday;
    this.money = money;
    this.history = [{name: 'Initial', value: money}];
  }

  calculateAge (birthday) {
    return ((Date.now() - Date.parse(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0;
  }

  addMoney (amount, source) {
    this.money += amount;
    this.history.push({name: source, value: amount});
    return `${source}: ${amount}`;
  }

  withdrawMoney (amount, spending) {
    this.money = this.money - amount;
    this.history.push({name: spending, value: amount});
    return `${spending}: -${amount}`;
  }

  getInfo () {
    return `Name: ${this.name}, Age: ${this.calculateAge(this.birthday)}, Amount: ${this.money}$`;
  }

  getAccountHistory () {
    return this.history.map(element => {
      return `${element.name}: ${element.value}`;
    });
  }
}