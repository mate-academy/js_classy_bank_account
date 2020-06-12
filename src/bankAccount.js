'use strict';

class BankAccount {
  constructor(clientName, clientDate, clientMoney) {
    this.name = clientName;
    this.birthday = clientDate;
    this.amount = clientMoney;
    this.moneyHistory = [`Initial: ${clientMoney}`];
  }

  findAge(birthday) {
    const birthdayFormat = birthday
      .split('.')
      .reverse()
      .join('-');

    const actualDate = new Date().getTime();
    const userBirthday = new Date(birthdayFormat).getTime();

    return (Math.floor((actualDate - userBirthday)
      / (365.25 * 24 * 3600 * 1000)));
  }

  getInfo() {
    const age = this.findAge(this.birthday);

    return `Name: ${this.name}, Age: ${age}, Amount: ${this.amount}$`;
  }

  addMoney(sum, operation) {
    this.amount += sum;

    return this.moneyHistory.push(`${operation}: ${sum}`);
  }

  withdrawMoney(sum, operation) {
    this.amount -= sum;

    return this.moneyHistory.push(`${operation}: -${sum}`);
  }

  getAccountHistory() {
    return this.moneyHistory;
  }
}

module.exports = {
  BankAccount,
};
