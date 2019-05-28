class Person {
  constructor(name, birth, amount) {
    this.name = name;
    this.amount = amount;
    this.age = this.getDate(birth)
    this.history = [`Initial: ${this.amount}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$.`);
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

  getDate(date) {
    const arr = date.split('.');
    return new Date(new Date() - new Date(`${arr[2]}/${arr[1]}/${arr[0]}`)).getFullYear() - 1970;
  }
};

module.exports = Person;
