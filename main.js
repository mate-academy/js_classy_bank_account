// function Person(name, birthday, money) {
//     this.name = name;
//     this.birthday = birthday;
//     this.money = money;
//     this.history = [`Initial: ${money}`];
//   }
    
//   Person.prototype.calculateAge = 
//     function (birthday) {
//       return ((Date.now() - Date.parse(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0;
//   }  
  
//   Person.prototype.addMoney = 
//     function(amount, source) {
//       this.money += amount;
//       this.history.push(`${source}: ${amount}`);
//       return `${source}: ${amount}`;
//     }
  
//     Person.prototype.withdrawMoney = 
//      function(amount, spending) {
//       this.money = this.money - amount;
//       this.history.push(`${spending}: -${amount}`);
//       return `${spending}: -${amount}`;
//     }
  
//     Person.prototype.getInfo = 
//     function() {
//       return `Name: ${this.name}, Age: ${this.calculateAge(this.birthday)}, Amount: ${this.money}$`;
//     }
  
//     Person.prototype.getAccountHistory =
//     function() {
//       return this.history;
//     }


class Person {
  constructor (name, birthday, money) {
    this.name = name;
    this.birthday = birthday;
    this.money = money;
    this.history = [`Initial: ${money}`];
  }

  calculateAge (birthday) {
    return ((Date.now() - Date.parse(birthday)) / (24 * 3600 * 365.25 * 1000)) | 0;
  }

  addMoney (amount, source) {
    this.money += amount;
    this.history.push(`${source}: ${amount}`);
    return `${source}: ${amount}`;
  }

  withdrawMoney (amount, spending) {
    this.money = this.money - amount;
    this.history.push(`${spending}: -${amount}`);
    return `${spending}: -${amount}`;
  }

  getInfo () {
    return `Name: ${this.name}, Age: ${this.calculateAge(this.birthday)}, Amount: ${this.money}$`;
  }

  getAccountHistory () {
    return this.history;
  }
}