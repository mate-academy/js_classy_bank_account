'use strict';

class PersonAccount {
  constructor(personName, personBirthDate, personMoneyAmount) {
    this.personName = personName;
    this.personBirthDate = personBirthDate;
    this.personMoneyAmount = personMoneyAmount;
    this.accountHistory = [`Initial: ${this.personMoneyAmount}`];
  }

  getPersonAge() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const personBornYear = this.personBirthDate.slice(-4);
    const personAge = yearNow - personBornYear;
    return personAge;
  }

  getInfo() {
    const personAge = this.getPersonAge();
    console.log(`Name: ${this.personName}, Age: ${personAge}, Amount: ${this.personMoneyAmount}$`);
  }

  addMoney(sum, info) {
    this.personMoneyAmount += sum;
    this.saveAccountHistory(sum, info);
  }

  withdrawMoney(sum, info) {
    this.personMoneyAmount -= sum;
    this.saveAccountHistory(`-${sum}`, info);
  }

  getAccountHistory() {
    console.log(this.accountHistory);
  }

  saveAccountHistory(sum, info) {
    const userAction = `${info}: ${sum}`;
    this.accountHistory.push(userAction);
  }
}
