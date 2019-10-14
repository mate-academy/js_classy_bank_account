class Person {
    constructor(name, dateOfBirth, balance) 
    {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.balance = balance;
    this.history = [{name: 'initial', value: this.balance}];
}

  getAge(birthDate) {
    const personBirthDate = birthDate.split('.').reverse().join('.');
    return Math.abs(new Date(Date.now() - Date.parse(personBirthDate)).getUTCFullYear() - 1970);
  };

  getInfo() {
    return `Name: ${this.name}, Age: ${this.getAge(this.dateOfBirth)}, Amount: ${this.balance}$`;
  };

  pushItems(history, amount, transaction) {
    history.push({name: transaction, value: amount});
  };

  addMoney(amount, transaction) {
    this.balance = +this.balance + amount;
    this.pushItems(this.history, amount, transaction);
  };

  withdrawMoney(amount, transaction) {
    this.balance = +this.balance - amount;
    this.pushItems(this.history, amount, transaction);
  };

  getAccountHistory() {
    return this.history;
  };
}