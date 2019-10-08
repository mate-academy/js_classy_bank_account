class Person {
  constructor(name, birthday, money) {
    this.name = name;
    this.birthday = birthday;
    this.money = money;
    this.accountHistory = [];
    this.accountHistory.push({message: 'Initial', amount: money}); 
  }

  getAccountHistory() {
    console.log(this.accountHistory.map(obj => `${obj.message}: ${obj.amount}`));
  }

  addMoney(amount, msg) {
    this.money += amount;
    this.accountHistory.push({message: msg, amount: amount});
  }

  withdrawMoney(amount, msg) {
    this.money -= amount;
    this.accountHistory.push({message: msg, amount: '-' + amount});
  }

  calculateAge() {
    let date =  new Date(Date.now() - Date.parse(this.birthday.split('.').reverse().join('.')));
  
    return Math.abs(date.getUTCFullYear() - 1970)
  }

  getInfo() {
    console.log(`Name: ${this.name} \nAge: ${this.calculateAge()} \nAmount: ${this.money}$`);
  }
}

