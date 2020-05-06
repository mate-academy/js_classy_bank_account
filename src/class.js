class BankAccount {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.birthDate = birthDate;
    this.amount = amount;
    this.history = [`Initial: ${amount}`];
  }

  // works correct only for dd.mm.yyyy
  getYears(date) {
    let years = new Date() - new Date(date);
    years /= 31556952000;
    return Math.trunc(years);
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.getYears(this.birthDate)}, Amount: ${this.amount}`;
  }

  addMoney(value, reason) {
    this.amount += value;
    this.history.push(`${reason}: ${value}`);
  }

  withdrawMoney(value, reason) {
    this.amount -= value;
    this.history.push(`${reason}: -${value}`);
  }

  getAccountHistory() {
    return this.history;
  }
}

