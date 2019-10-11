class Person {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.birthDate = birthDate;
    this.amount = amount;
    this.accountHistory = [{name: 'initial', value: this.amount}];
  }

  getInfo() {
    return (`Name: ${this.name}, Age: ${Person.getAge(this.birthDate)}, Amount: ${this.amount}\$`);
  }

  addMoney(amount, source) {
    this.amount += amount;
    Person.pushItems(this.accountHistory, amount, source);
  }

  withdrawMoney(amount, source) {
    this.amount -= amount;
    Person.pushItems(this.accountHistory, -amount, source);
  }

  getAccountHistory() {
    const historyList = [];
    for (let keys of this.accountHistory) {
      historyList.push(`${keys.name}: ${keys.value}`);
    }
    return historyList;
  }

  static getAge(birthDate) {
    birthDate = birthDate.split('.').reverse().join('.');
    let age = Math.abs(new Date(Date.now() - Date.parse(birthDate)).getUTCFullYear() - 1970);
    return age;
  }

  static pushItems(accountHistory, amount, source) {
    accountHistory.push({name: source, value: amount});
  }
}
