class Person {
  constructor(name, birth, amount) {
    this.name = name;
    this.age = this.getDate(birth);
    this.amount = amount;
    this.currentAmount = this.amount;
    this.accountHistory = [{'initial': this.amount}];
    this.addOperation = function(sign, value, key) {
      switch(sign) {
        case '+': 
          this.currentAmount += value;
          this.accountHistory.push({[key]: value});
          break;
        case '-': 
          this.currentAmount -= value;
          this.accountHistory.push({[key]: -value});
          break;
      }
    }
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`)
  }

  addMoney(money, income) {
    this.addOperation('+', money, income);
  }

  withdrawMoney(money, consumption) {
    this.addOperation('-', money, consumption);
  }

  getAccountHistory() {
    console.log(`${this.accountHistory}`);
  }

  getDate(date) {
    const arr = date.split('.')
    return new Date(new Date() - new Date(`${arr[2]}/${arr[1]}/${arr[0]}`)).getFullYear() - 1970;
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$ 