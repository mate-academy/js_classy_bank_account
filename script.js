'use strict';

class BankAccount {
  constructor(name, birth, moneyAmount) {
    this.name = name;
    this.birth = birth;
    this.moneyAmount = moneyAmount;
    this.accountHistory = [`Initial: ${moneyAmount}`];
  }

  getInfo() {
    this.age = function() {
      let date = this.birth.split('.');
      let day = date[0];
      let month = date[1];
      let year = date[2];
  
      let yearNow = new Date().getFullYear();
      let monthNow = new Date().getMonth() + 1;
      let dayNow = new Date().getDate();
  
      if (monthNow === month && dayNow < day || monthNow < month) {
        return yearNow - year - 1;
      } else {
        return yearNow - year;
      }
    }
  
    console.log(`Name: ${this.name}, Age: ${this.age(this.birth)}, Amount: ${this.moneyAmount}$`);
  }

  addMoney(sum, service) {
    this.moneyAmount += sum;
    this.accountHistory.push(`${service}: ${sum}`);
  }

  withdrawMoney(withdrawSum, service) {
    this.moneyAmount -= withdrawSum;
    this.accountHistory.push(`${service}: -${withdrawSum}`);
  }

  getAccountHistory() {
    console.log(this.accountHistory);
  }
}