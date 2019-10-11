class Person {
  constructor(name, birthday, money) {
    this.name = name;
    this.birthday = birthday;
    this.money = money;
    this.accountHistory = [{message: 'Initial', amount: money}];
  }

  getAccountHistory() {
    return this.accountHistory.map(obj => `${obj.message}: ${obj.amount}`);
  }

  addAccauntLog(amount, msg) {
    this.accountHistory.push({message: msg, amount: amount}); 
  }

  addMoney(amount, msg) {
    this.money += amount;
    this.addAccauntLog(amount, msg);
  }

  withdrawMoney(amount, msg) {
    this.money -= amount;
    this.addAccauntLog('-' + amount, msg);
  }

  calculateAge() {
    let date =  new Date(Date.now() - Date.parse(this.birthday.split('.').reverse().join('.')));
  
    return Math.abs(date.getUTCFullYear() - 1970)
  }

  getInfo() {
    return `Name: ${this.name} \nAge: ${this.calculateAge()} \nAmount: ${this.money}$`;
  }
}


const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(pavel.getInfo()); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$