function Person (name, dateOfBirth, amount) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.amount = amount;
  this.date = new Date;
  this.age = this.date.getFullYear() - this.dateOfBirth.slice(-4) - 1;
  this.history = [`Initial: ${this.amount}`];
}

Person.prototype = {
  getInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$.`);
  },

  addMoney: function(receipts, comment) {
    this.amount += receipts;
    this.history.push(`${comment}: ${receipts}`);
  },

  withdrawMoney: function(withdraw, comment) {
    this.amount -= withdraw;
    this.history.push(`${comment}: -${withdraw}`);
  },

  getAccountHistory: function () {
    console.log(this.history);
  },
}

module.exports = Person;
