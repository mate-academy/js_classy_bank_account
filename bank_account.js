Person.prototype = {
  getInfo: function () {
    console.log(`Name: ${this.name}, Age: ${calculateAge(this.birthDay)}, Amount: ${this.amount}$`);
  },

  addMoney: function (money, transaction) {
      this.amount += money;
      this.accountHistory.push(`${transaction}: ${money}$`);
  },

  withdrawMoney: function (money, transaction) {
    this.amount -= money;
    this.accountHistory.push(`${transaction}: -${money}$`);
  },

  getAccountHistory: function () {
    console.log(this.accountHistory);
  }
}

function calculateAge(birthDay){
  [day, month, year] = [...birthDay.split('.')];
  const convertDate = [year, month, day];
  birthDay = new Date(convertDate.join('/'));
  let currentDate = new Date();
  let difference = currentDate - birthDay;
  return Math.floor(difference / 31557600000); //31557600000 = 1 year in ms
}

function Person(name, birthDay, amount) {
  this.name = name;
  this.birthDay = birthDay;
  this.amount = amount;
  this.accountHistory = [`Initial: ${amount}`];
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$