class Person {
  constructor(name, birth, amount) {
    this.name = name;
    this.amount = amount;
    this.dayOfBirth = birth
    this.history = [`Initial: ${this.amount}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.getAge(this.dayOfBirth)}, Amount: ${this.amount}$.`);
  }

  addMoney(receipts, comment) {
    this.amount += receipts;
    this.history.push(`${comment}: ${receipts}`);
  }

  withdrawMoney(withdraw, comment) {
    this.amount -= withdraw;
    this.history.push(`${comment}: -${withdraw}`);
  }

  getAccountHistory() {
    console.log(this.history);
  }

  getAge(date) {
    const [day, month, year] = date.split('.');
    return new Date(new Date() - new Date(year, month, day)).getFullYear() - 1970;
  }
};

module.exports = Person;
